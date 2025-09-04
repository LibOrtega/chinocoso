import { MongoClient } from 'mongodb';

// En desarrollo/local, permitir TLS inseguro si está habilitado explícitamente
if (process.env.ALLOW_INSECURE_TLS === 'true') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const primaryUri = process.env.MONGODB_URI;
const fallbackUri = process.env.MONGODB_URI_FALLBACK || process.env.MONGODB_SEED_URI;
const dbName = process.env.MONGODB_DB_NAME || 'clinikids';

let cachedClientPromise = null;

async function connectWithUris(uris) {
  const options = {
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
    // En desarrollo, permitir certificados TLS interceptados (antivirus/firewall)
    tls: true,
    tlsAllowInvalidCertificates: process.env.ALLOW_INSECURE_TLS === 'true',
    tlsAllowInvalidHostnames: process.env.ALLOW_INSECURE_TLS === 'true',
  };

  let lastError = null;
  for (const uri of uris) {
    if (!uri) continue;
    try {
      const localClient = new MongoClient(uri, { ...options, dbName });
      await localClient.connect();
      return localClient;
    } catch (err) {
      lastError = err;
      // intentar siguiente URI
    }
  }
  if (lastError) throw lastError;
  return null;
}

async function createClient() {
  if (!primaryUri && !fallbackUri) {
    return null;
  }

  const urisToTry = [primaryUri, fallbackUri].filter(Boolean);
  const maxAttempts = 2;
  let attempt = 0;
  let connectedClient = null;
  while (attempt < maxAttempts && !connectedClient) {
    attempt += 1;
    try {
      connectedClient = await connectWithUris(urisToTry);
    } catch (err) {
      if (attempt >= maxAttempts) throw err;
    }
  }
  return connectedClient;
}

// Exportar función para obtener (y cachear) el cliente bajo demanda
export default function getMongoClientPromise() {
  if (cachedClientPromise) return cachedClientPromise;

  // Reutilizar en entornos serverless entre invocaciones
  const globalAny = global;
  if (process.env.NODE_ENV === 'development') {
    if (!globalAny._mongoClientPromise) {
      globalAny._mongoClientPromise = createClient();
    }
    cachedClientPromise = globalAny._mongoClientPromise;
  } else {
    if (!globalAny._mongoClientPromise) {
      globalAny._mongoClientPromise = createClient();
    }
    cachedClientPromise = globalAny._mongoClientPromise;
  }

  return cachedClientPromise;
}
