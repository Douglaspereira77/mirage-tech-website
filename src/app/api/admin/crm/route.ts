import { NextResponse } from "next/server";
import { getGHLOpportunities } from "@/lib/ghl";

export async function GET() {
    const result = await getGHLOpportunities(50);
    if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 500 });
    }
    return NextResponse.json({ opportunities: result.opportunities, total: result.total });
}
