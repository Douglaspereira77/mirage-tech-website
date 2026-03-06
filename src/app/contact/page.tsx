import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Mirage Tech AI | Start Your AI Transformation",
    description: "Consult with our AI experts in Kuwait today. Contact Mirage Tech AI for custom WhatsApp chatbots, business process automation, or enterprise AI strategy consulting.",
};

export default function ContactPage() {
    return <ContactClient />;
}
