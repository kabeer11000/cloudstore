import {Socket} from "socket.io-client";
import {ImplementableStorageAdapter} from "./adapters";

export interface ICloudStoreConstructor {
    server: {
        uri: string,
        access: {
            key: string,
            tenant_id: string,
        },
        config: {
            upgradeToBackgroundSync: boolean,
        }
    },
    cache: {
        active: "IF_NO_NETWORK",
        storage: {
            adapter: ImplementableStorageAdapter
        }
    },
    database: {
        name: string
    },
}

export interface IInternalState {
    socket: undefined | Socket<any, any>,
    constructorConfig: ICloudStoreConstructor | undefined,
    connection: {
        connected: boolean,
        remote: {
            config: object | undefined
        }
    },
    cache: {
        active: "IF_NO_NETWORK",
        storage: {
            adapter: ImplementableStorageAdapter
        }
    },
    contexts: {
        [x: string]: any
    }
}
