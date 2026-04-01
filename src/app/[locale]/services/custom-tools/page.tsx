import { Metadata } from "next";
import CustomToolsClient from "./CustomToolsClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params: { locale }
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "CustomTools.metadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: `https://miragetech.ai/${locale}/services/custom-tools`,
        },
    };
}

export default async function CustomToolsPage({
    params: { locale }
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: "CustomTools.faq" });

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
                                "name": t("q1.question"),
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": t("q1.answer")
                                }
                            },
                            {
                                "@type": "Question",
                                "name": t("q2.question"),
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": t("q2.answer")
                                }
                            },
                            {
                                "@type": "Question",
                                "name": t("q3.question"),
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": t("q3.answer")
                                }
                            }
                        ]
                    })
                }}
            />
            <CustomToolsClient />
        </>
    );
}
