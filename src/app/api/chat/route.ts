import { OpenAI } from 'openai';
import { sql } from '@vercel/postgres';
import { appendLeadToSheet } from '@/lib/google-sheets';

export const runtime = 'nodejs';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

const SYSTEM_PROMPT = `You are Mira, the AI assistant for Mirage Tech AI — an AI automation agency based in Kuwait.

YOUR GOAL: Collect the visitor's name, business type, pain point, email, and phone — then save it. Keep it short.

SERVICES:
1. Conversational AI — WhatsApp & Instagram chatbots. 24/7, bilingual.
2. Vibe Coding — Rapid web app development. MVPs in under 7 days.
3. AI Consultancy — Strategic AI roadmaps and automation deployment.

PRICING (KWD):
- Starter: From 100 KWD/month
- Business: From 250 KWD/month
- Enterprise: Custom
- Vibe Coding: 500–2,000 KWD per project

FLOW:
1. Ask their name.
2. Ask what business/industry they're in.
3. Ask what challenge they want to solve.
4. Ask for email.
5. Ask for phone number.
6. Call save_lead with ALL collected data.

AFTER SAVING:
- Say: "Thank you! A member of our team will be in touch shortly."
- Then ask: "Would you like to speak with a sales representative now?" If yes, reply: "You can reach our sales team directly on WhatsApp: https://wa.me/96597524391"

RULES:
- YOU ARE STRICTLY A LEAD CAPTURE ASSISTANT. You do NOT provide consulting, strategies, examples, or tips under any circumstances.
- If the user asks for strategies/tips (e.g., "how can you help?", "can you give me tips?"): say you are an AI assistant and will have a human expert reach out to discuss strategies. Provide the WhatsApp link.
- ONE question at a time. 2 sentences max per response.
- If user asks to speak to someone at ANY point: "Of course! You can reach our sales team on WhatsApp: https://wa.me/96597524391" — NEVER put a period or any punctuation directly after the URL.
- If user says "Bye" or "Thanks": "Thanks for chatting! 👋" and stop.
- Respond in Arabic if user writes in Arabic.
- Never be pushy. Never give unsolicited business advice.`;

export async function POST(req: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return new Response("Missing OPENAI_API_KEY", { status: 500 });
    }
    try {
        const { messages } = await req.json();

        // Brief delay to feel more natural
        await new Promise(resolve => setTimeout(resolve, 1000));

        const tools = [
            {
                type: "function" as const,
                function: {
                    name: "save_lead",
                    description: "Save the user's contact information and business details to the database and spreadsheet.",
                    parameters: {
                        type: "object",
                        properties: {
                            email: { type: "string", description: "User's email address" },
                            name: { type: "string", description: "User's full name" },
                            phone: { type: "string", description: "User's phone number if provided" },
                            business_type: { type: "string", description: "The type of business or industry the user is in (e.g., Tailoring, Restaurant, Real Estate, Education)" },
                            pain_point: { type: "string", description: "The user's main challenge or what they want to automate (e.g., Lead generation, Customer support, Appointment booking)" },
                            summary: { type: "string", description: "A brief overall summary of the conversation and the user's needs" },
                        },
                        required: ["email", "business_type", "pain_point", "summary"],
                    },
                },
            },
        ];

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages,
            ],
            tools: tools,
            tool_choice: "auto",
        });

        const responseMessage = response.choices[0].message;

        // Handle tool calls (save_lead)
        if (responseMessage.tool_calls) {
            const toolCall = responseMessage.tool_calls[0] as any;
            if (toolCall.function.name === 'save_lead') {
                const args = JSON.parse(toolCall.function.arguments);
                console.log("Saving lead:", args);

                let toolResult = "Failed to save.";

                // 1. Save to Postgres
                try {
                    await sql`
                        INSERT INTO leads(email, name, phone, summary)
                        VALUES(${args.email}, ${args.name || 'Anonymous'}, ${args.phone || null}, ${args.summary || ''})
                        ON CONFLICT(email) DO UPDATE SET phone = ${args.phone || null}, summary = ${args.summary || ''};
                    `;
                    toolResult = "Successfully saved lead.";
                } catch (e) {
                    console.error("DB Error:", e);
                    toolResult = "Error connecting to database.";
                }

                // 2. Save to Google Sheet (non-blocking — don't fail if sheets is down)
                try {
                    await appendLeadToSheet({
                        name: args.name || 'Anonymous',
                        email: args.email,
                        phone: args.phone || '',
                        businessType: args.business_type || '',
                        painPoint: args.pain_point || '',
                    });
                } catch (e) {
                    console.error("Google Sheets Error (non-blocking):", e);
                }

                const secondResponse = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [
                        ...messages,
                        responseMessage,
                        {
                            role: "tool",
                            tool_call_id: toolCall.id,
                            content: toolResult,
                        },
                    ],
                });

                return new Response(secondResponse.choices[0].message.content);
            }
        }

        return new Response(responseMessage.content);

    } catch (error: any) {
        console.error("API Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
