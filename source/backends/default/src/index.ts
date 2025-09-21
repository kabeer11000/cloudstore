import WatchController from "@/controllers/watch";
import { Server } from "socket.io";
import { ServerVersion } from "./config";
import { DeleteHandler, InsertHandler, UpdateHandler, GetHandler } from "@/controllers/crud";
import MongoDatabasePromise from "@/db-internals/mongo-client";
import Events from "@/events";
import Authorization from "@/controllers/authorization";
// import { ParseExpression } from "./rules/lexer";
import { IWatchConfig, IUpdateConfig, IDeleteConfig, IInsertConfig, IGetConfig } from "@/types";

require("dotenv").config({});
const io = new Server(8080, {
    cors: {
        origin: "http://localhost:4321",
        methods: ["GET", "POST"]
    }
});

io.use(Authorization);
io.on("connection", async (socket: any) => {
    if ((process.env).ENV === 'development') console.log("a device: ", socket.id, " has connected");
    // ParseExpression();
    socket.data.activeWatchables = new Map();
    socket.on(Events.config.config(), async (config: {database: string}) => {
        socket.data.config = config;
        socket.emit("config-cb", { _s: ServerVersion });
    });
    socket.on(Events.collection.collection(), async (config: { name: string, ref: {id: string} }) => {
        const db = (await MongoDatabasePromise).db(socket.data.config.database);
        const collections = await db.collections();
        socket.emit(Events.collection.collectionCB(config.ref.id), {
            exists: !!collections.find((a: { collectionName: string; }) => a.collectionName === config.name),
            name: config.name,
        });
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

io.on('disconnect', (reason) => {
    console.log(`client disconnected: ${reason}`);
});
console.log("socket server started on port http://localhost:8080/")