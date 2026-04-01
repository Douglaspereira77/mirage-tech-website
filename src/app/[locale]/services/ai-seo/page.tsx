import { Metadata } from "next";
import AISEOClient from "./AISEOClient";

export const metadata: Metadata = {
    title: "AI-SEO & AEO Optimization | Mirage Tech AI",
    description: "Dominate generative search results on ChatGPT, Perplexity, and Gemini. We optimize your business for the AI era in Kuwait through Strategic AEO.",
};

export default function AISEOPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "AI-SEO & AEO Optimization",
                        "provider": {
                            "@type": "Organization",
                            "name": "Mirage Tech AI"
                        },
                        "description": "Answer Engine Optimization (AEO) to ensure your brand is cited and recommended by generative AI models like Perplexity and ChatGPT in the Kuwait market.",
                        "areaServed": "Kuwait",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "AEO Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Generative Search Visibility"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Bilingual Voice Search Optimization"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <AISEOClient />
        </>
    );
}
