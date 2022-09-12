export default {
    client: {
        CONFIG: "config",
        INSERT_QUERY: "insert",
        WATCH: "watch"
    },
    server: {
        CONFIG_CALLBACK: "config-cb",
        INSERT_QUERY_CALLBACK: "insert-cb",
        WATCH_CALLBACK: (id: string) => "watchable-change-" + id
    }
}