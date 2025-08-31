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
  // TEMPORAL: No fallar, solo loggear el error
  console.log('⚠️ MONGODB_URI no está definida - Modo de prueba');
  clientPromise = Promise.resolve(null);
}

export default clientPromise;
