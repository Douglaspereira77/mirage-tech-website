"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    RefreshCw, AlertCircle, Inbox, ExternalLink, User,
    PhoneCall, Mail, TrendingUp, Clock, LogOut, Building2,
} from "lucide-react";
import type { GHLOpportunity } from "@/lib/ghl";

// Map GHL stage names → display config
const STAGE_CONFIG: Record<string, { label: string; color: string; dot: string }> = {
    default: { label: "New Lead", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
    "New Lead": { label: "New Lead", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
    "New Inquiry": { label: "New Inquiry", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400", dot: "bg-indigo-500" },
    "Contacted": { label: "Contacted", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400", dot: "bg-yellow-500" },
    "Proposal Sent": { label: "Proposal Sent", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400", dot: "bg-orange-500" },
    "Closed Won": { label: "Closed Won", color: "bg-green-500/10 text-green-600 dark:text-green-400", dot: "bg-green-500" },
};

function getStageConfig(stageName?: string) {
    return STAGE_CONFIG[stageName ?? ""] ?? STAGE_CONFIG.default;
}

function timeAgo(dateStr?: string) {
    if (!dateStr) return "Unknown";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (mins > 0) return `${mins}m ago`;
    return "Just now";
}

function OpportunityCard({ opp, index }: { opp: GHLOpportunity; index: number }) {
    const stage = getStageConfig(opp.pipelineStageName);
    const contactName = opp.contact?.name || "Unknown";
    const ghlUrl = `https://app.gohighlevel.com/v2/location/${process.env.NEXT_PUBLIC_GHL_LOCATION_ID || "eJ0JCOGEyTSVXs6hzKYk"}/contacts/${opp.contact?.id}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
        >
            <Card className="hover:shadow-md transition-all hover:border-primary/30 group">
                <CardContent className="p-4 space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                            <p className="font-semibold text-sm leading-tight truncate">{opp.name}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {contactName}
                            </p>
                        </div>
                        <Badge variant="secondary" className={`shrink-0 text-xs ${stage.color}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${stage.dot} mr-1.5`} />
                            {stage.label}
                        </Badge>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {opp.contact?.email && (
                            <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                <span className="truncate max-w-[160px]">{opp.contact.email}</span>
                            </span>
                        )}
                        {opp.contact?.phone && (
                            <span className="flex items-center gap-1">
                                <PhoneCall className="w-3 h-3" />
                                {opp.contact.phone}
                            </span>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {timeAgo(opp.createdAt)}
                            </span>
                            {opp.source && (
                                <span className="hidden sm:block truncate max-w-[100px]">{opp.source}</span>
                            )}
                        </div>
                        <a
                            href={ghlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
                                <ExternalLink className="w-3 h-3 mr-1" /> GHL
                            </Button>
                        </a>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

function StatCard({ label, value, icon: Icon, color }: { label: string; value: string | number; icon: any; color: string }) {
    return (
        <Card>
            <CardContent className="p-4 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${color}`}>
                    <Icon className="w-4 h-4" />
                </div>
                <div>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function CRMClient() {
    const [opportunities, setOpportunities] = useState<GHLOpportunity[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/admin/auth", { method: "DELETE" });
        router.push("/admin/login");
    }

    async function fetchOpportunities() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/crm");
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to fetch CRM data");
            setOpportunities(data.opportunities || []);
            setTotal(data.total || 0);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { fetchOpportunities(); }, []);

    // Group by stage
    const stages = ["New Lead", "New Inquiry", "Contacted", "Proposal Sent", "Closed Won"];
    const grouped: Record<string, GHLOpportunity[]> = {};
    stages.forEach((s) => { grouped[s] = []; });
    opportunities.forEach((opp) => {
        const key = opp.pipelineStageName || "New Lead";
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(opp);
    });

    const openCount = opportunities.filter((o) => o.status === "open").length;
    const wonCount = opportunities.filter((o) => o.status === "won").length;
    const earlyCapture = opportunities.filter((o) => o.pipelineStageName === "New Lead").length;

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
                >
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter">GHL CRM Pipeline</h1>
                        <p className="text-muted-foreground mt-1">
                            Live leads from GoHighLevel — Website Leads pipeline
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link href="/admin/leads">
                            <Button variant="outline" className="w-fit">
                                <Building2 className="w-4 h-4 mr-2" />
                                Restaurant Leads
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={fetchOpportunities} disabled={loading} className="w-fit">
                            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                            Refresh
                        </Button>
                        <a
                            href="https://app.gohighlevel.com/v2/location/eJ0JCOGEyTSVXs6hzKYk/opportunities/pipeline/ni9SHDnOdurFg5SWd0YC"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="secondary" className="w-fit">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Open in GHL
                            </Button>
                        </a>
                        <Button variant="outline" onClick={handleLogout} className="w-fit">
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StatCard label="Total Opportunities" value={total || opportunities.length} icon={TrendingUp} color="bg-primary/10 text-primary" />
                    <StatCard label="Open Deals" value={openCount} icon={Inbox} color="bg-blue-500/10 text-blue-600" />
                    <StatCard label="New Leads" value={earlyCapture} icon={User} color="bg-indigo-500/10 text-indigo-600" />
                    <StatCard label="Closed Won" value={wonCount} icon={TrendingUp} color="bg-green-500/10 text-green-600" />
                </div>

                {/* Error */}
                {error && (
                    <div className="flex items-center gap-3 p-4 mb-8 rounded-xl border border-destructive/50 bg-destructive/5 text-destructive">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {/* Pipeline Kanban */}
                {loading ? (
                    <div className="grid md:grid-cols-5 gap-4">
                        {stages.map((s) => (
                            <div key={s} className="space-y-3">
                                <div className="h-5 w-28 bg-muted rounded animate-pulse" />
                                {[1, 2].map((i) => (
                                    <div key={i} className="h-28 bg-muted rounded-xl animate-pulse" />
                                ))}
                            </div>
                        ))}
                    </div>
                ) : !error && opportunities.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <Inbox className="w-12 h-12 text-muted-foreground mb-4" />
                        <h2 className="text-xl font-semibold mb-1">No opportunities yet</h2>
                        <p className="text-muted-foreground max-w-md">
                            Submit the contact or audit form on the website to see leads appear here in real time.
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-5 gap-4 min-h-[400px]">
                        {stages.map((stageName) => {
                            const config = getStageConfig(stageName);
                            const items = grouped[stageName] || [];
                            return (
                                <div key={stageName} className="space-y-3">
                                    <div className="flex items-center gap-2 pb-1 border-b">
                                        <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                                        <h2 className="font-semibold text-sm">{config.label}</h2>
                                        <Badge variant="secondary" className="text-xs ml-auto">
                                            {items.length}
                                        </Badge>
                                    </div>
                                    {items.length === 0 ? (
                                        <p className="text-xs text-muted-foreground text-center py-6 border border-dashed rounded-lg">
                                            Empty
                                        </p>
                                    ) : (
                                        items.map((opp, i) => (
                                            <OpportunityCard key={opp.id} opp={opp} index={i} />
                                        ))
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
