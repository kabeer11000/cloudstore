"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const watch_1 = __importDefault(require("./controllers/watch"));
const socket_io_1 = require("socket.io");
const config_1 = require("./config");
const crud_1 = require("./controllers/crud");
const mongo_client_1 = __importDefault(require("./db-internals/mongo-client"));
require("dotenv").config({});
const io = new socket_io_1.Server(8080, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"]
    }
});
// io.use(AuthorizationListener);
io.on("connection", (socket) => {
    socket.data.activeWatchables = new Set();
    console.log("a device: ", socket.id, " has connected");
    socket.on("config", (d) => socket.emit("config-cb", { _s: config_1.ServerVersion }));
    socket.on("collection", (config) => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield mongo_client_1.default;
        const collections = yield db.collections();
        socket.emit("collections-cb", {
            exists: !!collections.find(a => a.collectionName === config.name),
            name: config.name
        });
    }));
    // Implements watch, watch-cb, watch:[STREAM_ID]:close, closed-stream:[STREAM_ID]
    socket.on("watch", (d) => (0, watch_1.default)(socket, d));
    // Implements update update-cb
    socket.on("update", (d) => (0, crud_1.UpdateHandler)(socket, d));
    // Implements delete deletion-error and delete-cb
    socket.on("delete", (d) => (0, crud_1.DeleteHandler)(socket, d));
    // Implements insert insertion-error and insert-cb-[REF_ID]
    socket.on("insert", (d) => (0, crud_1.InsertHandler)(socket, d));
});
console.log("socket server started on port http://localhost:8080/");
