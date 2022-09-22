import QueryBuilder from "@/classes/QueryBuilder";
import {v4} from "uuid";
import WatchableCollection from "@/classes/WatchableCollection";
import {Socket} from "socket.io-client";

export interface ICollectionConfig {
    socket: Socket<any, any>,
    database: {
        name: string,
        version?: string
    },
    collection: {
        name: string, exists: boolean
    }
}
export default class Collection {
    private internals: ICollectionConfig;
    constructor(config: ICollectionConfig) {
        this.internals = config;
    }
    public watch(query: QueryBuilder, onUpdate: (data: object) => any) {
        if (!this.internals.collection.exists) throw new Error("Collection doesn't exist");
        return new WatchableCollection({
            filters: query._query.filters,
            socket: this.internals.socket,
            limit: query._query.limit,
            orderBy: query._query.orderBy,
            database: {name: this.internals.database.name},
            collection: this.internals.collection,
            onUpdate
        });
    }
    public remove(query: QueryBuilder) {
        const ref = v4();
        return new Promise((resolve, reject) => {
            this.internals.socket.on("delete-cb-" + ref, ({status, ...data}: {status: boolean}) => {
                status ? resolve(data) : reject(data);
                this.internals.socket.removeListener("delete-cb-" + ref);
            })
            this.internals.socket.emit("delete", {
                type: "kn.cloudstore.document:array",
                database: {
                    name: this.internals.database.name,
                },
                collection: {
                    name: this.internals.collection.name,
                },
                ref: {
                    id: ref
                },
                query: {
                    structured: {
                        from: {
                            collection: this.internals.collection.name
                        },
                        where: query._query.filters
                    }
                }
            });
        });
    }
    protected insert(data: object) {
        const ref = v4();
        return new Promise((resolve, reject) => {
            this.internals.socket?.on("insert-cb-" + ref, ({status, ...data}: {status: boolean}) => {
                status ? resolve(data) : reject(data);
                this.internals.socket?.removeListener("insert-cb-" + ref);
            });
            this.internals.socket?.emit("insert", {
                type: "kn.cloudstore.document:array",
                database: {
                    name: this.internals.database.name,
                },
                collection: {
                    name: this.internals.collection.name,
                },
                ref: {
                    id: ref
                },
                options: {},
                insertions: [{data}]
            });
        });
    }
}