import { Socket } from "socket.io";
import { IDeleteConfig, IInsertConfig, IUpdateConfig, IGetConfig } from "@/types";
import MongoDatabasePromise from "@/db-internals/mongo-client";
import { Document, UpdateResult } from "mongodb";

const FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte",
    "ARRAY.IN": "$in",
    "ARRAY.NOT_IN": "$nin",
    "ARRAY.EQUALS": "$eq",
    "ARRAY.ELEMENT_AT": "$expr"
}

function buildFilter(filter: any) {
    if (filter.op === "ARRAY.ELEMENT_AT") {
        // Handle ARRAY.ELEMENT_AT: { index: -1, value: 'b' }
        return {
            $expr: {
                $eq: [
                    { $arrayElemAt: [`$${filter.field}`, filter.value.index] },
                    filter.value.value
                ]
            }
        };
    } else {
        // Handle standard operations
        return {
            [filter.field]: {
                [FilterOperatorToMongoDBMap[filter.op as keyof typeof FilterOperatorToMongoDBMap]]: filter.value
            }
        };
    }
}

export async function UpdateHandler(socket: Socket<any, any>, config: IUpdateConfig) {
    try {
        const db = (await MongoDatabasePromise).db(config.updatable.database.name);
        const filters = config.updatable.query.structured.where.map(buildFilter);

        let actionOutPut: UpdateResult | undefined | Document;
        const query = filters.length ? { $and: filters } : {};
        const updateData = { $set: config.updatable.query.structured.update.data };

        if (config.updatable.type === "kn.cloudstore.collection") {
            actionOutPut = await db.collection(config.updatable.collection.name).updateMany(query, updateData);
        } else if (config.updatable.type === "kn.cloudstore.document") {
            actionOutPut = await db.collection(config.updatable.collection.name).updateOne(query, updateData);
        }

        socket.emit("update-cb-" + config.updatable.ref.id, { status: true, result: actionOutPut });
    } catch (error) {
        socket.emit("update-cb-" + config.updatable.ref.id, { status: false, error: error.message });
    }
}

export async function DeleteHandler(socket: Socket<any, any>, config: IDeleteConfig) {
    try {
        const db = (await MongoDatabasePromise).db(config.database.name);
        const filters = config.query.structured.where.map(buildFilter);

        let deletionOutPut;
        const query = filters.length ? { $and: filters } : {};

        if (config.type === "kn.cloudstore.document") {
            deletionOutPut = await db.collection(config.collection.name).deleteOne(query);
        } else if (config.type === "kn.cloudstore.document:array") {
            deletionOutPut = await db.collection(config.collection.name).deleteMany(query);
        }

        socket.emit("delete-cb-" + config.ref.id, { status: true, result: deletionOutPut });
    } catch (error) {
        socket.emit("delete-cb-" + config.ref.id, { status: false, error: error.message });
    }
}


export async function GetHandler(socket: Socket<any, any>, config: IGetConfig) {
    try {
        const db = (await MongoDatabasePromise).db(config.database.name);
        const filters = config.query.structured.where.map(buildFilter);

        let result;
        const query = filters.length ? { $and: filters } : {};

        if (config.type === "kn.cloudstore.document") {
            result = await db.collection(config.collection.name).findOne(query);
        } else if (config.type === "kn.cloudstore.document:array") {
            result = await db.collection(config.collection.name).find(query).toArray();
        }

        socket.emit("get-cb-" + config.ref.id, { status: true, data: result });
    } catch (error) {
        socket.emit("get-cb-" + config.ref.id, { status: false, error: error.message });
    }
}

export async function InsertHandler(socket: Socket<any, any>, config: IInsertConfig) {
    try {
        if (!config || !config.ref) {
            socket.emit("insert-cb-" + config.ref.id, { status: false, error: 'Config invalid, event ref not attached' });
            return;
        }

        const db = (await MongoDatabasePromise).db(config.database.name);
        const documents = config.insertions.map(({ data }) => data);

        const insertionOutPut = await db.collection(config.collection.name).insertMany(documents, {});
        socket.emit("insert-cb-" + config.ref.id, { status: true, result: insertionOutPut });
    } catch (error) {
        socket.emit("insert-cb-" + config.ref.id, { status: false, error: error.message });
    }
}