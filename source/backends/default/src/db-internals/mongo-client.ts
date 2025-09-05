import { MongoClient } from "mongodb";

const MongoDatabasePromise = MongoClient.connect(import.meta.env.MONGO_URI).then(dbs => dbs.db("cloudstore-demo"));
export default MongoDatabasePromise;