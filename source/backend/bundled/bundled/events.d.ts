declare const _default: {
    authenticate: {
        authenticate: () => string;
        authenticationCB: (id: string) => string;
    };
    client: {
        CONFIG: string;
        INSERT_QUERY: string;
        WATCH: string;
    };
    config: {
        config: () => string;
        configCB: (id: string) => string;
    };
    insert: {
        insert: () => string;
        insertCB: (id: string) => string;
    };
    remove: {
        remove: () => string;
        removeCB: (id: string) => string;
    };
    watch: {
        watch: () => string;
        watchCB: (id: string) => string;
        watchError: (id: string) => string;
    };
    collection: {
        collection: () => string;
        collectionCB: (id: string) => string;
    };
    server: {
        CONFIG_CALLBACK: string;
        INSERT_QUERY_CALLBACK: string;
        WATCH_CALLBACK: (id: string) => string;
    };
};
export default _default;
