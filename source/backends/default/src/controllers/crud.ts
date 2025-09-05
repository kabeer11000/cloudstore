import { Socket } from "socket.io";
import { IDeleteConfig, IInsertConfig, IUpdateConfig } from "@/types";
import MongoDatabasePromise from "@/db/mongo-client";
import { Document, UpdateResult } from "mongodb";

const FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte",
    // Non Exhaustive
}

export async function UpdateHandler(socket: Socket<any, any>, config: IUpdateConfig) {
    const db = await MongoDatabasePromise;
    let actionOutPut: UpdateResult | undefined | Document;
    if (config.updatable.type === "kn.cloudstore.collection") actionOutPut = await db.collection(config.updatable.collection.name).updateMany({
        $and: config.updatable.query.structured.where
    }, config.updatable.query.structured.update.data) // $lt, $le, and all atomic operators work out of the box
    if (config.updatable.type === "kn.cloudstore.document") actionOutPut = await db.collection(config.updatable.collection.name).updateOne({
        $and: config.updatable.query.structured.where
    }, config.updatable.query.structured.update.data) // $lt, $le, and all atomic operators work out of the box
    socket.emit("update-cb", { status: true, ...actionOutPut });
}

export async function DeleteHandler(socket: Socket<any, any>, config: IDeleteConfig) {
    if (config.type === "kn.cloudstore.document" && !config.document?.id) return socket.emit("deletion-error", {
        reason: "Document Id wasn't present",
        requestConfig: config
    });
    const db = await MongoDatabasePromise;
    const filters = config.query.structured.where.map(filter => ({
        [filter.field]: {
            // @ts-ignore
            [FilterOperatorToMongoDBMap[filter.op]]: filter.value
        }
    }))
    let deletionOutPut;
    if (config.type === "kn.cloudstore.document") deletionOutPut = await db.collection(config.collection.name).deleteOne(filters.length ? { $and: filters } : {});
    if (config.type === "kn.cloudstore.document:array") deletionOutPut = await db.collection(config.collection.name).deleteMany(filters.length ? { $and: filters } : {});
    socket.emit("delete-cb-" + config.ref.id, { status: true, _deletion: deletionOutPut, filters: filters });
}

export async function InsertHandler(socket: Socket<any, any>, config: IInsertConfig) {
    /** Insertions can only be arrays, so for a single document, the array will contain one element **/
    const db = await MongoDatabasePromise;
    if (!config || !config.ref) return console.log("insert failed: ", config);
    try {
        console.log("insert requested");
        const insertionOutPut = await db.collection(config.collection.name).insertMany(config.insertions.map(({ data }) => data), {});
        socket.emit("insert-cb-" + config.ref.id, { status: true, _insertion: insertionOutPut });
    } catch (e) {
        socket.emit("insert-cb-" + config.ref.id, { status: false, _insertion: null, error: e })
        console.log("insert write error");
    }
}