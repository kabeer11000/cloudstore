import {Socket} from "socket.io";
import {IDeleteConfig, IInsertConfig, IUpdateConfig} from "../types";
import MongoDatabasePromise from "../db-internals/mongo-client";
import {Document, UpdateResult} from "mongodb";

export async function UpdateHandler(socket: Socket<any, any>, config: IUpdateConfig) {
    const db = await MongoDatabasePromise;
    let actionOutPut: UpdateResult | undefined | Document;
    if (config.updatable.type === "kn.cloudstore.collection") actionOutPut = await db.collection(config.updatable.collection.name).updateMany({
        $and: config.updatable.query.structured.where
    }, config.updatable.query.structured.update.data) // $lt, $le, and all atomic operators work out of the box
    if (config.updatable.type === "kn.cloudstore.document") actionOutPut = await db.collection(config.updatable.collection.name).updateOne({
        $and: config.updatable.query.structured.where
    }, config.updatable.query.structured.update.data) // $lt, $le, and all atomic operators work out of the box
    socket.emit("update-cb", {status: true, ...actionOutPut});
}

export async function DeleteHandler(socket: Socket<any, any>, config: IDeleteConfig) {
    if (config.type === "kn.cloudstore.document" && !config.document?.id) return socket.emit("deletion-error", {
        reason: "Document Id wasn't present",
        requestConfig: config
    });
    const db = await MongoDatabasePromise;
    if (config.type === "kn.cloudstore.document") await db.collection(config.collection.name).deleteOne({$and: config.query.structured.where});
    if (config.type === "kn.cloudstore.document:array") await db.collection(config.collection.name).deleteMany({$and: config.query.structured.where});
    socket.emit("delete-cb", {status: true});
}

export async function InsertHandler(socket: Socket<any, any>, config: IInsertConfig) {
    /** Insertions can only be arrays, so for a single document, the array will contain one element **/
    const db = await MongoDatabasePromise;
    const insertionOutPut = await db.collection(config.collection.name).insertMany(config.insertions, {});
    socket.emit("insert-cb", {status: true, insertion: insertionOutPut});
}