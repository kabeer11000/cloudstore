import {MongoClient} from "mongodb";

const MongoDatabasePromise = MongoClient.connect("mongodb://localhost:27017").then(dbs => dbs.db("cloudstore-demo"));
export default MongoDatabasePromise;