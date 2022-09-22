"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const MongoDatabasePromise = mongodb_1.MongoClient.connect("mongodb://localhost:27017").then(dbs => dbs.db("cloudstore-demo"));
exports.default = MongoDatabasePromise;
