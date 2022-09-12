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
const mongo_client_1 = __importDefault(require("../db-internals/mongo-client"));
const events_1 = __importDefault(require("../events"));
function WatchController(socket, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_client_1.default;
        const stream = db.collection(config.watchable.collection.name).watch([]);
        stream.on("change", data => socket.emit(events_1.default.server.WATCH_CALLBACK(config.stream.id), data));
        const activeWatchable = {
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
        };
        socket.data.activeWatchables.set(config.stream.id, activeWatchable);
        /** Emit Resume Token Change Event **/
        stream.once("resumeTokenChanged", token => socket.data.activeWatchables.set(config.stream.id, Object.assign(Object.assign({}, activeWatchable), { stream: Object.assign(Object.assign({}, activeWatchable.stream), { resumeToken: token }) })));
        socket.on(`watch:${config.stream.id}:close`, (config) => {
            stream.close();
            socket.data.activeWatchables.remove(config.stream.id);
            // Attempts to close the stream and remove dynamic listener
            socket.removeListener(`watch:${config.stream.id}:close`, () => socket.emit("closed-stream:" + config.stream.id));
        });
    });
}
exports.default = WatchController;
