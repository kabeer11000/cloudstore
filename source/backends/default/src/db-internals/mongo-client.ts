import { MongoClient } from "mongodb";

console.log('MongoURI:', (process.env.MONGODB_URI))
const MongoDatabasePromise = MongoClient.connect((process.env).MONGODB_URI);
export default MongoDatabasePromise; 