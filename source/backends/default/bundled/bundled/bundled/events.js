"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    authenticate: {
        authenticate: () => "authenticate",
        authenticationCB: (id) => `authenticate-cb-${id}`,
    },
    client: {
        CONFIG: "config",
        INSERT_QUERY: "insert",
        WATCH: "watch"
    },
    config: {
        config: () => `config`,
        configCB: (id) => `config-cb-${id}`
    },
    insert: {
        insert: () => "insert",
        insertCB: (id) => `insert-cb-${id}`,
    },
    remove: {
        remove: () => "remove",
        removeCB: (id) => `remove-cb-${id}`,
    },
    watch: {
        watch: () => `watch`,
        watchCB: (id) => `watchable-change-${id}`,
        watchError: (id) => `watchable-error-${id}`
    },
    collection: {
        collection: () => `collection`,
        collectionCB: (id) => `collection-cb-${id}`,
    },
    server: {
        CONFIG_CALLBACK: "config-cb",
        INSERT_QUERY_CALLBACK: "insert-cb",
        WATCH_CALLBACK: (id) => "watchable-change-" + id
    }
};
//# sourceMappingURL=events.js.map