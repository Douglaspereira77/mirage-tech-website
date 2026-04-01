import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "ContactMetadata" });

    return {
        title: t("title"),
        description: t("description")
    };
}

export default function ContactPage() {
    return <ContactClient />;
}
