export declare class ImplementableStorageAdapter {
    set(key: string, value: any): Promise<void>;
    get(key: string, value: any): Promise<void>;
    remove(key: string, value: any): Promise<void>;
}
export declare class IndexedDB implements ImplementableStorageAdapter {
    private store;
    constructor(collectionKey: string);
    get(key: string): Promise<void>;
    remove(key: string): Promise<void>;
    set(key: string, value: any): Promise<void>;
}
export declare class ImplementableNetworkAdapter {
    constructor();
    onNetworkUpdate(updateFn: (change: "CONNECTED" | "DISCONNECTED") => any): void;
}
export declare class BrowserNetwork implements ImplementableNetworkAdapter {
    state: {
        online: boolean;
    };
    constructor();
    onNetworkUpdate(updateFn: (change: ("CONNECTED" | "DISCONNECTED")) => any): void;
}
