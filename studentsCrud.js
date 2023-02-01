import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config();

/**Connect MongoDB */

export async function connectToCluster(uri) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

/**Create Student */

export async function createStudentDocument(collection, user) {
    await collection.insertOne(user);
}

export async function executeStudentCrudOperations(user) {
    const uri = process.env.DB_URI;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('test');
        const collection = db.collection('user');

        console.log('CREATE User');
        await createStudentDocument(collection, user);
    } finally {
        await mongoClient.close();
    }
}
