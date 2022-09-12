import {io, Socket} from 'socket.io-client';
import {ICreateStoreArgs} from "./types";
import {IWatchConfig} from "./server-types/types";


class CloudStore {
    socket: Socket<any, any> | undefined = undefined;
    activeWatches: Array<string> = [];
    status = "kn.cloudstore.disconnected";

    constructor(active_socket: Socket<any, any>) {
        if (!active_socket) return;
        this.socket = active_socket;
        this.status = "kn.cloudstore.connected";
    }

    Where(from: { name: string, database: string }, field: string, op: string, value: object | string) {
        return {
            watch: (onUpdate: (update: object) => any, a: string) => this.Watch(onUpdate, {
                stream: {
                    id: Math.random().toString()
                },
                watchable: {
                    type: "kn.cloudstore.collection",
                    database: {
                        name: "default",
                    },
                    collection: {
                        name: from.name,
                    },
                    query: {
                        structured: {
                            from: {
                                collection: from.name
                            },
                            where: [{ // Array of FieldFilters
                                "field": field, // Field Name, e.g. user.emails
                                "op": op,
                                "value": value
                            }],
                            orderBy: {
                                field: field,
                                direction: "ASCENDING"
                            },
                            limit: null
                        }
                    }
                }
            })
        }
    }

    collection(name: string) {
        return {
            // @ts-ignore
            where: (...args) => this.Where({name: name, database: "default"}, ...args)
        }
    }

    Watch(onUpdate: (update: object) => any, config: IWatchConfig) {
        this.socket?.emit("watch", config);
        this.activeWatches.push(config.stream.id);
        this.socket?.on("watchable-change-" + config.stream.id, (data: object) => {
            onUpdate(data);
        })
    }
}

export default {
    utils: {},
    store: {
        create: (args: ICreateStoreArgs) => new Promise(async (resolve, reject) => {
            if (!args.serverURI) throw Error("Server URI is required");
            const socket = io(args.serverURI, {
                extraHeaders: {
                    authorization: "Bearer " + args.token
                }
            });
            socket.on("connection", () => {
                resolve(new CloudStore(socket));
            })
        })
    }
}