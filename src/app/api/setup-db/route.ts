import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    console.log("Env check:");
    console.log("POSTGRES_URL exists:", !!process.env.POSTGRES_URL);
    console.log("Keys available:", Object.keys(process.env).filter(k => k.startsWith('POSTGRES')));

    try {
        const result = await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        source VARCHAR(50) DEFAULT 'chatbot',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
