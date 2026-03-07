import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "AI Automation & Chatbot Services | Mirage Tech AI",
    description: "Explore our Done-For-You AI Automation services including WhatsApp chatbots, AI Automation & Custom Business Tools, and Strategic AI Consultancy in Kuwait.",
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "Done-For-You AI Automation",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Mirage Tech AI"
                                },
                                "description": "Custom AI chatbots, WhatsApp automation, and rapid application development (AI Automation & Custom Business Tools).",
                                "serviceType": "AI Development & Automation"
                            },
                            {
                                "@type": "Service",
                                "name": "Strategic AI Consultancy",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Mirage Tech AI"
                                },
                                "description": "Enterprise AI readiness assessment, digital transformation strategy, and AI implementation roadmaps.",
                                "serviceType": "Business Consulting"
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What is Done-For-You AI Automation?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "It means we handle everything. From conversational design and prompt engineering to database integrations and deployment. You don't need to learn how to prompt AI—we deliver the finished, working product."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can your automated chatbots connect to my Shopify store?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. Our WhatsApp and Web chatbots seamlessly integrate with Shopify, WooCommerce, and custom backends, allowing customers to query inventory, track orders, and even checkout directly inside the chat window."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What happens if the AI chatbot doesn't know the answer?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Every Mirage Tech AI chatbot comes equipped with \"Human Handoff\" protocols. If the AI encounters a query it cannot answer with high confidence, it immediately escalates the conversation to a human agent, providing them with the full chat history."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <ServicesClient />
        </>
    );
}
