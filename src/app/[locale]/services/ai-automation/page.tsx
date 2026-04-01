import { Metadata } from "next";
import AIAutomationClient from "./AIAutomationClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params: { locale }
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "AIAutomation.metadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: `https://miragetech.ai/${locale}/services/ai-automation`,
        },
    };
}

export default async function AIAutomationPage({
    params: { locale }
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: "AIAutomation.metadata" });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "AI Automation Services",
                        "description": t("description"),
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
