import * as jwt from "jsonwebtoken";
// export const CustomTokenParams = ["uid"]
export function authenticateWithToken(token: string) {
    return jwt.decode(token);
}