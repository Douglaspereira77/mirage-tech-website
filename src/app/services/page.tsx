import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "AI Growth & Automation Systems | Mirage Tech AI",
    description: "Explore our Done-For-You AI Automation services including AI Growth Engines, AI Voice Agents, and Strategic AI Consultancy in Kuwait.",
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
                                "description": "Custom AI Growth Engines, AI Voice Agents, and rapid business tool development.",
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
                                        "name": "Can your AI Growth Engines connect to my existing systems?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. Our AI systems seamlessly integrate with Shopify, WooCommerce, CRMs (like GoHighLevel), and custom backends, allowing you to automate customer follow-up, inventory queries, and even checkout directly 24/7."
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
