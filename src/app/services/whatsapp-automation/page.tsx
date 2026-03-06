import { Metadata } from "next";
import WhatsAppClient from "./WhatsAppClient";

export const metadata: Metadata = {
    title: "WhatsApp AI Chatbots in Kuwait | Mirage Tech AI",
    description: "Automate your customer service, bookings, and sales with a custom WhatsApp AI chatbot. Save hours of manual work and respond instantly 24/7.",
    openGraph: {
        title: "WhatsApp AI Chatbot Automation | Mirage Tech AI",
        description: "Automate customer service, bookings, and sales on WhatsApp.",
        url: "https://miragetech.ai/services/whatsapp-automation",
    },
};

export default function WhatsAppAutomationPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is a WhatsApp AI chatbot?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A WhatsApp AI chatbot is an automated software integrated into your WhatsApp Business account. It uses advanced NLP (Natural Language Processing) to understand customer inquiries and provide immediate, human-like responses 24/7."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can a business in Kuwait automate appointments with WhatsApp?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Mirage Tech AI builds custom WhatsApp agents that integrate directly with your calendar and CRM. Customers simply text the bot to check availability, book, reschedule, or cancel appointments, completely hands-free."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can a WhatsApp bot handle order tracking?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Our WhatsApp chatbots connect to your inventory or delivery system via APIs, allowing customers to check order status, delivery times, and inventory levels instantly through a simple WhatsApp message."
                                }
                            }
                        ]
                    })
                }}
            />
            <WhatsAppClient />
        </>
    );
}
