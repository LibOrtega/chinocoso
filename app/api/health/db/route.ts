import { NextResponse } from 'next/server';
import getMongoClientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const presence = {
      MONGODB_URI: Boolean(process.env.MONGODB_URI),
      MONGODB_DB_NAME: Boolean(process.env.MONGODB_DB_NAME),
      EMAIL_USER: Boolean(process.env.EMAIL_USER),
      EMAIL_PASS: Boolean(process.env.EMAIL_PASS),
      EMAIL_ATTACH_PDF: Boolean(process.env.EMAIL_ATTACH_PDF ?? 'true'),
      PLAN_PDF_PATH: Boolean(process.env.PLAN_PDF_PATH),
      PLAN_PDF_URL: Boolean(process.env.PLAN_PDF_URL),
      ALLOW_INSECURE_TLS: Boolean(process.env.ALLOW_INSECURE_TLS),
      NODE_ENV: process.env.NODE_ENV,
    } as const;

    const clientPromise = getMongoClientPromise();
    if (!clientPromise) {
      return NextResponse.json({ ok: false, presence, reason: 'missing_uri' }, { status: 500 });
    }
    const client = await clientPromise;
    if (!client) {
      return NextResponse.json({ ok: false, presence, reason: 'client_null' }, { status: 500 });
    }
    if (typeof client.db !== 'function') {
      return NextResponse.json({ ok: false, presence, reason: 'db_method_missing' }, { status: 500 });
    }
    const db = client.db(process.env.MONGODB_DB_NAME || 'clinikids');
    if (!db) {
      return NextResponse.json({ ok: false, presence, reason: 'db_undefined' }, { status: 500 });
    }
    const ping = await db.command({ ping: 1 });
    return NextResponse.json({ ok: true, presence, ping });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}


