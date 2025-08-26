import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function POST(request) {
  try {
    // Verificar que la variable de entorno esté definida
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI no está definida');
      return NextResponse.json(
        { success: false, error: 'Configuración de base de datos no encontrada' },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Verificar que el cliente de MongoDB esté disponible
    if (!clientPromise) {
      console.error('Cliente de MongoDB no disponible');
      return NextResponse.json(
        { success: false, error: 'Cliente de base de datos no disponible' },
        { status: 500 }
      );
    }

    const client = await clientPromise;
    
    // Verificar que la conexión sea exitosa
    if (!client || !client.db) {
      console.error('Conexión a MongoDB falló');
      return NextResponse.json(
        { success: false, error: 'Conexión a base de datos falló' },
        { status: 500 }
      );
    }

    const db = client.db('clinikids');

    // Guardar los datos del formulario
    const result = await db.collection('planes_nutricion').insertOne({
      ...body,
      fechaCreacion: new Date(),
      estado: 'nuevo'
    });

    return NextResponse.json({
      success: true,
      message: 'Formulario enviado exitosamente',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error al guardar en MongoDB:', error);
    return NextResponse.json(
      { success: false, error: 'Error al guardar los datos' },
      { status: 500 }
    );
  }
}
