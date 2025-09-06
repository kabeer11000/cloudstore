"use strict";
exports.__esModule = true;
var redis_1 = require("redis");
var REDIS_URL = process.env.REDIS_URI || 'redis://localhost:6379';
var RedisClientPromise = (0, redis_1.createClient)({
    url: REDIS_URL
})
    .on("error", function (err) { return console.log("Redis Client Error", err); })
    .connect();
exports["default"] = RedisClientPromise;
//# sourceMappingURL=redis-client.js.map