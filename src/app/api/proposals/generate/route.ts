import { OpenAI } from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy-key-for-build",
});

export async function POST(req: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
    }

    try {
        const { name, category, area, missingFields, completionPercentage, bokUrl } = await req.json();

        const missingList = (missingFields as string[]).join(", ");
        const visibilityScore = completionPercentage as number;
        const listingUrl = bokUrl || "";

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are a sales copywriter for Mirage Tech AI, a digital agency in Kuwait.

Your task: Generate a personalized sales proposal for a restaurant that has an incomplete online listing.

IMPORTANT: Respond with ONLY valid JSON. No markdown, no code fences, no extra text.
All string values must be on a single line with no literal newlines — use \\n for line breaks.

{
  "subject": "Email subject line",
  "htmlContent": "HTML email body using <p>, <strong>, <ul>, <li> tags. No <html>/<body> wrapper.",
  "whatsappText": "Plain text WhatsApp message (3-4 sentences, with emojis). Use \\n for line breaks."
}

CONTEXT ABOUT THE RESTAURANT:
- Name: ${name}
- Category: ${category || "Restaurant"}
- Area: ${area || "Kuwait"}
- Current Visibility Score: ${visibilityScore}%
- Missing Fields: ${missingList || "None identified"}

MIRAGE TECH SERVICE TIERS (reference the most relevant ones based on missing fields):
1. **BOK Profile Optimization** (KD 49/mo) — Complete & optimize their Best of Kuwait listing, add photos, fix missing info
2. **Website + SEO Package** (KD 149/mo) — Professional website, Google My Business, local SEO
3. **AI Chatbot** (KD 99/mo) — WhatsApp/Instagram ordering bot, automated customer service

GUIDELINES FOR HTML EMAIL:
- Professional but warm tone
- Reference their specific missing fields and visibility score
- Explain how low visibility = lost customers
- Recommend 1-2 specific service tiers based on their gaps
- Include a clear call-to-action
- Use inline CSS for styling (colors: #7C3AED purple primary, #1e1e2e dark)

GUIDELINES FOR WHATSAPP TEXT:
- Keep it to 3-4 sentences max
- Casual, friendly tone with 1-2 relevant emojis
- Mention their restaurant name and key issue
- End with a question to prompt reply`,
                },
                {
                    role: "user",
                    content: `Generate the proposal for ${name}. Their listing is only ${visibilityScore}% complete and they're missing: ${missingList || "several key fields"}.`,
                },
            ],
            temperature: 0.7,
        });

        let content = response.choices[0].message.content || "{}";

        // Strip markdown code fences if present
        content = content.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

        // Parse JSON from response
        let parsed;
        try {
            parsed = JSON.parse(content);
        } catch {
            // Try extracting JSON object with regex as fallback
            try {
                const jsonMatch = content.match(/\{[\s\S]*\}/);
                parsed = JSON.parse(jsonMatch ? jsonMatch[0] : "{}");
            } catch {
                return NextResponse.json(
                    { error: "Failed to parse AI response", raw: content },
                    { status: 500 }
                );
            }
        }

        let finalHtml = parsed.htmlContent || parsed.html || "";
        let finalWhatsapp = parsed.whatsappText || parsed.whatsapp || "";

        // Always append the BOK listing link so the customer can view/share their listing
        if (listingUrl) {
            finalHtml += `<p style="margin-top:20px; padding-top:16px; border-top:1px solid #e4e4e7;"><strong>Your current listing:</strong><br/><a href="${listingUrl}" style="color:#7C3AED; text-decoration:underline;">${listingUrl}</a></p>`;
            finalWhatsapp += `\n\nView your listing here: ${listingUrl}`;
        }

        return NextResponse.json({
            subject: parsed.subject || `Boost ${name}'s Online Visibility`,
            htmlContent: finalHtml,
            whatsappText: finalWhatsapp,
        });
    } catch (error: unknown) {
        console.error("Proposal generation error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
