import { v4 } from "uuid";
var WatchableCollection = /** @class */ (function () {
    function WatchableCollection(config) {
        var _a, _b;
        this.internal = {
            subscriptions: []
        };
        var subscription = {
            id: v4(),
            config: config
        };
        this.internal.subscriptions.push(subscription);
        config.socket.on("watchable-change-" + subscription.id, function (data) {
            config.onUpdate(data);
        });
        config.socket.emit("watch", {
            stream: {
                id: subscription.id
            },
            watchable: {
                type: "kn.cloudstore.collection",
                database: {
                    name: (_a = config.database.name) !== null && _a !== void 0 ? _a : "default",
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
                            // @ts-ignore
                            field: config.orderBy.field,
                            // @ts-ignore
                            direction: (_b = config.orderBy.direction) !== null && _b !== void 0 ? _b : "ASCENDING"
                        },
                        limit: config.limit
                    }
                }
            }
        });
    }
    return WatchableCollection;
}());
export default WatchableCollection;
