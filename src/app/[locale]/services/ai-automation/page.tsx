import { Metadata } from "next";
import AIAutomationClient from "./AIAutomationClient";

export const metadata: Metadata = {
    title: "AI Automation Services in Kuwait | Mirage Tech AI",
    description: "Replace manual work with powerful AI Growth Engines. We build AI systems that handle calls, messages, scheduling, and follow-ups 24/7.",
    openGraph: {
        title: "AI Automation Services & Systems | Mirage Tech AI",
        description: "Automate your business workflows with AI Growth Engines, Voice Agents, and Reputation Management.",
        url: "https://miragetech.ai/services/ai-automation",
    },
};

export default function AIAutomationPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "AI Automation Services",
                        "description": "Custom AI systems to automate sales, follow-ups, voice reception, and social media management for Kuwaiti businesses.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Mirage Tech AI"
                        }
                    })
                }}
            />
            <AIAutomationClient />
        </>
    );
}
