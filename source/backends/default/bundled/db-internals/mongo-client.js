"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var MongoDatabasePromise = mongodb_1.MongoClient.connect(import.meta.env.MONGO_URI).then(function (dbs) { return dbs.db("cloudstore-demo"); });
exports.default = MongoDatabasePromise;
//# sourceMappingURL=mongo-client.js.map