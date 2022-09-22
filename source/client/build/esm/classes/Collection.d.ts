import QueryBuilder from "@/classes/QueryBuilder";
import WatchableCollection from "@/classes/WatchableCollection";
import { Socket } from "socket.io-client";
export interface ICollectionConfig {
    socket: Socket<any, any>;
    database: {
        name: string;
        version?: string;
    };
    collection: {
        name: string;
        exists: boolean;
    };
}
export default class Collection {
    private internals;
    constructor(config: ICollectionConfig);
    watch(query: QueryBuilder, onUpdate: (data: object) => any): WatchableCollection;
    remove(query: QueryBuilder): Promise<unknown>;
    protected insert(data: object): Promise<unknown>;
}
