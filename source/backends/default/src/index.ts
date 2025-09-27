import WatchController, { streamWatchers, queryCache, collectionStreams, queryHashCount } from "@/controllers/watch";
import { Server } from "socket.io";
import { ServerVersion } from "./config";
import { DeleteHandler, InsertHandler, UpdateHandler, GetHandler } from "@/controllers/crud";
import MongoDatabasePromise from "@/db-internals/mongo-client";
import Events from "@/events";
import Authorization from "@/controllers/authorization";
import { IWatchConfig, IUpdateConfig, IDeleteConfig, IInsertConfig, IGetConfig } from "@/types";

require("dotenv").config({});
const io = new Server(8080, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.use(Authorization);
io.on("error", (err) => {
    console.log("Connection rejected:", err.message);
    console.log("Client IP:", err.req.socket.remoteAddress);
});

io.on("connection", async (socket: any) => {
    if ((process.env).ENV === 'development') console.log("a device: ", socket.id, " has connected");
    socket.data.activeWatchables = new Map();
    socket.on(Events.config.config(), async (config: { database: string }) => {
        socket.data.config = config;
        socket.emit("config-cb", { _s: ServerVersion });
    });
    socket.on(Events.collection.collection(), async (config: { name: string, ref: { id: string } }) => {
        if (!socket.data) return socket.emit(Events.collection.collectionCB(config.ref.id), {
            error: true, name: config.name, e: 'Configuration not found for client. '
        })
        try {
            const db = (await MongoDatabasePromise).db(socket.data.config.database);
            const collections = await db.collections();
            socket.emit(Events.collection.collectionCB(config.ref.id), {
                exists: !!collections.find((a: { collectionName: string; }) => a.collectionName === config.name),
                name: config.name,
            });
        } catch (e) {
            console.log(e);
            socket.emit(Events.collection.collectionCB(config.ref.id), {
                name: config.name,
                error: true,
            });
        }
    });
    socket.on('disconnect', (reason) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`client ${socket.id} disconnected: ${reason}`);
        }

        // Clean up optimized watch streams
        if (socket.data.activeWatchables) {
            for (const [streamId] of socket.data.activeWatchables) {
                try {
                    const watcherData = streamWatchers?.get(streamId);
                    if (watcherData) {
                        const { watcher, queryHash, streamData } = watcherData;

                        // Remove from cache
                        const cacheEntry = queryCache?.get(queryHash);
                        if (cacheEntry) {
                            cacheEntry.watchers.delete(watcher);
                            if (cacheEntry.watchers.size === 0) {
                                queryCache.delete(queryHash);
                            }
                        }

                        // Remove from stream
                        streamData.watcherCount--;
                        const count = queryHashCount?.get(queryHash) || 0;
                        if (count > 1) {
                            queryHashCount.set(queryHash, count - 1);
                        } else {
                            queryHashCount?.delete(queryHash);
                            streamData.watchers.delete(queryHash);
                        }

                        if (streamData.watcherCount === 0) {
                            streamData.stream?.close();
                            collectionStreams?.delete(streamData.key);
                        }

                        streamWatchers.delete(streamId);
                    }
                } catch (e) {
                    // Ignore cleanup errors
                }
            }
            socket.data.activeWatchables.clear();
        }
    });
    // Implements watch, watch-cb, watch:[STREAM_ID]:close, closed-stream:[STREAM_ID]
    socket.on("watch", (d: IWatchConfig) => WatchController(socket, d));
    // Implements get get-cb-[REF_ID]
    socket.on("get", (d: IGetConfig) => GetHandler(socket, d));
    // Implements update update-cb-[REF_ID]
    socket.on("update", (d: IUpdateConfig) => UpdateHandler(socket, d));
    // Implements delete delete-cb-[REF_ID]
    socket.on("delete", (d: IDeleteConfig) => DeleteHandler(socket, d));
    // Implements insert insert-cb-[REF_ID]
    socket.on("insert", (d: IInsertConfig) => InsertHandler(socket, d));
});
console.log("socket server started on port http://localhost:8080/")