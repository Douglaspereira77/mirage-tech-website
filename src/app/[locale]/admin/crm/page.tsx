import { Metadata } from "next";
import CRMClient from "./CRMClient";

export const metadata: Metadata = {
    title: "GHL CRM Pipeline | Mirage Tech AI Admin",
    description: "Live GoHighLevel pipeline view for website leads.",
};

export default function CRMPage() {
    return <CRMClient />;
}
