import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS summary TEXT;`;
        return NextResponse.json({ message: 'Added summary column to leads table' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
