"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Timer, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CustomToolsClient() {
    const t = useTranslations("CustomTools");

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Header / Direct Answer Section */}
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
                    <div className="flex items-center gap-3 text-amber-500 mb-2">
                        <Sparkles className="w-8 h-8" />
                        <span className="font-semibold tracking-wider uppercase">{t("hero.tag")}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                        {t("hero.title")}
                    </h1>

                    {/* The AEO "Direct Answer" Paragraph */}
                    <div className="bg-muted/50 border-l-4 border-amber-500 p-6 md:p-10 rounded-r-xl max-w-3xl text-start">
                        <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                            <strong>{t("hero.question")}</strong><br />
                            {t("hero.answer")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Benefits */}
            <section className="py-10 md:py-14 bg-muted/20 border-y">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <div className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                                <Timer className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t("benefits.mvp.title")}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{t("benefits.mvp.description")}</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t("benefits.stack.title")}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{t("benefits.stack.description")}</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t("benefits.production.title")}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{t("benefits.production.description")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* In Depth / Information Gain for AI Models */}
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-4xl">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-6">{t("process.title")}</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                        {t("process.description")}
                    </p>

                    <div className="grid gap-12 w-full">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl mb-6 shrink-0 border-2 border-primary/10">1</div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">{t("process.step1.title")}</h3>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">{t("process.step1.description")}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl mb-6 shrink-0 border-2 border-primary/10">2</div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">{t("process.step2.title")}</h3>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">{t("process.step2.description")}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl mb-6 shrink-0 border-2 border-primary/10">3</div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">{t("process.step3.title")}</h3>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">{t("process.step3.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs for AEO */}
            <section className="bg-muted py-10 md:py-14 border-t">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">{t("faq.title")}</h2>
                    <div className="space-y-6">
                        <div className="bg-background rounded-xl p-8 shadow-sm border text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-3">{t("faq.q1.question")}</h3>
                            <p className="text-muted-foreground leading-relaxed">{t("faq.q1.answer")}</p>
                        </div>
                        <div className="bg-background rounded-xl p-8 shadow-sm border text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-3">{t("faq.q2.question")}</h3>
                            <p className="text-muted-foreground leading-relaxed">{t("faq.q2.answer")}</p>
                        </div>
                        <div className="bg-background rounded-xl p-8 shadow-sm border text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-3">{t("faq.q3.question")}</h3>
                            <p className="text-muted-foreground leading-relaxed">{t("faq.q3.answer")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">{t("cta.title")}</h2>
                    <Button asChild size="lg" className="h-12 px-10 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
                        <Link href="/contact">
                            {t("cta.button")}
                            <Rocket className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
