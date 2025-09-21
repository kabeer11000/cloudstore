"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Authorization = void 0;
var jwt = require("jsonwebtoken");
var redis_client_1 = require("@/db/redis-client");
var Authorization = function (socket, next) { return __awaiter(void 0, void 0, void 0, function () {
    var tenantPublicKeyResult, tenantPublicKey, decoded;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!socket.handshake.headers['authorization'])
                    return [2, next(new Error('error, authorization header not attached.'))];
                if (!socket.handshake.query.tenant_id)
                    return [2, next(new Error('error, tenant id was not attached.'))];
                if (!((_a = socket.handshake.headers['authorization'].split(' ')[1]) === null || _a === void 0 ? void 0 : _a.length))
                    return [2, next(new Error('error, Bearer token was not attached.'))];
                return [4, redis_client_1["default"]];
            case 1: return [4, (_b.sent()).get(socket.handshake.query.tenant_id.toString())];
            case 2:
                tenantPublicKeyResult = _b.sent();
                if (!tenantPublicKeyResult)
                    return [2, next(new Error('error, Tenant is not registered! Kindly make sure [tenant_id, publicKey] is added to the Redis instance.'))];
                tenantPublicKey = tenantPublicKeyResult.toString().replace(/\\n/g, '\n');
                try {
                    decoded = jwt.verify(socket.handshake.headers['authorization'].split(' ')[1], tenantPublicKey, {
                        algorithms: ['ES256']
                    });
                    socket.auth = socket.auth || {};
                    socket.auth.verified = true;
                    socket.auth.data = decoded;
                    return [2, next()];
                }
                catch (e) {
                    return [2, next(new Error('error, Failed to verify Bearer token against tenant. '))];
                }
                return [2];
        }
    });
}); };
exports.Authorization = Authorization;
exports["default"] = exports.Authorization;
//# sourceMappingURL=authorization.js.map