import {IActiveWatchable, IUpdateWatchParameters, IWatchConfig} from "../types";
import MongoDatabasePromise from "../db-internals/mongo-client";
import {Socket} from "socket.io";
import Events from "../events";

export default async function WatchController(socket: Socket<any, any>, config: IWatchConfig) {
    const db = await MongoDatabasePromise;
    const stream = db.collection(config.watchable.collection.name).watch([]);
    stream.on("change", data => socket.emit(Events.server.WATCH_CALLBACK(config.stream.id), data));
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
    socket.data.activeWatchables.set(config.stream.id, activeWatchable);
    /** Emit Resume Token Change Event **/
    stream.once("resumeTokenChanged", token => socket.data.activeWatchables.set(config.stream.id, <IActiveWatchable>{
        ...activeWatchable,
        stream: {
            ...activeWatchable.stream,
            resumeToken: token
        }
    }));
    socket.on(`watch:${config.stream.id}:close`, (config: IUpdateWatchParameters) => {
        stream.close();
        socket.data.activeWatchables.remove(config.stream.id);
        // Attempts to close the stream and remove dynamic listener
        socket.removeListener(`watch:${config.stream.id}:close`, () => socket.emit("closed-stream:" + config.stream.id));
    });
}