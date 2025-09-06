/// <reference types="node" />
/// <reference types="node" />
declare const RedisClientPromise: Promise<import("@redis/client").RedisClientType<{
    json: {
        ARRAPPEND: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        arrAppend: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        ARRINDEX: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/ARRINDEX").JsonArrIndexOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        arrIndex: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/ARRINDEX").JsonArrIndexOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        ARRINSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, index: number, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        arrInsert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, index: number, json: import("redis").RedisJSON, ...jsons: import("redis").RedisJSON[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        ARRLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRLEN").JsonArrLenOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        arrLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRLEN").JsonArrLenOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        ARRPOP: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRPOP").RedisArrPopOptions) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>) => string | number | boolean | Date | import("@redis/client/dist/lib/RESP/types").NullReply | (import("@redis/client/dist/lib/RESP/types").NullReply | import("redis").RedisJSON)[] | {
                [key: string]: import("redis").RedisJSON;
                [key: number]: import("redis").RedisJSON;
            };
        };
        arrPop: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/ARRPOP").RedisArrPopOptions) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>) => string | number | boolean | Date | import("@redis/client/dist/lib/RESP/types").NullReply | (import("@redis/client/dist/lib/RESP/types").NullReply | import("redis").RedisJSON)[] | {
                [key: string]: import("redis").RedisJSON;
                [key: number]: import("redis").RedisJSON;
            };
        };
        ARRTRIM: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, start: number, stop: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        arrTrim: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, start: number, stop: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        CLEAR: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/CLEAR").JsonClearOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        clear: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/CLEAR").JsonClearOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        DEBUG_MEMORY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEBUG_MEMORY").JsonDebugMemoryOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        debugMemory: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEBUG_MEMORY").JsonDebugMemoryOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEL").JsonDelOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/DEL").JsonDelOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        FORGET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/FORGET").JsonForgetOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        forget: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/FORGET").JsonForgetOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        GET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/GET").JsonGetOptions) => void;
            readonly transformReply: typeof import("@redis/json/dist/lib/commands").transformRedisJsonNullReply;
        };
        get: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/GET").JsonGetOptions) => void;
            readonly transformReply: typeof import("@redis/json/dist/lib/commands").transformRedisJsonNullReply;
        };
        MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, value: import("redis").RedisJSON) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, value: import("redis").RedisJSON) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        MGET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, keys: import("redis").RedisArgument[], path: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, reply: (import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>)[]) => (import("@redis/client/dist/lib/RESP/types").NullReply | import("redis").RedisJSON)[];
        };
        mGet: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, keys: import("redis").RedisArgument[], path: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, reply: (import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>)[]) => (import("@redis/client/dist/lib/RESP/types").NullReply | import("redis").RedisJSON)[];
        };
        MSET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, items: import("@redis/json/dist/lib/commands/MSET").JsonMSetItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        mSet: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, items: import("@redis/json/dist/lib/commands/MSET").JsonMSetItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        NUMINCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>) => number | number[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").DoubleReply<number> | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
            };
        };
        numIncrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>) => number | number[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").DoubleReply<number> | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
            };
        };
        NUMMULTBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>) => number | number[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").DoubleReply<number> | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
            };
        };
        numMultBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>) => number | number[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").DoubleReply<number> | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
            };
        };
        OBJKEYS: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJKEYS").JsonObjKeysOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>>;
        };
        objKeys: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJKEYS").JsonObjKeysOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>>;
        };
        OBJLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJLEN").JsonObjLenOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        objLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/OBJLEN").JsonObjLenOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        SET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/SET").JsonSetOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        set: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument, json: import("redis").RedisJSON, options?: import("@redis/json/dist/lib/commands/SET").JsonSetOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        STRAPPEND: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, append: string, options?: import("@redis/json/dist/lib/commands/STRAPPEND").JsonStrAppendOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        strAppend: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, append: string, options?: import("@redis/json/dist/lib/commands/STRAPPEND").JsonStrAppendOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        STRLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/STRLEN").JsonStrLenOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        strLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/STRLEN").JsonStrLenOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        TOGGLE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        toggle: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, path: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        TYPE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/TYPE").JsonTypeOptions) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>)[]) => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        type: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/json/dist/lib/commands/TYPE").JsonTypeOptions) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>)[]) => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
    };
    ft: {
        _LIST: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        _list: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        ALTER: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        alter: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        AGGREGATE_WITHCURSOR: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR").FtAggregateWithCursorOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        aggregateWithCursor: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR").FtAggregateWithCursorOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        AGGREGATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE").FtAggregateOptions) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/search/dist/lib/commands/AGGREGATE").AggregateReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        aggregate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/AGGREGATE").FtAggregateOptions) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/search/dist/lib/commands/AGGREGATE").AggregateReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        ALIASADD: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        aliasAdd: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        ALIASDEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        aliasDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        ALIASUPDATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        aliasUpdate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, alias: import("redis").RedisArgument, index: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        CONFIG_GET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, option: string) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types").TuplesReply<[import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[]) => Record<string, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        configGet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, option: string) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types").TuplesReply<[import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[]) => Record<string, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        CONFIG_SET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, property: Buffer | (string & {}) | "a" | "b", value: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        configSet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, property: Buffer | (string & {}) | "a" | "b", value: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        CREATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema, options?: import("@redis/search/dist/lib/commands/CREATE").CreateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        create: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, schema: import("redis").RediSearchSchema, options?: import("@redis/search/dist/lib/commands/CREATE").CreateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        CURSOR_DEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursorId: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        cursorDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursorId: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        CURSOR_READ: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursor: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, options?: import("@redis/search/dist/lib/commands/CURSOR_READ").FtCursorReadOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        cursorRead: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, cursor: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, options?: import("@redis/search/dist/lib/commands/CURSOR_READ").FtCursorReadOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], cursor: import("@redis/client/dist/lib/RESP/types").NumberReply<number>]) => import("@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR").AggregateWithCursorReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        DICTADD: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        dictAdd: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        DICTDEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        dictDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument, term: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        DICTDUMP: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        dictDump: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, dictionary: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        DROPINDEX: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/DROPINDEX").FtDropIndexOptions) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
            };
        };
        dropIndex: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/DROPINDEX").FtDropIndexOptions) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
            };
        };
        EXPLAIN: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAIN").FtExplainOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<string>;
        };
        explain: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAIN").FtExplainOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<string>;
        };
        EXPLAINCLI: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAINCLI").FtExplainCLIOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        explainCli: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/EXPLAINCLI").FtExplainCLIOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        INFO: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: any[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/search/dist/lib/commands/INFO").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        info: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: any[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/search/dist/lib/commands/INFO").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        PROFILESEARCH: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileOptions & import("redis").FtSearchOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/search/dist/lib/commands/SEARCH").SearchRawReply, import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types").ReplyUnion) => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        profileSearch: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileOptions & import("redis").FtSearchOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/search/dist/lib/commands/SEARCH").SearchRawReply, import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types").ReplyUnion) => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        PROFILEAGGREGATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: string, query: string, options?: import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileOptions & import("@redis/search/dist/lib/commands/AGGREGATE").FtAggregateOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [[total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types").ReplyUnion) => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        profileAggregate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: string, query: string, options?: import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileOptions & import("@redis/search/dist/lib/commands/AGGREGATE").FtAggregateOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: [[total: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").ReplyUnion>]) => import("@redis/search/dist/lib/commands/PROFILE_SEARCH").ProfileReplyResp2;
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types").ReplyUnion) => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SEARCH_NOCONTENT: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH").SearchRawReply) => import("@redis/search/dist/lib/commands/SEARCH_NOCONTENT").SearchNoContentReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        searchNoContent: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH").SearchRawReply) => import("@redis/search/dist/lib/commands/SEARCH_NOCONTENT").SearchNoContentReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SEARCH: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH").SearchRawReply) => import("redis").SearchReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        search: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("redis").FtSearchOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/search/dist/lib/commands/SEARCH").SearchRawReply) => import("redis").SearchReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SPELLCHECK: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SPELLCHECK").FtSpellCheckOptions) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [_: string, term: string, suggestions: [score: string, suggestion: string][]][]) => {
                    term: string;
                    suggestions: {
                        score: number;
                        suggestion: string;
                    }[];
                }[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        spellCheck: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, query: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SPELLCHECK").FtSpellCheckOptions) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [_: string, term: string, suggestions: [score: string, suggestion: string][]][]) => {
                    term: string;
                    suggestions: {
                        score: number;
                        suggestion: string;
                    }[];
                }[];
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SUGADD: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument, score: number, options?: import("@redis/search/dist/lib/commands/SUGADD").FtSugAddOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        sugAdd: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument, score: number, options?: import("@redis/search/dist/lib/commands/SUGADD").FtSugAddOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        SUGDEL: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>;
        };
        sugDel: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, string: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>;
        };
        SUGGET_WITHPAYLOADS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[]) => {
                suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                payload: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
            }[];
        };
        sugGetWithPayloads: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: (this: void, reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[]) => {
                suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                payload: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
            }[];
        };
        SUGGET_WITHSCORES_WITHPAYLOADS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                }[];
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types").NullReply | (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                }[];
            };
        };
        sugGetWithScoresWithPayloads: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                }[];
                readonly 3: (reply: import("@redis/client/dist/lib/RESP/types").NullReply | (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    payload: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                }[];
            };
        };
        SUGGET_WITHSCORES: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
            };
        };
        sugGetWithScores: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
                readonly 3: (reply: (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").DoubleReply<number>)[]) => {
                    suggestion: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                    score: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
            };
        };
        SUGGET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        sugGet: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, prefix: import("redis").RedisArgument, options?: import("@redis/search/dist/lib/commands/SUGGET").FtSugGetOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        SUGLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        sugLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        SYNDUMP: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>)[]) => Record<string, import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>>;
            };
        };
        synDump: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>)[]) => Record<string, import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>>;
            };
        };
        SYNUPDATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, groupId: import("redis").RedisArgument, terms: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/search/dist/lib/commands/SYNUPDATE").FtSynUpdateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        synUpdate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, groupId: import("redis").RedisArgument, terms: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/search/dist/lib/commands/SYNUPDATE").FtSynUpdateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        TAGVALS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, fieldName: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        tagVals: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, index: import("redis").RedisArgument, fieldName: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
    };
    ts: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, timestamp: import("@redis/time-series/dist/lib/commands").Timestamp, value: number, options?: import("@redis/time-series/dist/lib/commands/ADD").TsAddOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, timestamp: import("@redis/time-series/dist/lib/commands").Timestamp, value: number, options?: import("@redis/time-series/dist/lib/commands/ADD").TsAddOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly ALTER: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/ALTER").TsAlterOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly alter: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/ALTER").TsAlterOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly CREATE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/CREATE").TsCreateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly create: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/CREATE").TsCreateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly CREATERULE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument, aggregationType: import("redis").TimeSeriesAggregationType, bucketDuration: number, alignTimestamp?: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly createRule: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument, aggregationType: import("redis").TimeSeriesAggregationType, bucketDuration: number, alignTimestamp?: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly DECRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY").TsIncrByOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly decrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY").TsIncrByOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly DELETERULE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly deleteRule: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, sourceKey: import("redis").RedisArgument, destinationKey: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly GET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/GET").TsGetOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]> | import("@redis/client/dist/lib/RESP/types").RespType<42, [], never, []>>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                };
                readonly 3: (this: void, reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/time-series/dist/lib/commands/GET").TsGetReply>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                };
            };
        };
        readonly get: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/time-series/dist/lib/commands/GET").TsGetOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]> | import("@redis/client/dist/lib/RESP/types").RespType<42, [], never, []>>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                };
                readonly 3: (this: void, reply: import("@redis/client/dist/lib/RESP/types").UnwrapReply<import("@redis/time-series/dist/lib/commands/GET").TsGetReply>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                };
            };
        };
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY").TsIncrByOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, value: number, options?: import("@redis/time-series/dist/lib/commands/INCRBY").TsIncrByOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly INFO_DEBUG: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [...import("@redis/time-series/dist/lib/commands/INFO").InfoRawReplyTypes[], "keySelfName", import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, "Chunks", ["startTimestamp", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "endTimestamp", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "samples", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "size", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "bytesPerSample", import("@redis/client/dist/lib/RESP/types").SimpleStringReply<string>][]], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/time-series/dist/lib/commands/INFO_DEBUG").InfoDebugReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly infoDebug: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [...import("@redis/time-series/dist/lib/commands/INFO").InfoRawReplyTypes[], "keySelfName", import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, "Chunks", ["startTimestamp", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "endTimestamp", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "samples", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "size", import("@redis/client/dist/lib/RESP/types").NumberReply<number>, "bytesPerSample", import("@redis/client/dist/lib/RESP/types").SimpleStringReply<string>][]], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/time-series/dist/lib/commands/INFO_DEBUG").InfoDebugReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/INFO").InfoRawReply, _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/time-series/dist/lib/commands/INFO").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/INFO").InfoRawReply, _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/time-series/dist/lib/commands/INFO").InfoReply;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly MADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, toAdd: import("@redis/time-series/dist/lib/commands/MADD").TsMAddSample[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").SimpleErrorReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly mAdd: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, toAdd: import("@redis/time-series/dist/lib/commands/MADD").TsMAddSample[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").SimpleErrorReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly MGET_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET").TsMGetOptions) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGetSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET").TsMGetOptions) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MGET_WITHLABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").TsMGetWithLabelsOptions) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGetWithLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").TsMGetWithLabelsOptions) => void;
            readonly transformReply: {
                2(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply2<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>, _: any, typeMapping?: import("redis").TypeMapping): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: import("@redis/time-series/dist/lib/commands/MGET_WITHLABELS").MGetLabelsRawReply3<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>): import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MGET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET").TsMGetOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET").MGetRawReply2, _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    };
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET").MGetRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/MGET").TsMGetOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET").MGetRawReply2, _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    };
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MGET").MGetRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sample: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MRANGE_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_SELECTED_LABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeSelectedLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_WITHLABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeWithLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_WITHLABELS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeWithLabels: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[]>;
            };
        };
        readonly mRange: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[]>;
            };
        };
        readonly MREVRANGE_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_SELECTED_LABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeSelectedLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, selectedLabels: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS").TsMRangeSelectedLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_WITHLABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeWithLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, groupBy: import("@redis/time-series/dist/lib/commands/MRANGE_GROUPBY").TsMRangeGroupBy, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY").TsMRangeWithLabelsGroupByRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    sources: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_WITHLABELS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeWithLabels: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: Record<string, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS").TsMRangeWithLabelsRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    labels: import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                    samples: {
                        timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                        value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[]>;
            };
        };
        readonly mRevRange: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: import("redis").CommandParser, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply2, _?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands/MRANGE").TsMRangeRawReply3) => import("@redis/client/dist/lib/RESP/types").MapReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[]>;
            };
        };
        readonly QUERYINDEX: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        readonly queryIndex: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, filter: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                readonly 2: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
                readonly 3: () => import("@redis/client/dist/lib/RESP/types").SetReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
            };
        };
        readonly RANGE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types").RespType<42, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
            };
        };
        readonly range: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types").RespType<42, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
            };
        };
        readonly REVRANGE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types").RespType<42, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
            };
        };
        readonly revRange: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, fromTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, toTimestamp: import("@redis/time-series/dist/lib/commands").Timestamp, options?: import("@redis/time-series/dist/lib/commands/RANGE").TsRangeOptions) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: import("@redis/client/dist/lib/RESP/types").RespType<42, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[], never, import("@redis/client/dist/lib/RESP/types").RespType<42, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], never, [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]>[]>) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: import("@redis/time-series/dist/lib/commands").SamplesRawReply) => {
                    timestamp: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                    value: import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                }[];
            };
        };
    };
    bf: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly CARD: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly card: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly EXISTS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly exists: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/bloom/INFO").BfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/bloom/INFO").BfInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/bloom/INFO").BfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/bloom/INFO").BfInfoReplyMap;
            };
        };
        readonly INSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/bloom/INSERT").BfInsertOptions) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly insert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/bloom/INSERT").BfInsertOptions) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly LOADCHUNK: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly loadChunk: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly MADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly mAdd: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly MEXISTS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly mExists: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, errorRate: number, capacity: number, options?: import("@redis/bloom/dist/lib/commands/bloom/RESERVE").BfReserveOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, errorRate: number, capacity: number, options?: import("@redis/bloom/dist/lib/commands/bloom/RESERVE").BfReserveOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly SCANDUMP: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
            };
        };
        readonly scanDump: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
            };
        };
    };
    cms: {
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY").BfIncrByItem | import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY").BfIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY").BfIncrByItem | import("@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY").BfIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"count">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO").CmsInfoReply;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO").CmsInfoReply;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"count">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO").CmsInfoReply;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/count-min-sketch/INFO").CmsInfoReply;
            };
        };
        readonly INITBYDIM: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, width: number, depth: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly initByDim: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, width: number, depth: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly INITBYPROB: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, error: number, probability: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly initByProb: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, error: number, probability: number) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/bloom/dist/lib/commands/count-min-sketch/MERGE").BfMergeSketches) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/bloom/dist/lib/commands/count-min-sketch/MERGE").BfMergeSketches) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly QUERY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly query: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
    };
    cf: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly ADDNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly addNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly COUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly count: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
        };
        readonly DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly EXISTS: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly exists: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, item: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>) => boolean;
                3: () => import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>;
            };
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of buckets">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of items deleted">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Bucket size">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Max iterations">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/cuckoo/INFO").CfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/cuckoo/INFO").CfInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Size">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of buckets">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of filters">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of items inserted">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Number of items deleted">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Bucket size">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Expansion rate">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Max iterations">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/cuckoo/INFO").CfInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/cuckoo/INFO").CfInfoReplyMap;
            };
        };
        readonly INSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT").CfInsertOptions) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly insert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT").CfInsertOptions) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly INSERTNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT").CfInsertOptions) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly insertNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/cuckoo/INSERT").CfInsertOptions) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly LOADCHUNK: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly loadChunk: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number, chunk: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, capacity: number, options?: import("@redis/bloom/dist/lib/commands/cuckoo/RESERVE").CfReserveOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, capacity: number, options?: import("@redis/bloom/dist/lib/commands/cuckoo/RESERVE").CfReserveOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly SCANDUMP: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
            };
        };
        readonly scanDump: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>]) => {
                iterator: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
                chunk: import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
            };
        };
    };
    tDigest: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly BYRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly byRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly BYREVRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly byRevRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly CDF: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly cdf: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly CREATE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/CREATE").TDigestCreateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly create: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/CREATE").TDigestCreateOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Compression">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Merged nodes">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Unmerged nodes">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Merged weight">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Unmerged weight">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Observations">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Total compressions">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Memory usage">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/t-digest/INFO").TdInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/t-digest/INFO").TdInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Compression">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Capacity">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Merged nodes">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Unmerged nodes">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Merged weight">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Unmerged weight">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Observations">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Total compressions">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"Memory usage">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>], _: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/t-digest/INFO").TdInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/t-digest/INFO").TdInfoReplyMap;
            };
        };
        readonly MAX: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
            };
        };
        readonly max: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
            };
        };
        readonly MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/MERGE").TDigestMergeOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, destination: import("redis").RedisArgument, source: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument, options?: import("@redis/bloom/dist/lib/commands/t-digest/MERGE").TDigestMergeOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly MIN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
            };
        };
        readonly min: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
            };
        };
        readonly QUANTILE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, quantiles: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly quantile: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, quantiles: number[]) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>[], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").DoubleReply<number>>;
            };
        };
        readonly RANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly rank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly RESET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly reset: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly REVRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly revRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, values: number[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly TRIMMED_MEAN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, lowCutPercentile: number, highCutPercentile: number) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
            };
        };
        readonly trimmedMean: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, lowCutPercentile: number, highCutPercentile: number) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>, preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
                3: () => import("@redis/client/dist/lib/RESP/types").DoubleReply<number>;
            };
        };
    };
    topK: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        readonly COUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly count: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<number>>;
        };
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/top-k/INCRBY").TopKIncrByItem | import("@redis/bloom/dist/lib/commands/top-k/INCRBY").TopKIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").SimpleStringReply<string>>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/bloom/dist/lib/commands/top-k/INCRBY").TopKIncrByItem | import("@redis/bloom/dist/lib/commands/top-k/INCRBY").TopKIncrByItem[]) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NullReply | import("@redis/client/dist/lib/RESP/types").SimpleStringReply<string>>;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"k">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"decay">, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/top-k/INFO").TopKInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/top-k/INFO").TopKInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: [import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"k">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"width">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"depth">, import("@redis/client/dist/lib/RESP/types").NumberReply<number>, import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"decay">, import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>], preserve?: any, typeMapping?: import("redis").TypeMapping) => import("@redis/bloom/dist/lib/commands/top-k/INFO").TopKInfoReplyMap;
                readonly 3: () => import("@redis/bloom/dist/lib/commands/top-k/INFO").TopKInfoReplyMap;
            };
        };
        readonly LIST_WITHCOUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, rawReply: (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").NumberReply<number>)[]) => {
                item: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                count: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
            }[];
        };
        readonly listWithCount: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: (this: void, rawReply: (import("@redis/client/dist/lib/RESP/types").BlobStringReply<string> | import("@redis/client/dist/lib/RESP/types").NumberReply<number>)[]) => {
                item: import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>;
                count: import("@redis/client/dist/lib/RESP/types").NumberReply<number>;
            }[];
        };
        readonly LIST: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        readonly list: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>;
        };
        readonly QUERY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly query: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, items: import("@redis/client/dist/lib/commands/generic-transformers").RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").NumberReply<0 | 1>>) => boolean[];
                3: () => import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BooleanReply<boolean>>;
            };
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, topK: number, options?: import("@redis/bloom/dist/lib/commands/top-k/RESERVE").TopKReserveOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: import("redis").CommandParser, key: import("redis").RedisArgument, topK: number, options?: import("@redis/bloom/dist/lib/commands/top-k/RESERVE").TopKReserveOptions) => void;
            readonly transformReply: () => import("@redis/client/dist/lib/RESP/types").SimpleStringReply<"OK">;
        };
    };
} & import("redis").RedisModules, import("redis").RedisFunctions, import("redis").RedisScripts, import("redis").RespVersions, import("redis").TypeMapping>>;
export default RedisClientPromise;
