export declare type IFilterOperations = "EQUAL" | "GREATER" | "LESSER" | "GREATER_EQUAL" | "LESSER_EQUAL" | "ARRAY.IN" | "ARRAY.NOT_IN";
export declare type IOrderByDirections = "ASCENDING" | "DESCENDING";
export interface IWatchConfig {
    stream: {
        id: string;
    };
    watchable: {
        type: "kn.cloudstore.collection" | "kn.cloudstore.document";
        database: {
            name: string;
            version?: string;
        };
        collection: {
            name: string;
        };
        query: {
            structured: {
                from: {
                    collection: string;
                };
                where: Array<{
                    "field": string;
                    "op": IFilterOperations;
                    "value": string | object;
                }>;
                orderBy: {
                    field: string;
                    direction: IOrderByDirections;
                };
                limit: number | null;
            };
        };
    };
}
export interface IUpdateConfig {
    updatable: {
        type: "kn.cloudstore.collection" | "kn.cloudstore.document";
        database: {
            name: string;
            version?: string;
        };
        collection: {
            name: string;
        };
        query: {
            structured: {
                from: {
                    collection: string;
                };
                where: Array<{
                    "field": string;
                    "op": IFilterOperations;
                    "value": string | object;
                }>;
                update: IInsertionItem;
            };
        };
    };
}
export interface IInsertionItem {
    data: object;
}
export interface IInsertConfig {
    type: "kn.cloudstore.document:array";
    ref: {
        id: string;
    };
    database: {
        name: string;
        version?: string;
    };
    collection: {
        name: string;
    };
    options?: {};
    insertions: Array<IInsertionItem>;
}
export interface IActiveWatchable {
    database: {
        name: string;
        version?: string;
    };
    stream: {
        id: string;
        active: boolean;
        paused: boolean;
        resumeToken: string | any;
    };
    collection: {
        name: string;
    };
    document?: {
        id: string;
    };
}
export interface IDeleteConfig {
    type: "kn.cloudstore.document:array" | "kn.cloudstore.document";
    database: {
        name: string;
        version?: string;
    };
    collection: {
        name: string;
    };
    document?: {
        id: string;
    };
    query: {
        structured: {
            from: {
                collection: string;
            };
            where: Array<{
                "field": string;
                "op": IFilterOperations;
                "value": string | object;
            }>;
        };
    };
}
