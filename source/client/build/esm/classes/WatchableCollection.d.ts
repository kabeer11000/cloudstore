import { Socket } from 'socket.io-client';
import { IFilterOperations, IOrderByDirections } from "@server-types";
export default class WatchableCollection {
    internal: {
        subscriptions: Array<{
            id: string;
            config: {
                collection: {
                    name: string;
                    exists: boolean;
                };
                database: {};
                onUpdate: (data: object) => any;
                socket: Socket<any, any>;
            };
        }>;
    };
    constructor(config: {
        limit: number | null;
        orderBy?: {
            field: string;
            direction: IOrderByDirections;
        };
        filters: Array<{
            field: string;
            op: IFilterOperations;
            value: string | object;
        }>;
        collection: {
            name: string;
            exists: boolean;
        };
        database: {
            name: string;
        };
        onUpdate: (data: object) => any;
        socket: Socket<any, any>;
    });
}
