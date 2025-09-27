import * as IDB from "idb-keyval";
export class ImplementableStorageAdapter {
    async set(key: string, value: any): Promise<void> {
    }
    async get(key: string): Promise<any> {
    }
    async remove(key: string): Promise<void> {
    }
}
export class IndexedDB implements ImplementableStorageAdapter {
    private store: any;

    constructor(collectionKey: string) {
        this.store = IDB.createStore("cloudstore-cache", collectionKey);
    }

    async get(key: string): Promise<any> {
        try {
            return await IDB.get(key, this.store);
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('IndexedDB get failed:', error);
            }
            return undefined;
        }
    }

    async remove(key: string): Promise<void> {
        try {
            await IDB.del(key, this.store);
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('IndexedDB remove failed:', error);
            }
        }
    }

    async set(key: string, value: any): Promise<void> {
        try {
            await IDB.set(key, value, this.store);
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('IndexedDB set failed:', error);
            }
        }
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
        online: typeof window !== 'undefined' ? window.navigator.onLine : true
    }
    private listeners: Array<(change: "CONNECTED" | "DISCONNECTED") => any> = [];
    private connectionCheckInterval?: NodeJS.Timeout;

    constructor() {}

    onNetworkUpdate(updateFn: (change: ("CONNECTED" | "DISCONNECTED")) => any): void {
        this.listeners.push(updateFn);

        if (typeof window === 'undefined') {
            // Node.js environment - assume connected
            updateFn("CONNECTED");
            return;
        }

        const offlineHandler = () => {
            this.state.online = false;
            this.listeners.forEach(fn => fn("DISCONNECTED"));
        };

        const onlineHandler = () => {
            this.state.online = true;
            this.listeners.forEach(fn => fn("CONNECTED"));
        };

        window.addEventListener("offline", offlineHandler);
        window.addEventListener("online", onlineHandler);

        // Additional connection checks for more reliability
        if (typeof window.fetch !== 'undefined') {
            const checkConnection = async () => {
                try {
                    await fetch('/', { method: 'HEAD', cache: 'no-cache' });
                    if (!this.state.online) {
                        this.state.online = true;
                        this.listeners.forEach(fn => fn("CONNECTED"));
                    }
                } catch {
                    if (this.state.online) {
                        this.state.online = false;
                        this.listeners.forEach(fn => fn("DISCONNECTED"));
                    }
                }
            };

            // Check connection every 30 seconds
            this.connectionCheckInterval = setInterval(checkConnection, 30000);
        }

        // Initial state
        updateFn(this.state.online ? "CONNECTED" : "DISCONNECTED");
    }

    removeListener(updateFn: (change: "CONNECTED" | "DISCONNECTED") => any): void {
        const index = this.listeners.indexOf(updateFn);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }

    isOnline(): boolean {
        return this.state.online;
    }

    destroy(): void {
        if (this.connectionCheckInterval) {
            clearInterval(this.connectionCheckInterval);
            this.connectionCheckInterval = undefined;
        }
        this.listeners = [];
    }
}