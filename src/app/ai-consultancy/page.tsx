import { Metadata } from "next";
import AIConsultancyClient from "./AIConsultancyClient";

export const metadata: Metadata = {
    title: "Enterprise AI Consultancy in Kuwait | Mirage Tech AI",
    description:
        "Expert AI consultancy for businesses in Kuwait and the Middle East. We help you automate processes, craft AI‑driven product strategies, and deploy custom models tailored to your goals.",
    openGraph: {
        title: "Enterprise AI Consultancy in Kuwait | Mirage Tech AI",
        description:
            "Expert AI consultancy for businesses in Kuwait and the Middle East.",
        url: "https://miragetech.ai/ai-consultancy",
        images: [
            {
                url: "/ai-consultancy-hero.jpg",
                width: 1200,
                height: 630,
                alt: "AI Consultancy – Mirage Tech AI",
            },
        ],
    },
};

export default function AIConsultancyPage() {
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
                                "name": "Strategic AI Consultancy",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Mirage Tech AI"
                                },
                                "description": "Expert AI consultancy for businesses in Kuwait and the Middle East. We help you automate processes, craft AI‑driven product strategies, and deploy custom models tailored to your goals.",
                                "serviceType": "Business Consulting",
                                "areaServed": {
                                    "@type": "GeoCircle",
                                    "geoMidpoint": {
                                        "@type": "GeoCoordinates",
                                        "latitude": 29.3759,
                                        "longitude": 47.9774
                                    },
                                    "geoRadius": "500000"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What does an AI consultant do?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "An AI consultant evaluates your current business workflows, tech stack, and data architecture to build a strategic roadmap for AI integration. At Mirage Tech AI, we don't just advise; we actively build and deploy the automated systems we recommend."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How much does AI consultancy cost in the Middle East?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Costs vary based on the scope, from an initial $2,000 alignment workshop to $50,000+ for enterprise-wide custom model training and deployment. We offer transparent pricing with defined ROI models before any build phases begin."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is generative AI safe for enterprise data?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, when deployed correctly. Mirage Tech AI ensures your data is secure by utilizing private, enterprise-tier LLMs (like Azure OpenAI) or deploying self-hosted open-source models so your proprietary data never trains public AI platforms."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <AIConsultancyClient />
        </>
    );
}
