import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Services | Mirage Tech AI",
    description: "Explore our AI automation services including Vibe Coding, WhatsApp chatbots, Instagram automation, and rapid MVP development.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
