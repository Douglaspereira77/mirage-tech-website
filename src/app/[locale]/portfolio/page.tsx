import { getTranslations } from "next-intl/server";
import PortfolioClient from "./PortfolioClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'PortfolioMetadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function PortfolioPage() {
    return <PortfolioClient />;
}
