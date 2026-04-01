import { Metadata } from "next";
import AIConsultancyClient from "./AIConsultancyClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "AIConsultancy.metadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: `https://miragetech.ai/${locale}/ai-consultancy`,
            images: [
                {
                    url: "/ai-consultancy-hero.jpg",
                    width: 1200,
                    height: 630,
                    alt: t("title"),
                },
            ],
        },
    };
}

export default async function AIConsultancyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "AIConsultancy.faqs" });
    const schemaT = await getTranslations({ locale, namespace: "AIConsultancy" });

    const faqs = t.raw("items");

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
                                "name": schemaT("metadata.title"),
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Mirage Tech AI"
                                },
                                "description": schemaT("metadata.description"),
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
                                "mainEntity": faqs.map((faq: any) => ({
                                    "@type": "Question",
                                    "name": faq.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.answer
                                    }
                                }))
                            }
                        ]
                    })
                }}
            />
            <AIConsultancyClient />
        </>
    );
}
