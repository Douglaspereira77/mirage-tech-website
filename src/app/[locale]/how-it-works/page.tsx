import { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";

export const metadata: Metadata = {
    title: "How It Works | Mirage Tech AI",
    description: "Our 4-step process to transform your business with AI automation: Consultation, Strategy, Implementation, and Launch.",
};

export default function HowItWorksPage() {
    return <HowItWorksClient />;
}
