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
exports.InsertHandler = exports.DeleteHandler = exports.UpdateHandler = void 0;
const mongo_client_1 = __importDefault(require("../db-internals/mongo-client"));
const FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte",
};
function UpdateHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_client_1.default;
        let actionOutPut;
        if (config.updatable.type === "kn.cloudstore.collection")
            actionOutPut = yield db.collection(config.updatable.collection.name).updateMany({
                $and: config.updatable.query.structured.where
            }, config.updatable.query.structured.update.data);
        if (config.updatable.type === "kn.cloudstore.document")
            actionOutPut = yield db.collection(config.updatable.collection.name).updateOne({
                $and: config.updatable.query.structured.where
            }, config.updatable.query.structured.update.data);
        socket.emit("update-cb", Object.assign({ status: true }, actionOutPut));
    });
}
exports.UpdateHandler = UpdateHandler;
function DeleteHandler(socket, config) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (config.type === "kn.cloudstore.document" && !((_a = config.document) === null || _a === void 0 ? void 0 : _a.id))
            return socket.emit("deletion-error", {
                reason: "Document Id wasn't present",
                requestConfig: config
            });
        const db = yield mongo_client_1.default;
        const filters = config.query.structured.where.map(filter => ({
            [filter.field]: {
                [FilterOperatorToMongoDBMap[filter.op]]: filter.value
            }
        }));
        let deletionOutPut;
        if (config.type === "kn.cloudstore.document")
            deletionOutPut = yield db.collection(config.collection.name).deleteOne(filters.length ? { $and: filters } : {});
        if (config.type === "kn.cloudstore.document:array")
            deletionOutPut = yield db.collection(config.collection.name).deleteMany(filters.length ? { $and: filters } : {});
        socket.emit("delete-cb-" + config.ref.id, { status: true, _deletion: deletionOutPut, filters: filters });
    });
}
exports.DeleteHandler = DeleteHandler;
function InsertHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_client_1.default;
        if (!config || !config.ref)
            return console.log("insert failed: ", config);
        try {
            console.log("insert requested");
            const insertionOutPut = yield db.collection(config.collection.name).insertMany(config.insertions.map(({ data }) => data), {});
            socket.emit("insert-cb-" + config.ref.id, { status: true, _insertion: insertionOutPut });
        }
        catch (e) {
            socket.emit("insert-cb-" + config.ref.id, { status: false, _insertion: null, error: e });
            console.log("insert write error");
        }
    });
}
exports.InsertHandler = InsertHandler;
//# sourceMappingURL=crud.js.map