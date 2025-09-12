import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import * as jwt from "jsonwebtoken";
import RedisClientPromise from "@/db/redis-client";

export const Authorization = async (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> & { auth: { verified: boolean, data: any } }, next: (err?: ExtendedError | undefined) => void) => {
    if (!socket.handshake.headers['authorization']) return next(new Error('error, authorization header not attached.'));
    if (!socket.handshake.query.tenant_id) return next(new Error('error, tenant id was not attached.')); // TODO Unified Public API
    if (!socket.handshake.headers['authorization'].split(' ')[1]?.length) return next(new Error('error, Bearer token was not attached.'));
    const tenantPublicKey = (await (await RedisClientPromise).get(socket.handshake.query.tenant_id.toString())).toString().replace(/\\n/g, '\n') // Get [id, pubilcKey] for a tenant
    if (!tenantPublicKey) return next(new Error('error, Tenant is not registered! Kindly make sure [tenant_id, publicKey] is added to the Redis instance.'));
    try {
        const decoded = jwt.verify(socket.handshake.headers['authorization'].split(' ')[1], tenantPublicKey, {
            algorithms: ['ES256'],
        });
        // @ts-ignore
        socket.auth = socket.auth || {};
        socket.auth.verified = true;
        socket.auth.data = decoded;
        return next();
    } catch (e) {   
        return next(new Error('error, Failed to verify Bearer token against tenant. '));
    }
}
export default Authorization;