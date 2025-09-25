import { IActiveWatchable, IWatchConfig } from "@/types";
import MongoDatabasePromise from "@/db-internals/mongo-client";
import { Socket } from "socket.io";
import Events from "@/events";
// import { ParseRules } from "@/auth/rules";
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
        // Handle ARRAY.ELEMENT_AT: { index: -1, value: 'b' }
        const result = {
            $expr: {
                $eq: [
                    { $arrayElemAt: ["$" + filter.field, filter.value.index] },
                    filter.value.value
                ]
            }
        };
        console.log('ARRAY.ELEMENT_AT filter built:', JSON.stringify(result, null, 2));
        return result;
    } else {
        // Handle standard operations
        return {
            [filter.field]: {
                [FilterOperatorToMongoDBMap[filter.op as keyof typeof FilterOperatorToMongoDBMap]]: filter.value
            }
        };
    }
}
export default async function WatchController(socket: Socket<any, any>, config: IWatchConfig) {
    try {
        const db = (await MongoDatabasePromise).db(config.watchable.database.name);
        const stream = db.collection(config.watchable.collection.name).watch([]);
        const filters = config.watchable.query.structured.where.map(buildFilter);

        // Initialize activeWatchables as Map if not exists
        if (!socket.data.activeWatchables) {
            socket.data.activeWatchables = new Map();
        }

        stream.on("change", async data => {
            try {
                const query = filters.length ? { $and: [...filters] } : {};
                console.log('MongoDB Query:', JSON.stringify(query, null, 2));
                const collection = await db.collection(config.watchable.collection.name)
                    .find(query)
                    .toArray();
                socket.emit(Events.server.WATCH_CALLBACK(config.stream.id), {
                    collection,
                    _update: data
                });
            } catch (error) {
                socket.emit(Events.watch.watchError(config.stream.id), { error: error.message });
            }
        });

        const activeWatchable: IActiveWatchable = {
            database: {
                name: db.databaseName,
                version: config.watchable.database.version,
            },
            stream: {
                id: config.stream.id,
                active: true,
                paused: false,
                resumeToken: stream.resumeToken
            },
            collection: {
                name: config.watchable.collection.name,
            }
        };

        socket.data.activeWatchables.set(config.stream.id, activeWatchable);

        // Handle resume token changes
        stream.once("resumeTokenChanged", token => {
            const updated = {
                ...activeWatchable,
                stream: {
                    ...activeWatchable.stream,
                    resumeToken: token
                }
            };
            socket.data.activeWatchables.set(config.stream.id, updated);
        });

        // Handle watch close
        const closeHandler = (closeConfig: { stream: { id: string } }) => {
            try {
                stream.close();
                socket.data.activeWatchables.delete(closeConfig.stream.id);
                socket.removeListener(`watch:${closeConfig.stream.id}:close`, closeHandler);
                socket.emit("closed-stream:" + closeConfig.stream.id, { success: true });
            } catch (error) {
                socket.emit("closed-stream:" + closeConfig.stream.id, { success: false, error: error.message });
            }
        };

        socket.on(`watch:${config.stream.id}:close`, closeHandler);

        // Send initial data
        const initialQuery = filters.length ? { $and: [...filters] } : {};
        console.log('Initial MongoDB Query:', JSON.stringify(initialQuery, null, 2));
        const initialData = await db.collection(config.watchable.collection.name)
            .find(initialQuery)
            .toArray();
        console.log('Initial query results count:', initialData.length);
        socket.emit(Events.server.WATCH_CALLBACK(config.stream.id), {
            collection: initialData,
            _update: { operationType: 'initial' }
        });
    } catch (error) {
        socket.emit(Events.watch.watchError(config.stream.id), { error: error.message });
    }
}