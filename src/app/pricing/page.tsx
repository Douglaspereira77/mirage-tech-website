import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
    title: "Pricing | Mirage Tech AI",
    description: "Transparent pricing plans for AI automation services. Starter, Business, and Enterprise options.",
};

export default function PricingPage() {
    return <PricingClient />;
}
