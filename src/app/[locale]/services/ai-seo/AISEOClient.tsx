"use client";

import { motion } from "framer-motion";
import { Zap, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import { useTranslations } from "next-intl";

export default function AISEOClient() {
    const t = useTranslations("AISEO");

    const comparisonItems = t.raw("comparison.items") as { t: string; d: string }[];

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10"
                >
                    {t("hero.tag")}
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
                >
                    {t.rich("hero.title", {
                        aeo: (chunks) => <span className="text-muted-foreground italic">{chunks}</span>
                    })}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    {t("hero.description")}
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                        <Link href="/audit">{t("hero.cta")}</Link>
                    </Button>
                </motion.div>
            </div>

            {/* AEO vs SEO Section */}
            <div className="bg-muted/30 border-y py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">
                                {t.rich("comparison.title", {
                                    break: () => <br />
                                })}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {t.rich("comparison.description", {
                                    strong: (chunks) => <strong>{chunks}</strong>,
                                    em: (chunks) => <em>{chunks}</em>
                                })}
                            </p>
                            <div className="space-y-4 pt-4">
                                {comparisonItems.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                                            <Zap className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{item.t}</h4>
                                            <p className="text-sm text-muted-foreground">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative p-8 bg-background border rounded-3xl shadow-2xl overflow-hidden">
                            <div className="flex flex-col space-y-6">
                                <div className="border border-dashed p-4 rounded-xl opacity-50">
                                    <p className="text-[10px] uppercase font-black text-muted-foreground mb-2 italic">{t("comparison.oldLabel")}</p>
                                    <div className="h-4 w-3/4 bg-blue-500/20 rounded mb-2" />
                                    <div className="h-2 w-full bg-muted rounded mb-1" />
                                    <div className="h-2 w-1/2 bg-muted rounded" />
                                </div>
                                <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl shadow-inner animate-pulse">
                                    <p className="text-[10px] uppercase font-black text-primary mb-3">{t("comparison.aeoLabel")}</p>
                                    <div className="flex gap-3 mb-4">
                                        <Bot className="w-5 h-5 text-primary" />
                                        <div className="h-3 w-3/4 bg-primary/30 rounded mt-1" />
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed">
                                        &quot;{t.rich("comparison.aeoQuote", {
                                            strong: (chunks) => <strong>{chunks}</strong>
                                        })}&quot;
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <div className="px-2 py-1 bg-primary/10 rounded text-[9px] font-bold text-primary uppercase">{t("comparison.aeoSource")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* In-Depth Strategy Section */}
            <div className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">{t("strategy.title")}</h2>
                            <p className="text-xl text-muted-foreground">
                                {t.rich("strategy.description", {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* SEO Section */}
                            <div className="space-y-6">
                                <div className="relative rounded-2xl overflow-hidden border shadow-xl bg-white mb-8">
                                    <NextImage 
                                        src="/seo.jpg" 
                                        alt="SEO: Optimizing for Web Links" 
                                        width={800} 
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-blue-600">{t("strategy.seo.title")} <span className="text-muted-foreground text-lg block">{t("strategy.seo.subtitle")}</span></h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.rich("strategy.seo.description", {
                                            strong: (chunks) => <strong>{chunks}</strong>
                                        })}
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                            <p className="text-sm"><strong>{t("strategy.seo.item1.title")}</strong> {t("strategy.seo.item1.desc")}</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                            <p className="text-sm"><strong>{t("strategy.seo.item2.title")}</strong> {t("strategy.seo.item2.desc")}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* AEO Section */}
                            <div className="space-y-6">
                                <div className="relative rounded-2xl overflow-hidden border shadow-2xl bg-white ring-4 ring-primary/20 mb-8">
                                    <NextImage 
                                        src="/aeo.jpg" 
                                        alt="AEO: Optimizing for Direct Answers" 
                                        width={800} 
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-primary">{t("strategy.aeo.title")} <span className="text-muted-foreground text-lg block">{t("strategy.aeo.subtitle")}</span></h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.rich("strategy.aeo.description", {
                                            strong: (chunks) => <strong>{chunks}</strong>,
                                            em: (chunks) => <em>{chunks}</em>
                                        })}
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                            <p className="text-sm"><strong>{t("strategy.aeo.item1.title")}</strong> {t("strategy.aeo.item1.desc")}</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                            <p className="text-sm"><strong>{t("strategy.aeo.item2.title")}</strong> {t("strategy.aeo.item2.desc")}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 md:px-6 py-24 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 italic underline decoration-primary/30">{t("bottomCta.title")}</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    {t("bottomCta.description")}
                </p>
                <Button asChild variant="default" size="lg" className="rounded-full px-12 h-14 text-lg">
                    <Link href="/audit">{t("bottomCta.button")}</Link>
                </Button>
            </div>
        </div>
    );
}
