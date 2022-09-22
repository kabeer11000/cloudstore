import * as IDB from "idb-keyval";
export class ImplementableStorageAdapter {
    async set(key: string, value: any) {
    }
    async get(key: string, value: any) {
    }
    async remove(key: string, value: any) {
    }
}
export class IndexedDB implements ImplementableStorageAdapter {
    // private idbKeyVal: Promise<any>;
    private store: any;
    constructor(collectionKey: string) {
        // @ts-ignore
        this.store = IDB.createStore("cloudstore-cache", collectionKey);
        // this.store.set("_", "_")
    }

    async get(key: string): Promise<void> {
        return await (IDB).get(key);
    }

    async remove(key: string): Promise<void> {
        return await IDB.del(key);
    }

    async set(key: string, value: any): Promise<void> {
        return await IDB.set(key, value);
    }
}
export class ImplementableNetworkAdapter {
    constructor() {
    }
    onNetworkUpdate(updateFn: (change: "CONNECTED" | "DISCONNECTED") => any) {
    }
}
export class BrowserNetwork implements ImplementableNetworkAdapter {
    state = {
        online: window.navigator.onLine
    }
    constructor() {}
    onNetworkUpdate(updateFn: (change: ("CONNECTED" | "DISCONNECTED")) => any): void {
        window.addEventListener("offline", () => {
            this.state.online = false;
            updateFn("DISCONNECTED")
        });
        window.addEventListener("online", () => {
            this.state.online = true;
            updateFn("CONNECTED");
        });
        updateFn(window.navigator.onLine ? "CONNECTED" : "DISCONNECTED");
    }
}