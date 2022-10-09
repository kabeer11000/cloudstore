import WatchController from "@/controllers/watch";
import {Server} from "socket.io";
import {ServerVersion} from "./config";
import {DeleteHandler, InsertHandler, UpdateHandler} from "@/controllers/crud";
import MongoDatabasePromise from "@/db/mongo-client";
import Events from "@/events";
import Authorization from "@/controllers/authorization";
import {ParseRules} from "@/auth/rules";

require("dotenv").config({});
const io = new Server(8080, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"]
    }
});

io.use(Authorization);
io.on("connection", async (socket) => {
    console.log("a device: ", socket.id, " has connected");
    socket.data.activeWatchables = new Set();
    console.log(await ParseRules())
    socket.on(Events.config.config(), () => socket.emit("config-cb", {_s: ServerVersion}));
    socket.on(Events.collection.collection(), async (config: { name: string, streamId: string }) => {
        const db = await MongoDatabasePromise;
        const collections = await db.collections();
        socket.emit(Events.collection.collectionCB(config.streamId), {
            exists: !!collections.find(a => a.collectionName === config.name),
            name: config.name,
        });
    });
    // Implements watch, watch-cb, watch:[STREAM_ID]:close, closed-stream:[STREAM_ID]
    socket.on("watch", (d) => WatchController(socket, d));
    // Implements update update-cb
    socket.on("update", (d) => UpdateHandler(socket, d));
    // Implements delete deletion-error and delete-cb
    socket.on("delete", (d) => DeleteHandler(socket, d))
    // Implements insert insertion-error and insert-cb-[REF_ID]
    socket.on("insert", (d) => InsertHandler(socket, d))
});
console.log("socket server started on port http://localhost:8080/")