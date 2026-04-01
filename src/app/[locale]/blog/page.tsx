import { getTranslations } from "next-intl/server";
import BlogClient from "./BlogClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "Blog.metadata" });
    return {
        title: t("title"),
        description: t("description"),
    };
}

export default function BlogPage() {
    return <BlogClient />;
}
