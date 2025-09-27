import { IActiveWatchable, IWatchConfig } from "@/types";
import MongoDatabasePromise from "@/db-internals/mongo-client";
import { Socket } from "socket.io";
import Events from "@/events";
import * as crypto from "crypto";
// import { ParseRules } from "@/auth/rules";

// Global shared streams and caches
export const collectionStreams = new Map();
export const queryCache = new Map();
export const streamWatchers = new Map();
export const FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte",
    "ARRAY.IN": "$in",
    "ARRAY.NOT_IN": "$nin",
    "ARRAY.EQUALS": "$eq",
    "ARRAY.ELEMENT_AT": "$expr"
}

function buildFilter(filter: any) {
    if (filter.op === "ARRAY.ELEMENT_AT") {
        return {
            $expr: {
                $eq: [
                    { $arrayElemAt: ["$" + filter.field, filter.value.index] },
                    filter.value.value
                ]
            }
        };
    } else {
        return {
            [filter.field]: {
                [FilterOperatorToMongoDBMap[filter.op as keyof typeof FilterOperatorToMongoDBMap]]: filter.value
            }
        };
    }
}

function hashQuery(filters: any[], orderBy?: any, limit?: number) {
    return crypto.createHash('sha256').update(JSON.stringify({ filters, orderBy, limit })).digest('hex');
}

function documentMatches(doc: any, filters: any[]) {
    if (!filters.length) return true;
    return filters.every(filter => {
        const value = filter.field.split('.').reduce((obj, key) => obj?.[key], doc);
        switch (filter.op) {
            case "EQUAL": return value === filter.value;
            case "GREATER": return value > filter.value;
            case "LESSER": return value < filter.value;
            case "GREATER_EQUAL": return value >= filter.value;
            case "LESSER_EQUAL": return value <= filter.value;
            case "ARRAY.IN": return Array.isArray(value) && value.includes(filter.value);
            case "ARRAY.NOT_IN": return Array.isArray(value) && !value.includes(filter.value);
            case "ARRAY.EQUALS": return Array.isArray(value) && Array.isArray(filter.value) &&
                value.length === filter.value.length && value.every((v, i) => v === filter.value[i]);
            case "ARRAY.ELEMENT_AT":
                if (!Array.isArray(value)) return false;
                const idx = filter.value.index < 0 ? value.length + filter.value.index : filter.value.index;
                return value[idx] === filter.value.value;
            default: return false;
        }
    });
}

function getSharedStream(dbName: string, collectionName: string) {
    const key = `${dbName}.${collectionName}`;
    let streamData = collectionStreams.get(key);

    if (!streamData) {
        streamData = { stream: null, watchers: new Set(), key };
        collectionStreams.set(key, streamData);
    }

    return streamData;
}

async function createStream(streamData: any, dbName: string, collectionName: string) {
    if (streamData.stream) return;

    const db = (await MongoDatabasePromise).db(dbName);
    streamData.stream = db.collection(collectionName).watch([], { fullDocument: 'updateLookup' });

    streamData.stream.on("change", async (data) => {
        for (const queryHash of streamData.watchers) {
            const cacheEntry = queryCache.get(queryHash);
            if (!cacheEntry) continue;

            let updated = false;
            const { results, rawFilters } = cacheEntry;

            switch (data.operationType) {
                case 'insert':
                    if (data.fullDocument && documentMatches(data.fullDocument, rawFilters)) {
                        results.push(data.fullDocument);
                        updated = true;
                    }
                    break;
                case 'update':
                    if (data.fullDocument) {
                        const docId = data.documentKey._id.toString();
                        const idx = results.findIndex(doc => doc._id.toString() === docId);
                        const matches = documentMatches(data.fullDocument, rawFilters);

                        if (idx >= 0 && matches) {
                            results[idx] = data.fullDocument;
                            updated = true;
                        } else if (idx >= 0 && !matches) {
                            results.splice(idx, 1);
                            updated = true;
                        } else if (idx < 0 && matches) {
                            results.push(data.fullDocument);
                            updated = true;
                        }
                    }
                    break;
                case 'delete':
                    const docId = data.documentKey._id.toString();
                    const originalLen = results.length;
                    cacheEntry.results = results.filter(doc => doc._id.toString() !== docId);
                    updated = results.length !== originalLen;
                    break;
            }

            if (updated) {
                cacheEntry.watchers.forEach(watcher => {
                    let final = [...results];
                    if (watcher.orderBy) {
                        final.sort((a, b) => {
                            const aVal = watcher.orderBy.field.split('.').reduce((obj, key) => obj?.[key], a);
                            const bVal = watcher.orderBy.field.split('.').reduce((obj, key) => obj?.[key], b);
                            const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
                            return watcher.orderBy.direction === 'DESCENDING' ? -cmp : cmp;
                        });
                    }
                    if (watcher.limit && watcher.limit > 0) {
                        final = final.slice(0, watcher.limit);
                    }
                    watcher.socket.emit(Events.server.WATCH_CALLBACK(watcher.streamId), {
                        collection: final,
                        _update: data
                    });
                });
            }
        }
    });
}
export default async function WatchController(socket: Socket<any, any>, config: IWatchConfig) {
    try {
        const dbName = config.watchable.database.name;
        const collectionName = config.watchable.collection.name;
        const rawFilters = config.watchable.query.structured.where;
        const mongoFilters = rawFilters.map(buildFilter);
        const { orderBy, limit } = config.watchable.query.structured;

        const queryHash = hashQuery(rawFilters, orderBy, limit);
        const streamData = getSharedStream(dbName, collectionName);

        // Initialize activeWatchables as Map if not exists
        if (!socket.data.activeWatchables) {
            socket.data.activeWatchables = new Map();
        }

        // Create watcher object
        const watcher = {
            socket,
            streamId: config.stream.id,
            orderBy,
            limit,
            queryHash
        };

        // Get or create query cache
        let cacheEntry = queryCache.get(queryHash);
        if (!cacheEntry) {
            const db = (await MongoDatabasePromise).db(dbName);
            const query = mongoFilters.length ? { $and: mongoFilters } : {};
            const results = await db.collection(collectionName).find(query).toArray();

            cacheEntry = { results, watchers: new Set(), rawFilters };
            queryCache.set(queryHash, cacheEntry);
        }

        cacheEntry.watchers.add(watcher);
        streamData.watchers.add(queryHash);
        streamWatchers.set(config.stream.id, { watcher, queryHash, streamData });

        // Create shared stream if needed
        await createStream(streamData, dbName, collectionName);

        const activeWatchable: IActiveWatchable = {
            database: { name: dbName, version: config.watchable.database.version },
            stream: { id: config.stream.id, active: true, paused: false, resumeToken: null },
            collection: { name: collectionName }
        };

        socket.data.activeWatchables.set(config.stream.id, activeWatchable);

        // Handle watch close
        const closeHandler = (closeConfig: { stream: { id: string } }) => {
            try {
                const watcherData = streamWatchers.get(closeConfig.stream.id);
                if (watcherData) {
                    const { watcher, queryHash, streamData } = watcherData;

                    // Remove from cache
                    const cacheEntry = queryCache.get(queryHash);
                    if (cacheEntry) {
                        cacheEntry.watchers.delete(watcher);
                        if (cacheEntry.watchers.size === 0) {
                            queryCache.delete(queryHash);
                        }
                    }

                    // Remove from stream
                    streamData.watchers.delete(queryHash);
                    if (streamData.watchers.size === 0) {
                        streamData.stream?.close();
                        collectionStreams.delete(streamData.key);
                    }

                    streamWatchers.delete(closeConfig.stream.id);
                }

                socket.data.activeWatchables.delete(closeConfig.stream.id);
                socket.removeListener(`watch:${closeConfig.stream.id}:close`, closeHandler);
                socket.emit("closed-stream:" + closeConfig.stream.id, { success: true });
            } catch (error) {
                socket.emit("closed-stream:" + closeConfig.stream.id, { success: false, error: error.message });
            }
        };

        socket.on(`watch:${config.stream.id}:close`, closeHandler);

        // Send initial data
        let final = [...cacheEntry.results];
        if (orderBy) {
            final.sort((a, b) => {
                const aVal = orderBy.field.split('.').reduce((obj, key) => obj?.[key], a);
                const bVal = orderBy.field.split('.').reduce((obj, key) => obj?.[key], b);
                const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
                return orderBy.direction === 'DESCENDING' ? -cmp : cmp;
            });
        }
        if (limit && limit > 0) {
            final = final.slice(0, limit);
        }

        socket.emit(Events.server.WATCH_CALLBACK(config.stream.id), {
            collection: final,
            _update: { operationType: 'initial' }
        });
    } catch (error) {
        socket.emit(Events.watch.watchError(config.stream.id), { error: error.message });
    }
}