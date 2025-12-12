import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Mirage Tech AI",
    description: "Learn about Mirage Tech AI, our mission to bridge the gap between businesses and AI in the Middle East.",
};

export default function AboutPage() {
    return <AboutClient />;
}
