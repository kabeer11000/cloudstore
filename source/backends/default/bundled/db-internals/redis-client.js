"use strict";
exports.__esModule = true;
var redis_1 = require("redis");
var RedisClientPromise = (0, redis_1.createClient)()
    .on("error", function (err) { return console.log("Redis Client Error", err); })
    .connect();
exports["default"] = RedisClientPromise;
//# sourceMappingURL=redis-client.js.map