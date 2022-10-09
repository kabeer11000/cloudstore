import { Socket } from "socket.io";
import { IDeleteConfig, IInsertConfig, IUpdateConfig } from "../types";
export declare function UpdateHandler(socket: Socket<any, any>, config: IUpdateConfig): Promise<void>;
export declare function DeleteHandler(socket: Socket<any, any>, config: IDeleteConfig): Promise<boolean | undefined>;
export declare function InsertHandler(socket: Socket<any, any>, config: IInsertConfig): Promise<void>;
