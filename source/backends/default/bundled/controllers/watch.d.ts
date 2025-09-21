import { IWatchConfig } from "@/types";
import { Socket } from "socket.io";
export declare const FilterOperatorToMongoDBMap: {
    EQUAL: string;
    GREATER: string;
    LESSER: string;
    GREATER_EQUAL: string;
    LESSER_EQUAL: string;
    "ARRAY.IN": string;
    "ARRAY.NOT_IN": string;
};
export default function WatchController(socket: Socket<any, any>, config: IWatchConfig): Promise<void>;
