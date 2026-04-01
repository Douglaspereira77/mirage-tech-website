import { Metadata } from "next";
import AISEOClient from "./AISEOClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params: { locale }
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "AISEO.metadata" });

    return {
        title: t("title"),
        description: t("description"),
    };
}

export default async function AISEOPage({
    params: { locale }
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: "AISEO.schema" });

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
                        "description": t("description"),
                        "areaServed": "Kuwait",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": t("offerCatalogName"),
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": t("offer1")
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": t("offer2")
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
