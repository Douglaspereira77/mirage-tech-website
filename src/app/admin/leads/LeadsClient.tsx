"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, AlertCircle, Building2, Send, ExternalLink, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import type { RestaurantLead } from "@/lib/bok-api";
import ProposalDialog from "./ProposalDialog";

type PipelineStage = "needs_outreach" | "in_progress" | "almost_complete";

const STAGES: { key: PipelineStage; label: string; color: string }[] = [
  { key: "needs_outreach", label: "Needs Outreach", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
  { key: "in_progress", label: "In Progress", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
  { key: "almost_complete", label: "Almost Complete", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
];

function classifyLead(lead: RestaurantLead): PipelineStage {
  if (lead.completionPercentage < 30) return "needs_outreach";
  if (lead.completionPercentage <= 70) return "in_progress";
  return "almost_complete";
}

function LeadCard({ lead, index, onSendProposal }: { lead: RestaurantLead; index: number; onSendProposal: (lead: RestaurantLead) => void }) {
  const stage = STAGES.find((s) => s.key === classifyLead(lead))!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight">{lead.name}</h3>
            <Badge variant="secondary" className={stage.color}>
              {lead.completionPercentage}%
            </Badge>
          </div>

          {(lead.area || lead.category) && (
            <p className="text-sm text-muted-foreground">
              {[lead.category, lead.area].filter(Boolean).join(" · ")}
            </p>
          )}

          {lead.missingFields.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {lead.missingFields.map((field) => (
                <Badge key={field} variant="outline" className="text-xs">
                  {field}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-1">
            <Button
              size="sm"
              variant="secondary"
              className="flex-1"
              onClick={() => onSendProposal(lead)}
            >
              <Send className="w-3.5 h-3.5 mr-1.5" />
              Send Proposal
            </Button>
            {lead.bokUrl && (
              <Button
                size="sm"
                variant="outline"
                asChild
              >
                <a href={lead.bokUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkeletonColumn() {
  return (
    <div className="space-y-3">
      <div className="h-6 w-36 bg-muted rounded animate-pulse" />
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-28 bg-muted rounded-xl animate-pulse" />
      ))}
    </div>
  );
}

export default function LeadsClient() {
  const [leads, setLeads] = useState<RestaurantLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<RestaurantLead | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  async function fetchLeads() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/bok/leads");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch leads");
      setLeads(Array.isArray(data.leads) ? data.leads : []);
    } catch (err: any) {
      setError(err.message);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  const grouped: Record<PipelineStage, RestaurantLead[]> = {
    needs_outreach: [],
    in_progress: [],
    almost_complete: [],
  };
  leads.forEach((lead) => {
    grouped[classifyLead(lead)].push(lead);
  });

  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      <div className="container px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">
              Restaurant Leads
            </h1>
            <p className="text-muted-foreground mt-1">
              Best of Kuwait — incomplete listings pipeline
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={fetchLeads}
              disabled={loading}
              className="w-fit"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="w-fit"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 p-4 mb-8 rounded-xl border border-destructive/50 bg-destructive/5 text-destructive"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <SkeletonColumn key={i} />
            ))}
          </div>
        ) : !error && leads.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <Building2 className="w-12 h-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-1">No leads found</h2>
            <p className="text-muted-foreground">
              All restaurant listings are complete, or the BOK API is not
              available.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {STAGES.map((stage) => (
              <div key={stage.key} className="space-y-3">
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">{stage.label}</h2>
                  <Badge variant="secondary" className="text-xs">
                    {grouped[stage.key].length}
                  </Badge>
                </div>
                {grouped[stage.key].length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No leads in this stage
                  </p>
                ) : (
                  grouped[stage.key].map((lead, i) => (
                    <LeadCard key={lead.id} lead={lead} index={i} onSendProposal={(l) => { setSelectedLead(l); setDialogOpen(true); }} />
                  ))
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <ProposalDialog
        lead={selectedLead}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
