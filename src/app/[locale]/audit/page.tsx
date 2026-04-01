import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AuditClient from "./AuditClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Audit.metadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: `https://miragetech.ai/${locale}/audit`,
            images: [
                {
                    url: "/audit-sample.png",
                    width: 1200,
                    height: 630,
                    alt: t("title"),
                },
            ],
        },
    };
}

export default async function AuditPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Audit" });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": t("metadata.title"),
                        "provider": {
                            "@type": "Organization",
                            "name": "Mirage Tech AI"
                        },
                        "description": t("metadata.description"),
                        "areaServed": "Kuwait",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "KWD"
                        }
                    })
                }}
            />
            <AuditClient />
        </>
    );
}
