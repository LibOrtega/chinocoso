import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('clinikids');

    // Guardar los datos del formulario
    const result = await db.collection('planes_nutricion').insertOne({
      ...body,
      fechaCreacion: new Date(),
      estado: 'nuevo'
    });

    return NextResponse.json({
      success: true,
      message: 'Formulario enviado exitosamente - Vercel Fix',
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
