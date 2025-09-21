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
            this.internals.socket.on("delete-cb-" + ref, ({status, result, error}: {status: boolean, result?: any, error?: string}) => {
                if (status) {
                    resolve(result);
                } else {
                    reject(new Error(error || 'Delete failed'));
                }
                this.internals.socket.removeListener("delete-cb-" + ref);
            });
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

    public get(query: QueryBuilder) {
        const ref = v4();
        return new Promise((resolve, reject) => {
            this.internals.socket.on("get-cb-" + ref, ({status, data, error}: {status: boolean, data?: any, error?: string}) => {
                if (status) {
                    resolve(data);
                } else {
                    reject(new Error(error || 'Get failed'));
                }
                this.internals.socket.removeListener("get-cb-" + ref);
            });
            this.internals.socket.emit("get", {
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
    
    public update(query: QueryBuilder, data: object) {
        const ref = v4();
        return new Promise((resolve, reject) => {
            this.internals.socket?.on("update-cb-" + ref, ({status, result, error}: {status: boolean, result?: any, error?: string}) => {
                if (status) {
                    resolve(result);
                } else {
                    reject(new Error(error || 'Update failed'));
                }
                this.internals.socket?.removeListener("update-cb-" + ref);
            });
            this.internals.socket?.emit("update", {
                updatable: {
                    type: "kn.cloudstore.collection",
                    ref: { id: ref },
                    database: {
                        name: this.internals.database.name,
                    },
                    collection: {
                        name: this.internals.collection.name,
                    },
                    query: {
                        structured: {
                            from: {
                                collection: this.internals.collection.name
                            },
                            where: query._query.filters,
                            update: { data }
                        }
                    }
                }
            });
        });
    }
    public insert(data: object | object[]) {
        const ref = v4();
        return new Promise((resolve, reject) => {
            this.internals.socket?.on("insert-cb-" + ref, ({status, result, error}: {status: boolean, result?: any, error?: string}) => {
                if (status) {
                    resolve(result);
                } else {
                    reject(new Error(error || 'Insert failed'));
                }
                this.internals.socket?.removeListener("insert-cb-" + ref);
            });

            const insertions = Array.isArray(data) ? data.map(d => ({data: d})) : [{data}];

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
                insertions
            });
        });
    }
}