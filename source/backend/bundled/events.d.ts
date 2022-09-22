declare const _default: {
    client: {
        CONFIG: string;
        INSERT_QUERY: string;
        WATCH: string;
    };
    server: {
        CONFIG_CALLBACK: string;
        INSERT_QUERY_CALLBACK: string;
        WATCH_CALLBACK: (id: string) => string;
    };
};
export default _default;
