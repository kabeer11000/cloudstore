"use strict";
exports.__esModule = true;
exports["default"] = {
    authenticate: {
        authenticate: function () { return "authenticate"; },
        authenticationCB: function (id) { return "authenticate-cb-".concat(id); }
    },
    client: {
        CONFIG: "config",
        INSERT_QUERY: "insert",
        WATCH: "watch"
    },
    config: {
        config: function () { return "config"; },
        configCB: function (id) { return "config-cb-".concat(id); }
    },
    insert: {
        insert: function () { return "insert"; },
        insertCB: function (id) { return "insert-cb-".concat(id); }
    },
    remove: {
        remove: function () { return "remove"; },
        removeCB: function (id) { return "remove-cb-".concat(id); }
    },
    watch: {
        watch: function () { return "watch"; },
        watchCB: function (id) { return "watchable-change-".concat(id); },
        watchError: function (id) { return "watchable-error-".concat(id); }
    },
    collection: {
        collection: function () { return "collection"; },
        collectionCB: function (id) { return "collection-cb-".concat(id); }
    },
    server: {
        CONFIG_CALLBACK: "config-cb",
        INSERT_QUERY_CALLBACK: "insert-cb",
        WATCH_CALLBACK: function (id) { return "watchable-change-" + id; }
    }
};
//# sourceMappingURL=events.js.map