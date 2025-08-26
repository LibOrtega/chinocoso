import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db('clinikids');
      
      // Guardar los datos del formulario
      const result = await db.collection('planes_nutricion').insertOne(req.body);
      
      await client.close();
      
      res.status(200).json({ message: 'Formulario enviado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al guardar los datos' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}