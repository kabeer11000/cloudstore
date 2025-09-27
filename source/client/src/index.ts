import { io } from 'socket.io-client';
import { ICloudStoreConstructor, IInternalState } from "@/types";
import { v4 } from "uuid";
import { IndexedDB } from "@/adapters";
import QueryBuilder from "@/classes/QueryBuilder";
import Collection from "@/classes/Collection";

export default class CloudStore {
    static utils = {};
    private internals: IInternalState = {
        socket: undefined,
        constructorConfig: undefined,
        connection: {
            connected: false,
            remote: {
                config: undefined
            }
        },
        contexts: {},
        cache: {
            active: "IF_NO_NETWORK",
            storage: {
                adapter: new IndexedDB("_kn.cloudstore.cache.temp.collection")
            }
        }
    };
    constructor(config: ICloudStoreConstructor) {
        this.internals.socket = io(config.server.uri, {
            extraHeaders: {
                authorization: `Bearer ${config.server.access.key}`
            },
            query: {
                /**
                 * @deprecated This property is redundant, and hints that cloudstore deployment will be centralised.
                **/
                tenant_id: config.server.access.tenant_id
            }
        });
        this.internals.constructorConfig = config;
        this.internals.cache.storage.adapter = config.cache.storage.adapter;
    }

    public connect() {
        /**
         * Synchronous Config call 
        **/
        if (!this.internals.socket) throw new Error("Socket Doesn't Exist");
        this.internals.socket.emit("config", { database: this.internals.constructorConfig.database.name });
        this.internals.socket.on("config-cb", (data: object) => {
            this.internals.connection.connected = true;
            this.internals.connection.remote.config = data;
        })
    }
    public destroy() {
        /**
         * Synchronous destroy call 
        **/
        if (this.internals.socket) {
            // 1. Remove all socket listeners to prevent memory leaks
            this.internals.socket.removeAllListeners();

            // 2. Properly close the socket connection
            this.internals.socket.close();

            // 3. Nullify the socket reference
            this.internals.socket = undefined;
        }

        // 4. Clean up the cache adapter (assuming IndexedDB might need closing)
        //    You'll need to check if IndexedDB adapter has a destroy/close method.
        //    If it's just a class instance without a cleanup method, setting to null is enough.
        //    Example if adapter has a close method:
        //    if (typeof this.internals.cache.storage.adapter.close === 'function') {
        //        this.internals.cache.storage.adapter.close();
        //    }

        // 5. Clear contexts (optional, but good for cleanup)
        this.internals.contexts = {};

        // 6. Optional: Nullify the overall internals object to aid GC 
        //    if the *instance* is kept, but it's generally cleaner to rely on the 
        //    instance itself being garbage collected.
        // this.internals = null; // <- Only if you update IInternalState to allow null

    }
    private QueryWithCallback(eventName: string, data: object, callbackEventName: string, { cleanup }: { cleanup: boolean } = { cleanup: true }) {
        return new Promise((resolve, reject) => {
            this.internals.socket?.on(callbackEventName, async (response: { error?: boolean, [x: string]: any }) => {
                if (!response?.error) resolve(response);
                else reject(response);
                if (cleanup) this.internals.socket?.removeListener(callbackEventName);
            });
            this.internals.socket?.emit(eventName, data);
        });
    }
    public get query(): QueryBuilder {
        const id = v4();
        const query = new QueryBuilder(id)
        this.internals.contexts[id] = query;
        return query;
    }

    public collection(name: string) {
        /**
         * Synchronous Config call
        **/
        const ref = v4();
        let listenerAdded = false;
        const handleResponse = (response: { name: string, exists: boolean, error?: boolean }) => {
            if (response.error || !response.exists) {
                console.warn("Collection: " + response.name + " does not exist or error occurred");
            }
            if (listenerAdded) {
                this.internals.socket?.removeListener("collection-cb-" + ref, handleResponse);
                listenerAdded = false;
            }
        };

        if (this.internals.socket) {
            this.internals.socket.on("collection-cb-" + ref, handleResponse);
            listenerAdded = true;
            this.internals.socket.emit("collection", {
                name: name, ref: { id: ref }
            });
        }

        if (!this.internals.socket || !this.internals.constructorConfig?.database) return undefined;
        return new Collection({
            database: this.internals.constructorConfig.database,
            collection: { exists: true, name: name },
            socket: this.internals.socket
        });
    }
    public get info(): IInternalState {
        return this.internals;
    }
}
export * as Adapters from "@/adapters";
export * as Types from "@/types";
