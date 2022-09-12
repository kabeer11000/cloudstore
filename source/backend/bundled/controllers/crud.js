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
function UpdateHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_client_1.default;
        let actionOutPut;
        if (config.updatable.type === "kn.cloudstore.collection")
            actionOutPut = yield db.collection(config.updatable.collection.name).updateMany({
                $and: config.updatable.query.structured.where
            }, config.updatable.query.structured.update.data); // $lt, $le, and all atomic operators work out of the box
        if (config.updatable.type === "kn.cloudstore.document")
            actionOutPut = yield db.collection(config.updatable.collection.name).updateOne({
                $and: config.updatable.query.structured.where
            }, config.updatable.query.structured.update.data); // $lt, $le, and all atomic operators work out of the box
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
        if (config.type === "kn.cloudstore.document")
            yield db.collection(config.collection.name).deleteOne({ $and: config.query.structured.where });
        if (config.type === "kn.cloudstore.document:array")
            yield db.collection(config.collection.name).deleteMany({ $and: config.query.structured.where });
        socket.emit("delete-cb", { status: true });
    });
}
exports.DeleteHandler = DeleteHandler;
function InsertHandler(socket, config) {
    return __awaiter(this, void 0, void 0, function* () {
        /** Insertions can only be arrays, so for a single document, the array will contain one element **/
        const db = yield mongo_client_1.default;
        const insertionOutPut = yield db.collection(config.collection.name).insertMany(config.insertions, {});
        socket.emit("insert-cb", { status: true, insertion: insertionOutPut });
    });
}
exports.InsertHandler = InsertHandler;
