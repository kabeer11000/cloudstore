"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const watch_1 = __importDefault(require("./controllers/watch"));
const authorization_1 = require("./controllers/authorization");
const socket_io_1 = require("socket.io");
const config_1 = require("./config");
const crud_1 = require("./controllers/crud");
require("dotenv").config({});
const io = new socket_io_1.Server(8080, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"]
    }
});
io.use(authorization_1.AuthorizationListener);
io.on("connection", (socket) => {
    socket.data.activeWatchables = new Set({} || socket.data.active_watchables);
    socket.on("config", () => socket.emit("config-cb", { _s: config_1.ServerVersion }));
    // Implements watch, watch-cb, watch:[STREAM_ID]:close, closed-stream:[STREAM_ID]
    socket.on("watch", (d) => (0, watch_1.default)(socket, d));
    // Implements update update-cb
    socket.on("update", (d) => (0, crud_1.UpdateHandler)(socket, d));
    // Implements delete deletion-error and delete-cb
    socket.on("delete", (d) => (0, crud_1.DeleteHandler)(socket, d));
});
console.log("socket server started on port http://localhost:8080/");
