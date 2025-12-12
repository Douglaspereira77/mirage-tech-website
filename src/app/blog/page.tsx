import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Blog & Insights | Mirage Tech AI",
    description: "Read the latest trends and insights in AI automation, customer service, and business growth.",
};

export default function BlogPage() {
    return <BlogClient />;
}
