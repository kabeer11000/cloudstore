import {MongoClient} from "mongodb";

const MongoDatabasePromise = MongoClient.connect("mongodb://localhost:27017").then(dbs => dbs.db("cloudstore-sample-database"));
export default MongoDatabasePromise;