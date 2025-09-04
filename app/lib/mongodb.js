import { MongoClient } from 'mongodb';

// En desarrollo/local, permitir TLS inseguro si está habilitado explícitamente
if (process.env.ALLOW_INSECURE_TLS === 'true') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const primaryUri = process.env.MONGODB_URI;
const fallbackUri = process.env.MONGODB_URI_FALLBACK || process.env.MONGODB_SEED_URI;
const dbName = process.env.MONGODB_DB_NAME || 'clinikids';

let clientPromise;

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
      // Si falla el SRV, intentamos el siguiente URI (seedlist) si existe
      // Continuar con el siguiente URI del arreglo
    }
  }
  if (lastError) throw lastError;
  return null;
}

async function getClient() {
  if (!primaryUri && !fallbackUri) {
    console.log('⚠️ MONGODB_URI no está definida - Modo de prueba');
    return null;
  }

  const urisToTry = [primaryUri, fallbackUri].filter(Boolean);
  // Reintentos simples
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

// Crear y cachear la conexión según el entorno
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = getClient();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = getClient();
}

export default clientPromise;
