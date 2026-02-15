import { NextResponse } from "next/server";
import { fetchIncompleteRestaurants } from "@/lib/bok-api";

export async function GET() {
  try {
    const leads = await fetchIncompleteRestaurants();
    return NextResponse.json({ leads });
  } catch (error: any) {
    console.error("BOK Leads API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
