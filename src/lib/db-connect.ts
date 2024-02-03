import { Db, MongoClient } from "mongodb";

let globalWithMongo = global as typeof globalThis & {
  mongoClientPromise: Promise<MongoClient>;
};

let indexesCreated = false;
async function createIndexes(client: MongoClient) {
  if (indexesCreated) return client;
  const db = client.db();
  await Promise.all([
    db.collection("users"),
    db.collection("services"),
    db.collection("bookings"),
  ]);
  indexesCreated = true;
  return client;
}

export async function getMongoClient() {
  /**
   * Global is used here to maintain a cached connection across hot reloads
   * in development. This prevents connections growing exponentiatlly
   * during API Route usage.
   * https://github.com/vercel/next.js/pull/17666
   */
  if (!globalWithMongo.mongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    // client.connect() returns an instance of MongoClient when resolved
    globalWithMongo.mongoClientPromise = client
      .connect()
      .then((client) => createIndexes(client));
  }
  return globalWithMongo.mongoClientPromise;
}

export async function db(): Promise<Db> {
  const mongoClient = await getMongoClient();
  return mongoClient.db();
}
