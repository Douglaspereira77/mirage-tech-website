import { getTranslations } from "next-intl/server";
import ServicesClient from "./ServicesClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'ServicesMetadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Services' });
    const faqs = t.raw('faqs.list') as { question: string, answer: string }[];

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
                                "name": t('schema.automationName'),
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Mirage Tech AI"
                                },
                                "description": t('schema.automationDesc'),
                                "serviceType": "AI Development & Automation"
                            },
                            {
                                "@type": "Service",
                                "name": t('schema.consultancyName'),
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Mirage Tech AI"
                                },
                                "description": t('schema.consultancyDesc'),
                                "serviceType": "Business Consulting"
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": faqs.map(faq => ({
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
            <ServicesClient />
        </>
    );
}
