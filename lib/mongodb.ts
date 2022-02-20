import { MongoClient } from "mongodb";

const uri = process.env.DB_URL || "";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options as any);
clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise as Promise<MongoClient>;
