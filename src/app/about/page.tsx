import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Mirage Tech AI | Leading AI Automation Agency in Kuwait",
    description: "Meet the experts behind Mirage Tech AI. We bridge the gap between businesses and AI in Kuwait and the Middle East through rapid software development (Vibe Coding) and enterprise AI consultancy.",
};

export default function AboutPage() {
    return <AboutClient />;
}
