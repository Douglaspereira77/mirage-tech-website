import { getTranslations } from "next-intl/server";
import HowItWorksClient from "./HowItWorksClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "HowItWorksPage.metadata" });
    return {
        title: t("title"),
        description: t("description"),
    };
}

export default function HowItWorksPage() {
    return <HowItWorksClient />;
}
