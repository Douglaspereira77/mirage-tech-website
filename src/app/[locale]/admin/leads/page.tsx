import { Metadata } from "next";
import LeadsClient from "./LeadsClient";

export const metadata: Metadata = {
  title: "Restaurant Leads | Mirage Tech AI Admin",
  description: "Internal pipeline for Best of Kuwait incomplete restaurant listings.",
};

export default function LeadsPage() {
  return <LeadsClient />;
}
