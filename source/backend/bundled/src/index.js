"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("../controllers/authorization");
require("dotenv").config({});
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(8080);
const server_id = "cloudstore@a.1.1.1";
io.use(authorization_1.AuthorizationListener);
io.on("connection", (socket) => {
    // send a message to the client
    socket.on("config", () => socket.emit("config-cb", { _s: server_id }));
    // receive a message from the client
    socket.on("watch", (config) => {
        if ()
            ;
    });
});
console.log("socket server started on port http://localhost:8080/");
