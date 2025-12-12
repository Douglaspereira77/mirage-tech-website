import { OpenAI } from 'openai';
import { sql } from '@vercel/postgres';

export const runtime = 'nodejs';

// Initialize OpenAI lazily or allow empty key for build
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

export async function POST(req: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return new Response("Missing OPENAI_API_KEY", { status: 500 });
    }
    try {
        const { messages } = await req.json();

        // 0. Fake "Thinking" Delay (1.5s) to feel more human
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Define tools
        const tools = [
            {
                type: "function" as const,
                function: {
                    name: "save_lead",
                    description: "Save the user's email, name, and optional phone number to the database.",
                    parameters: {
                        type: "object",
                        properties: {
                            email: { type: "string" },
                            name: { type: "string" },
                            phone: { type: "string", description: "User's phone number if provided" },
                        },
                        required: ["email"],
                    },
                },
            },
        ];

        // 1. First Call to OpenAI
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are Mira, the AI Consultant for Mirage Tech AI.
          
          YOUR GOAL: Qualify leads by understanding their business needs before just saving their email.
          
          CONSULTING PROCESS:
1. Ask for their NAME immediately("Hi, I'm Mira. May I ask your name?").
          2. Ask about their business / industry.
          3. Ask about their main pain point.
          4. Briefly mention we can solve that(1 sentence max).
          5. Ask for their EMAIL to send a proposal.
          6. AFTER collecting email, ALWAYS ask for their PHONE NUMBER.

    RULES:
    - Keep responses SHORT and conversational.
          - Ask only ONE question at a time.
          - CHECK HISTORY: If you already have their email / phone / name, DO NOT ask again.
          - AFTER saving info, do NOT end the chat.Ask: "While I have you, would you like to know how our bots integrate with your system?" or similar.
          - Be warm and professional.NEVER say "I specialize in AI..." if the user just said "Yes".
          - If the user says "Yes" to "Anything else?", ask "What's on your mind?"
    - IF USER SAYS "No", "Bye", or "Thanks": Say "Thanks for chatting! Have a great day." and STOP questions.

        Services: WhatsApp / Instagram Chatbots, Custom Workflow Automation, Lead Gen Bots.

            Services: WhatsApp / Instagram Chatbots, Custom Workflow Automation, Lead Gen Bots.
          `,
                },
                ...messages,
            ],
            tools: tools,
            tool_choice: "auto",
        });

        const responseMessage = response.choices[0].message;

        // 2. Check for Tool Calls
        if (responseMessage.tool_calls) {
            const toolCall = responseMessage.tool_calls[0] as any;
            if (toolCall.function.name === 'save_lead') {
                const args = JSON.parse(toolCall.function.arguments);
                console.log("Saving lead (Manual):", args);

                // Execute DB Operation
                let toolResult = "Failed to save.";
                try {
                    await sql`
              INSERT INTO leads(email, name, phone)
VALUES(${args.email}, ${args.name || 'Anonymous'}, ${args.phone || null})
              ON CONFLICT(email) DO UPDATE SET phone = ${args.phone || null};
`;
                    toolResult = "Successfully saved lead.";
                } catch (e) {
                    console.error("DB Error:", e);
                    toolResult = "Error connecting to database.";
                }

                // 3. Second Call to OpenAI (with result)
                const secondResponse = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        ...messages,
                        responseMessage, // The 'tool_calls' message
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

        // Normal response
        return new Response(responseMessage.content);

    } catch (error: any) {
        console.error("API Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
