"use client";

import { motion } from "framer-motion";
import { Search, Star, MessageSquare, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import NextImage from "next/image";
import { LeadConnectorProspecting } from "@/components/forms/LeadConnectorProspecting";
import { useTranslations } from "next-intl";

export default function AuditClient() {
    const t = useTranslations("Audit");

    const deliverableItems = t.raw("deliverables.items");

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10"
                        >
                            {t("hero.tag")}
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight"
                        >
                            {t("hero.title")}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground"
                        >
                            {t("hero.description")}
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 underline decoration-primary/30 underline-offset-8"
                        >
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">{t("hero.scrollHint")}</p>
                        </motion.div>
                    </div>

                    {/* Scorecard Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative p-1 bg-gradient-to-br from-primary/20 via-border to-primary/20 rounded-[2.5rem] shadow-2xl"
                    >
                        <div className="bg-background rounded-[2.25rem] p-8 space-y-8">
                            <h3 className="text-2xl font-bold border-b pb-4">{t("scorecard.title")}</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-500/10 rounded-xl">
                                            <Search className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{t("scorecard.visibility.title")}</p>
                                            <p className="text-xs text-muted-foreground">{t("scorecard.visibility.subtitle")}</p>
                                        </div>
                                    </div>
                                    <span className="text-xl font-black text-amber-500">62/100</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-amber-500/10 rounded-xl">
                                            <Star className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{t("scorecard.reputation.title")}</p>
                                            <p className="text-xs text-muted-foreground">{t("scorecard.reputation.subtitle")}</p>
                                        </div>
                                    </div>
                                    <span className="text-xl font-black text-red-500">45/100</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-emerald-500/10 rounded-xl">
                                            <MessageSquare className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{t("scorecard.followUp.title")}</p>
                                            <p className="text-xs text-muted-foreground">{t("scorecard.followUp.subtitle")}</p>
                                        </div>
                                    </div>
                                    <span className="text-xl font-black text-red-600">31/100</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t text-center">
                                <p className="text-sm font-semibold text-primary">{t("scorecard.footer")}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Deliverable Section */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 border-t">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">{t("deliverables.title")}</h2>
                    <p className="text-muted-foreground italic">{t("deliverables.subtitle")}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    {deliverableItems.map((item: any, i: number) => (
                        <div key={i} className="space-y-4 p-6 border rounded-2xl bg-muted/30">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Sample Report Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-8 text-center"
                >
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold italic text-primary">{t("sample.title")}</h3>
                        <p className="text-muted-foreground">{t("sample.description")}</p>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden border shadow-2xl bg-white p-2">
                        <NextImage 
                            src="/audit-sample.png" 
                            alt={t("sample.title")} 
                            width={1200}
                            height={1600}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Audit Form Section */}
            <div id="audit-form" className="container mx-auto px-4 md:px-6 py-24 scroll-mt-20">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 italic">{t("form.title")}</h2>
                    <p className="text-muted-foreground">{t("form.description")}</p>
                </div>
                <LeadConnectorProspecting />
            </div>

            {/* Bottom Support */}
            <div className="bg-muted/30 py-12 border-t">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        {t.rich("support.text", {
                            link: (chunks) => <Link href="/contact" className="text-primary font-bold hover:underline">{chunks}</Link>
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}
