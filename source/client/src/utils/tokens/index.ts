import * as jwt from "jsonwebtoken";
// export const CustomTokenParams = ["uid"]
export async function authenticateWithToken(token: string) {
    const decoded = await jwt.decode(token);
    return decoded
}