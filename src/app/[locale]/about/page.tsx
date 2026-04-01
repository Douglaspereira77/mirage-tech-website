import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "AboutMetadata" });

    return {
        title: t("title"),
        description: t("description")
    };
}

export default function AboutPage() {
    return <AboutClient />;
}
