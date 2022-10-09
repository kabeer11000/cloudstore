import {IActiveWatchable, IWatchConfig} from "@/types";
import MongoDatabasePromise from "@/db/mongo-client";
import {Socket} from "socket.io";
import Events from "@/events";
export const FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte",
    // Non Exhaustive
}
export default async function WatchController(socket: Socket<any, any>, config: IWatchConfig) {
    const db = await MongoDatabasePromise;
    const stream = db.collection(config.watchable.collection.name).watch([]);
    const filters = config.watchable.query.structured.where.map(filter => ({
        [filter.field]: {
            // @ts-ignore
            [FilterOperatorToMongoDBMap[filter.op]]: filter.value
        }
    }))
    stream.on("change", async data => socket.emit(Events.server.WATCH_CALLBACK(config.stream.id), {collection: await db.collection(config.watchable.collection.name).find(filters.length ? {$and: [...filters]} : {}).toArray(), _update: data}));
    const activeWatchable: IActiveWatchable = {
        database: {
            name: db.databaseName,
            version: config.watchable.database.version,
        },
        stream: {
            id: config.stream.id,
            active: !!1,
            paused: !!0,
            resumeToken: stream.resumeToken
        },
        collection: {
            name: config.watchable.collection.name,
        }
    }
    socket.data.activeWatchables.add(config.stream.id, activeWatchable);
    /** Emit Resume Token Change Event **/
    stream.once("resumeTokenChanged", token => socket.data.activeWatchables.add(config.stream.id, <IActiveWatchable>{
        ...activeWatchable,
        stream: {
            ...activeWatchable.stream,
            resumeToken: token
        }
    }));
    socket.on(`watch:${config.stream.id}:close`, (config: { stream: { id: string, [x: string]: any }, [x: string]: any }) => {
        stream.close();
        socket.data.activeWatchables.remove(config.stream.id);
        // Attempts to close the stream and remove dynamic listener
        socket.removeListener(`watch:${config.stream.id}:close`, () => socket.emit("closed-stream:" + config.stream.id));
    });
    socket.emit(Events.server.WATCH_CALLBACK(config.stream.id), {collection: await db.collection(config.watchable.collection.name).find(filters.length ? {$and: [...filters]} : {}).toArray(), _update: {}})
}