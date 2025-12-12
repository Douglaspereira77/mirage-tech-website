import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio | Mirage Tech AI",
    description: "Check out our portfolio including BestofKuwait.com and other upcoming directory platforms.",
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
