import {io} from 'socket.io-client';
import {ICloudStoreConstructor, IInternalState} from "@/types";
import {v4} from "uuid";
import {IndexedDB} from "@/adapters";
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
                id: config.server.access.key
            }
        });
        this.internals.constructorConfig = config;
        this.internals.cache.storage.adapter = config.cache.storage.adapter;
    }

    public connect() {
        if (!this.internals.socket) throw new Error("Socket Doesn't Exist");
        this.internals.socket.emit("config", {});
        this.internals.socket.on("config-cb", (data: object) => {
            this.internals.connection.connected = true;
            this.internals.connection.remote.config = data;
        })
    }
    private QueryWithCallback(eventName: string, data: object, callbackEventName: string, {cleanup}: { cleanup: boolean } = {cleanup: true}) {
        return new Promise((resolve, reject) => {
            this.internals.socket?.on(callbackEventName, async (response: { error?: boolean, [x: string]: any }) => {
                if (!response?.error) resolve(response);
                else reject(response);
                if (cleanup) this.internals.socket?.removeListener(callbackEventName);
            });
            this.internals.socket?.emit(eventName, data);
        });
    }
    // @ts-ignore
    public get query() {
        const id = v4();
        const query = new QueryBuilder(id)
        this.internals.contexts[id] = query;
        return query;
    }

    public collection(name: string) {
        this.internals.socket?.on("collection-cb", (response: { name: string, exists: boolean }) => {
            if (!response.exists) throw new Error("Collection: " + response.name + " does not exist");
        });
        this.internals.socket?.emit("collection", {name: name});
        if (!this.internals.socket || !this.internals.constructorConfig?.database) return;
        return new Collection({
            database: this.internals.constructorConfig.database,
            collection: {exists: true, name: name},
            socket: this.internals.socket
        });
    }
    // @ts-ignore
    public get info() {
        return this.internals;
    }
}
export * as Adapters from "@/adapters";
export * as Types from "@/types";