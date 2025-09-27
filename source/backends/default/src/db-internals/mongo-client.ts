import { MongoClient } from "mongodb";

if (process.env.NODE_ENV === 'development') {
    console.log('MongoURI:', process.env.MONGODB_URI);
}

const MongoDatabasePromise = MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017')
    .catch(error => {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1);
    });

export default MongoDatabasePromise; 