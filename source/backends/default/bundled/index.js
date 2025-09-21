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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var watch_1 = require("@/controllers/watch");
var socket_io_1 = require("socket.io");
var config_1 = require("./config");
var crud_1 = require("@/controllers/crud");
var mongo_client_1 = require("@/db-internals/mongo-client");
var events_1 = require("@/events");
var authorization_1 = require("@/controllers/authorization");
require("dotenv").config({});
var io = new socket_io_1.Server(8080, {
    cors: {
        origin: "http://localhost:4321",
        methods: ["GET", "POST"]
    }
});
io.use(authorization_1["default"]);
io.on("connection", function (socket) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if ((process.env).ENV === 'development')
            console.log("a device: ", socket.id, " has connected");
        socket.data.activeWatchables = new Map();
        socket.on(events_1["default"].config.config(), function (config) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                socket.data.config = config;
                socket.emit("config-cb", { _s: config_1.ServerVersion });
                return [2];
            });
        }); });
        socket.on(events_1["default"].collection.collection(), function (config) { return __awaiter(void 0, void 0, void 0, function () {
            var db, collections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, mongo_client_1["default"]];
                    case 1:
                        db = (_a.sent()).db(socket.data.config.database);
                        return [4, db.collections()];
                    case 2:
                        collections = _a.sent();
                        socket.emit(events_1["default"].collection.collectionCB(config.ref.id), {
                            exists: !!collections.find(function (a) { return a.collectionName === config.name; }),
                            name: config.name
                        });
                        return [2];
                }
            });
        }); });
        socket.on("watch", function (d) { return (0, watch_1["default"])(socket, d); });
        socket.on("get", function (d) { return (0, crud_1.GetHandler)(socket, d); });
        socket.on("update", function (d) { return (0, crud_1.UpdateHandler)(socket, d); });
        socket.on("delete", function (d) { return (0, crud_1.DeleteHandler)(socket, d); });
        socket.on("insert", function (d) { return (0, crud_1.InsertHandler)(socket, d); });
        return [2];
    });
}); });
io.on('disconnect', function (reason) {
    console.log("client disconnected: ".concat(reason));
});
console.log("socket server started on port http://localhost:8080/");
//# sourceMappingURL=index.js.map