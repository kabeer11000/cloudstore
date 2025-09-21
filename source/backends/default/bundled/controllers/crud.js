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
exports.InsertHandler = exports.GetHandler = exports.DeleteHandler = exports.UpdateHandler = void 0;
var mongo_client_1 = require("@/db/mongo-client");
var FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte",
    "ARRAY.IN": "$in",
    "ARRAY.NOT_IN": "$nin"
};
function UpdateHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function () {
        var db, filters, actionOutPut, query, updateData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4, mongo_client_1["default"]];
                case 1:
                    db = (_a.sent()).db(config.updatable.database.name);
                    filters = config.updatable.query.structured.where.map(function (filter) {
                        var _a, _b;
                        return (_a = {},
                            _a[filter.field] = (_b = {},
                                _b[FilterOperatorToMongoDBMap[filter.op]] = filter.value,
                                _b),
                            _a);
                    });
                    actionOutPut = void 0;
                    query = filters.length ? { $and: filters } : {};
                    updateData = { $set: config.updatable.query.structured.update.data };
                    if (!(config.updatable.type === "kn.cloudstore.collection")) return [3, 3];
                    return [4, db.collection(config.updatable.collection.name).updateMany(query, updateData)];
                case 2:
                    actionOutPut = _a.sent();
                    return [3, 5];
                case 3:
                    if (!(config.updatable.type === "kn.cloudstore.document")) return [3, 5];
                    return [4, db.collection(config.updatable.collection.name).updateOne(query, updateData)];
                case 4:
                    actionOutPut = _a.sent();
                    _a.label = 5;
                case 5:
                    socket.emit("update-cb-" + config.updatable.ref.id, { status: true, result: actionOutPut });
                    return [3, 7];
                case 6:
                    error_1 = _a.sent();
                    socket.emit("update-cb-" + config.updatable.ref.id, { status: false, error: error_1.message });
                    return [3, 7];
                case 7: return [2];
            }
        });
    });
}
exports.UpdateHandler = UpdateHandler;
function DeleteHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function () {
        var db, filters, deletionOutPut, query, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4, mongo_client_1["default"]];
                case 1:
                    db = (_a.sent()).db(config.database.name);
                    filters = config.query.structured.where.map(function (filter) {
                        var _a, _b;
                        return (_a = {},
                            _a[filter.field] = (_b = {},
                                _b[FilterOperatorToMongoDBMap[filter.op]] = filter.value,
                                _b),
                            _a);
                    });
                    deletionOutPut = void 0;
                    query = filters.length ? { $and: filters } : {};
                    if (!(config.type === "kn.cloudstore.document")) return [3, 3];
                    return [4, db.collection(config.collection.name).deleteOne(query)];
                case 2:
                    deletionOutPut = _a.sent();
                    return [3, 5];
                case 3:
                    if (!(config.type === "kn.cloudstore.document:array")) return [3, 5];
                    return [4, db.collection(config.collection.name).deleteMany(query)];
                case 4:
                    deletionOutPut = _a.sent();
                    _a.label = 5;
                case 5:
                    socket.emit("delete-cb-" + config.ref.id, { status: true, result: deletionOutPut });
                    return [3, 7];
                case 6:
                    error_2 = _a.sent();
                    socket.emit("delete-cb-" + config.ref.id, { status: false, error: error_2.message });
                    return [3, 7];
                case 7: return [2];
            }
        });
    });
}
exports.DeleteHandler = DeleteHandler;
function GetHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function () {
        var db, filters, result, query, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4, mongo_client_1["default"]];
                case 1:
                    db = (_a.sent()).db(config.database.name);
                    filters = config.query.structured.where.map(function (filter) {
                        var _a, _b;
                        return (_a = {},
                            _a[filter.field] = (_b = {},
                                _b[FilterOperatorToMongoDBMap[filter.op]] = filter.value,
                                _b),
                            _a);
                    });
                    result = void 0;
                    query = filters.length ? { $and: filters } : {};
                    if (!(config.type === "kn.cloudstore.document")) return [3, 3];
                    return [4, db.collection(config.collection.name).findOne(query)];
                case 2:
                    result = _a.sent();
                    return [3, 5];
                case 3:
                    if (!(config.type === "kn.cloudstore.document:array")) return [3, 5];
                    return [4, db.collection(config.collection.name).find(query).toArray()];
                case 4:
                    result = _a.sent();
                    _a.label = 5;
                case 5:
                    socket.emit("get-cb-" + config.ref.id, { status: true, data: result });
                    return [3, 7];
                case 6:
                    error_3 = _a.sent();
                    socket.emit("get-cb-" + config.ref.id, { status: false, error: error_3.message });
                    return [3, 7];
                case 7: return [2];
            }
        });
    });
}
exports.GetHandler = GetHandler;
function InsertHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function () {
        var db, documents, insertionOutPut, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!config || !config.ref) {
                        socket.emit("insert-cb-" + config.ref.id, { status: false, error: 'Config invalid, event ref not attached' });
                        return [2];
                    }
                    return [4, mongo_client_1["default"]];
                case 1:
                    db = (_a.sent()).db(config.database.name);
                    documents = config.insertions.map(function (_a) {
                        var data = _a.data;
                        return data;
                    });
                    return [4, db.collection(config.collection.name).insertMany(documents, {})];
                case 2:
                    insertionOutPut = _a.sent();
                    socket.emit("insert-cb-" + config.ref.id, { status: true, result: insertionOutPut });
                    return [3, 4];
                case 3:
                    error_4 = _a.sent();
                    socket.emit("insert-cb-" + config.ref.id, { status: false, error: error_4.message });
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}
exports.InsertHandler = InsertHandler;
//# sourceMappingURL=crud.js.map