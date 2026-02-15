import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await sql`
            CREATE TABLE IF NOT EXISTS proposal_logs (
                id SERIAL PRIMARY KEY,
                restaurant_id VARCHAR(255) NOT NULL,
                restaurant_name VARCHAR(255),
                email_sent BOOLEAN DEFAULT FALSE,
                whatsapp_sent BOOLEAN DEFAULT FALSE,
                email_sent_at TIMESTAMP WITH TIME ZONE,
                whatsapp_sent_at TIMESTAMP WITH TIME ZONE,
                proposal_content TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
