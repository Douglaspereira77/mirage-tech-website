import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Mirage Tech AI",
    description: "Get in touch with Mirage Tech AI for your automation needs. Whatsapp, Email or Call us.",
};

export default function ContactPage() {
    return <ContactClient />;
}
