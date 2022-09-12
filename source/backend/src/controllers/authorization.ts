import {Socket} from "socket.io";
import {ExtendedError} from "socket.io/dist/namespace";
import {DefaultEventsMap} from "socket.io/dist/typed-events";

export const AuthorizationListener = async (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, next: (err?: ExtendedError | undefined) => void) => {
    if (!socket.handshake.headers['authorization']) return next(new Error('error, authorization header not attached'));
    if (!socket.handshake.query.id) return next(new Error('error, client id was not attached')); // TODO Unified Public API
    // TODO Authenticate Client Credentials from Database Registrations
    next();
}
