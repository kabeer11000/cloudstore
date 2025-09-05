export default {
    authenticate: {
        authenticate: () => "authenticate",
        authenticationCB: (id: string) => `authenticate-cb-${id}`,
    },
    client: {
        CONFIG: "config",
        INSERT_QUERY: "insert",
        WATCH: "watch"
    },
    config: {
        config: () => `config`,
        configCB: (id: string) => `config-cb-${id}`
    },
    insert: {
        insert: () => "insert",
        insertCB: (id: string) => `insert-cb-${id}`,
    },
    remove: {
        remove: () => "remove",
        removeCB: (id: string) => `remove-cb-${id}`,
    },
    watch: {
        watch: () => `watch`,
        watchCB: (id: string) => `watchable-change-${id}`,
        watchError: (id: string) => `watchable-error-${id}`
    },
    collection: {
        collection: () => `collection`,
        collectionCB: (id: string) => `collection-cb-${id}`,
    },
    server: {
        CONFIG_CALLBACK: "config-cb",
        INSERT_QUERY_CALLBACK: "insert-cb",
        WATCH_CALLBACK: (id: string) => "watchable-change-" + id
    }
}