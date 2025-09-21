"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
console.log('MongoURI:', (process.env.MONGODB_URI));
var MongoDatabasePromise = mongodb_1.MongoClient.connect((process.env).MONGODB_URI);
exports["default"] = MongoDatabasePromise;
//# sourceMappingURL=mongo-client.js.map