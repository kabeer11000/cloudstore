import * as jwt from "jsonwebtoken";
export declare function authenticateWithToken(token: string): Promise<string | jwt.JwtPayload>;
