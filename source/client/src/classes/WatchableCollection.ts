import {Socket} from 'socket.io-client';
import {v4} from "uuid";
import {IFilterOperations, IOrderByDirections} from "@server-types";

export default class WatchableCollection {
    internal: {
        subscriptions: Array<{ id: string, config: { collection: { name: string, exists: boolean }, database: {}, onUpdate: (data: object) => any, socket: Socket<any, any> } }>
    } = {
        subscriptions: []
    }

    constructor(config: { limit: number | null, orderBy?: { field: string, direction: IOrderByDirections }, filters: Array<{ field: string, op: IFilterOperations, value: string | object }>, collection: { name: string, exists: boolean }, database: { name: string }, onUpdate: (data: object) => any, socket: Socket<any, any> }) {
        const subscription = {
            id: v4(),
            config: config
        };
        this.internal.subscriptions.push(subscription);
        config.socket.on("watchable-change-" + subscription.id, (data: object) => {
            config.onUpdate(data);
        })
        config.socket.emit("watch", {
            stream: {
                id: subscription.id
            },
            watchable: {
                type: "kn.cloudstore.collection",
                database: {
                    name: config.database.name ?? "default",
                },
                collection: {
                    name: config.collection.name,
                },
                query: {
                    structured: {
                        from: {
                            collection: config.collection.name
                        },
                        where: config.filters,
                        orderBy: {
                            field: config.orderBy?.field || "_id",
                            direction: config.orderBy?.direction ?? "ASCENDING"
                        },
                        limit: config.limit
                    }
                }
            }
        });
    }

    public close() {
        // Clean up all subscriptions
        this.internal.subscriptions.forEach(sub => {
            sub.config.socket.removeListener("watchable-change-" + sub.id);
            sub.config.socket.emit(`watch:${sub.id}:close`, { stream: { id: sub.id } });
        });
        this.internal.subscriptions = [];
    }

    public destroy() {
        this.close();
    }
}
