import { getTranslations } from "next-intl/server";
import BestOfKuwaitClient from "./BestOfKuwaitClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "Partnership.metadata" });
    return {
        title: t("title"),
        description: t("description"),
    };
}

export default function BestOfKuwaitPartnership() {
    return <BestOfKuwaitClient />;
}
