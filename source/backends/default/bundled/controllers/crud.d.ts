import { Socket } from "socket.io";
import { IDeleteConfig, IInsertConfig, IUpdateConfig, IGetConfig } from "@/types";
export declare function UpdateHandler(socket: Socket<any, any>, config: IUpdateConfig): Promise<void>;
export declare function DeleteHandler(socket: Socket<any, any>, config: IDeleteConfig): Promise<void>;
export declare function GetHandler(socket: Socket<any, any>, config: IGetConfig): Promise<void>;
export declare function InsertHandler(socket: Socket<any, any>, config: IInsertConfig): Promise<void>;
