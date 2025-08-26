import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

// Solo crear la conexión si tenemos la URI
if (uri) {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
} else {
  // Si no hay URI, crear una promesa que siempre falle
  clientPromise = Promise.reject(new Error('MONGODB_URI no está definida'));
}

export default clientPromise;
