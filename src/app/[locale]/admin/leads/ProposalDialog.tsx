"use client";

import { useEffect, useState, useCallback } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, MessageCircle, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import type { RestaurantLead } from "@/lib/bok-api";

type Tab = "email" | "whatsapp";

interface ProposalDialogProps {
    lead: RestaurantLead | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProposalDialog({ lead, open, onOpenChange }: ProposalDialogProps) {
    const [loading, setLoading] = useState(false);
    const [subject, setSubject] = useState("");
    const [htmlContent, setHtmlContent] = useState("");
    const [whatsappText, setWhatsappText] = useState("");
    const [activeTab, setActiveTab] = useState<Tab>("email");
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [manualEmail, setManualEmail] = useState("");
    const [manualPhone, setManualPhone] = useState("");

    const generate = useCallback(async (lead: RestaurantLead) => {
        setLoading(true);
        setFeedback(null);
        try {
            const res = await fetch("/api/proposals/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: lead.name,
                    category: lead.category,
                    area: lead.area,
                    missingFields: lead.missingFields,
                    completionPercentage: lead.completionPercentage,
                    bokUrl: lead.bokUrl,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Generation failed");
            setSubject(data.subject);
            setHtmlContent(data.htmlContent);
            setWhatsappText(data.whatsappText);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to generate proposal";
            setFeedback({ type: "error", message });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (open && lead) {
            setSubject("");
            setHtmlContent("");
            setWhatsappText("");
            setFeedback(null);
            setActiveTab("email");
            setManualEmail(lead.email || "");
            setManualPhone(lead.phone || "");
            generate(lead);
        }
    }, [open, lead, generate]);

    async function handleSendEmail() {
        if (!manualEmail) return;
        setSending(true);
        setFeedback(null);
        try {
            const res = await fetch("/api/proposals/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    restaurantId: lead!.id,
                    restaurantName: lead!.name,
                    recipientEmail: manualEmail,
                    subject,
                    htmlContent,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Send failed");
            setFeedback({ type: "success", message: `Email sent! (${data.messageId})` });
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to send email";
            setFeedback({ type: "error", message });
        } finally {
            setSending(false);
        }
    }

    async function handleSendWhatsApp() {
        if (!manualPhone) return;
        // Log to DB
        try {
            await fetch("/api/proposals/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    restaurantId: lead!.id,
                    restaurantName: lead!.name,
                    recipientEmail: "__whatsapp_log__",
                    subject: "WhatsApp Proposal",
                    htmlContent: whatsappText,
                }),
            }).catch(() => {});
        } catch {
            // logging is best-effort
        }

        // Clean phone number and open wa.me
        const cleanPhone = manualPhone.replace(/[^0-9+]/g, "");
        const encoded = encodeURIComponent(whatsappText);
        window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, "_blank");
        setFeedback({ type: "success", message: "WhatsApp opened in new tab" });
    }

    const hasEmail = !!manualEmail.trim();
    const hasPhone = !!manualPhone.trim();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center justify-between gap-2">
                        <DialogTitle>Proposal for {lead?.name}</DialogTitle>
                        {lead?.bokUrl && (
                            <a
                                href={lead.bokUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-primary hover:underline shrink-0"
                            >
                                View on BOK <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                    <DialogDescription>
                        AI-generated proposal — review and edit before sending.
                    </DialogDescription>
                </DialogHeader>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-3">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        <p className="text-sm text-muted-foreground">Generating personalized proposal...</p>
                    </div>
                ) : (
                    <>
                        {/* Tab switcher */}
                        <div className="flex gap-2 border-b pb-2">
                            <button
                                onClick={() => setActiveTab("email")}
                                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors ${
                                    activeTab === "email"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted"
                                }`}
                            >
                                <Mail className="w-4 h-4" />
                                Email Preview
                            </button>
                            <button
                                onClick={() => setActiveTab("whatsapp")}
                                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors ${
                                    activeTab === "whatsapp"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted"
                                }`}
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp Preview
                            </button>
                        </div>

                        {/* Contact info inputs */}
                        {activeTab === "email" && (
                            <div>
                                <label className="text-sm font-medium">Recipient Email</label>
                                <input
                                    type="email"
                                    value={manualEmail}
                                    onChange={(e) => setManualEmail(e.target.value)}
                                    placeholder="Enter email address..."
                                    className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                                />
                            </div>
                        )}
                        {activeTab === "whatsapp" && (
                            <div>
                                <label className="text-sm font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    value={manualPhone}
                                    onChange={(e) => setManualPhone(e.target.value)}
                                    placeholder="e.g. +96512345678"
                                    className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                                />
                            </div>
                        )}

                        {/* Email tab */}
                        {activeTab === "email" && (
                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium">Subject</label>
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">HTML Content</label>
                                    <div
                                        className="mt-1 rounded-md border p-4 bg-white text-black text-sm max-h-64 overflow-y-auto"
                                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                                    />
                                </div>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-muted-foreground">Edit raw HTML</summary>
                                    <textarea
                                        value={htmlContent}
                                        onChange={(e) => setHtmlContent(e.target.value)}
                                        rows={8}
                                        className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-xs font-mono"
                                    />
                                </details>
                            </div>
                        )}

                        {/* WhatsApp tab */}
                        {activeTab === "whatsapp" && (
                            <div className="space-y-3">
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    value={whatsappText}
                                    onChange={(e) => setWhatsappText(e.target.value)}
                                    rows={6}
                                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                                />
                            </div>
                        )}

                        {/* Feedback */}
                        {feedback && (
                            <div
                                className={`flex items-center gap-2 text-sm p-3 rounded-lg ${
                                    feedback.type === "success"
                                        ? "text-green-600 bg-green-50 dark:bg-green-950/20"
                                        : "text-red-600 bg-red-50 dark:bg-red-950/20"
                                }`}
                            >
                                {feedback.type === "success" ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                                ) : (
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                )}
                                {feedback.message}
                            </div>
                        )}
                    </>
                )}

                <DialogFooter>
                    <Button
                        onClick={handleSendEmail}
                        disabled={!hasEmail || loading || sending || !htmlContent}
                    >
                        {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Mail className="w-4 h-4 mr-2" />}
                        Send Email
                    </Button>
                    <Button
                        variant="outline"
                        onClick={handleSendWhatsApp}
                        disabled={!hasPhone || loading || !whatsappText}
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send WhatsApp
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
