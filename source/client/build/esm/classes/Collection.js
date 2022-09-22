var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import QueryBuilder from "./QueryBuilder";
import { v4 } from "uuid";
import WatchableCollection from "./WatchableCollection";
var Collection = /** @class */ (function () {
    function Collection(config) {
        this.internals = config;
    }
    Collection.prototype.watch = function (query, onUpdate) {
        if (!this.internals.collection.exists)
            throw new Error("Collection doesn't exist");
        return new WatchableCollection({
            filters: query._query.filters,
            socket: this.internals.socket,
            limit: query._query.limit,
            orderBy: query._query.orderBy,
            database: { name: this.internals.database.name },
            collection: this.internals.collection,
            onUpdate: onUpdate
        });
    };
    Collection.prototype.remove = function (query) {
        var _this = this;
        var ref = v4();
        return new Promise(function (resolve, reject) {
            _this.internals.socket.on("delete-cb-" + ref, function (_a) {
                var status = _a.status, data = __rest(_a, ["status"]);
                status ? resolve(data) : reject(data);
                _this.internals.socket.removeListener("delete-cb-" + ref);
            });
            _this.internals.socket.emit("delete", {
                type: "kn.cloudstore.document:array",
                database: {
                    name: _this.internals.database.name,
                },
                collection: {
                    name: _this.internals.collection.name,
                },
                ref: {
                    id: ref
                },
                query: {
                    structured: {
                        from: {
                            collection: _this.internals.collection.name
                        },
                        where: query._query.filters
                    }
                }
            });
        });
    };
    Collection.prototype.insert = function (data) {
        var _this = this;
        var ref = v4();
        return new Promise(function (resolve, reject) {
            var _a, _b;
            (_a = _this.internals.socket) === null || _a === void 0 ? void 0 : _a.on("insert-cb-" + ref, function (_a) {
                var _b;
                var status = _a.status, data = __rest(_a, ["status"]);
                status ? resolve(data) : reject(data);
                (_b = _this.internals.socket) === null || _b === void 0 ? void 0 : _b.removeListener("insert-cb-" + ref);
            });
            (_b = _this.internals.socket) === null || _b === void 0 ? void 0 : _b.emit("insert", {
                type: "kn.cloudstore.document:array",
                database: {
                    name: _this.internals.database.name,
                },
                collection: {
                    name: _this.internals.collection.name,
                },
                ref: {
                    id: ref
                },
                options: {},
                insertions: [{ data: data }]
            });
        });
    };
    return Collection;
}());
export default Collection;
