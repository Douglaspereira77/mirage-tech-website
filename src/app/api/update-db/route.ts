import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS phone VARCHAR(50);`;
        return NextResponse.json({ result: "Added phone column" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
