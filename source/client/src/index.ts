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
        this.internals.socket?.on("collection-cb-" + ref, (response: { name: string, exists: boolean }) => {
            if (!response.exists) throw new Error("Collection: " + response.name + " does not exist?");
        });
        this.internals.socket?.emit("collection", {
            name: name, ref: {
                id: ref
            }
        });
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
