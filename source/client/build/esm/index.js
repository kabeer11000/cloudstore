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
        while (_) try {
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
import { io } from 'socket.io-client';
import { v4 } from "uuid";
import { IndexedDB } from "./adapters";
import QueryBuilder from "./classes/QueryBuilder";
import Collection from "./classes/Collection";
var CloudStore = /** @class */ (function () {
    function CloudStore(config) {
        this.internals = {
            socket: undefined,
            constructorConfig: undefined,
            connection: {
                connected: false,
                remote: {
                    config: undefined
                }
            },
            contexts: {},
            cache: {
                active: "IF_NO_NETWORK",
                storage: {
                    adapter: new IndexedDB("_kn.cloudstore.cache.temp.collection")
                }
            }
        };
        this.internals.socket = io(config.server.uri, {
            extraHeaders: {
                authorization: "Bearer ".concat(config.server.access.key)
            },
            query: {
                id: config.server.access.key
            }
        });
        this.internals.constructorConfig = config;
        this.internals.cache.storage.adapter = config.cache.storage.adapter;
    }
    CloudStore.prototype.connect = function () {
        var _this = this;
        if (!this.internals.socket)
            throw new Error("Socket Doesn't Exist");
        this.internals.socket.emit("config", {});
        this.internals.socket.on("config-cb", function (data) {
            _this.internals.connection.connected = true;
            _this.internals.connection.remote.config = data;
        });
    };
    CloudStore.prototype.QueryWithCallback = function (eventName, data, callbackEventName, _a) {
        var _this = this;
        var _b = _a === void 0 ? { cleanup: true } : _a, cleanup = _b.cleanup;
        return new Promise(function (resolve, reject) {
            var _a, _b;
            (_a = _this.internals.socket) === null || _a === void 0 ? void 0 : _a.on(callbackEventName, function (response) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    if (!(response === null || response === void 0 ? void 0 : response.error))
                        resolve(response);
                    else
                        reject(response);
                    if (cleanup)
                        (_a = this.internals.socket) === null || _a === void 0 ? void 0 : _a.removeListener(callbackEventName);
                    return [2 /*return*/];
                });
            }); });
            (_b = _this.internals.socket) === null || _b === void 0 ? void 0 : _b.emit(eventName, data);
        });
    };
    Object.defineProperty(CloudStore.prototype, "query", {
        // @ts-ignore
        get: function () {
            var id = v4();
            var query = new QueryBuilder(id);
            this.internals.contexts[id] = query;
            return query;
        },
        enumerable: false,
        configurable: true
    });
    CloudStore.prototype.collection = function (name) {
        var _a, _b, _c;
        (_a = this.internals.socket) === null || _a === void 0 ? void 0 : _a.on("collection-cb", function (response) {
            if (!response.exists)
                throw new Error("Collection: " + response.name + " does not exist");
        });
        (_b = this.internals.socket) === null || _b === void 0 ? void 0 : _b.emit("collection", { name: name });
        if (!this.internals.socket || !((_c = this.internals.constructorConfig) === null || _c === void 0 ? void 0 : _c.database))
            return;
        return new Collection({
            database: this.internals.constructorConfig.database,
            collection: { exists: true, name: name },
            socket: this.internals.socket
        });
    };
    Object.defineProperty(CloudStore.prototype, "info", {
        // @ts-ignore
        get: function () {
            return this.internals;
        },
        enumerable: false,
        configurable: true
    });
    CloudStore.utils = {};
    return CloudStore;
}());
export default CloudStore;
import * as Adapters_1 from "./adapters";
export { Adapters_1 as Adapters };
import * as Types_1 from "./types";
export { Types_1 as Types };
