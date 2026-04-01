"use client";

import { motion } from "framer-motion";
import { 
    Rocket, 
    Phone, 
    Star, 
    Share2, 
    Zap, 
    CheckCircle2, 
    ArrowRight, 
    Bot,
    MinusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function AIAutomationClient() {
    const t = useTranslations("AIAutomation");

    const engineData = t.raw("engines.list") as { id: string; title: string; subtitle: string; desc: string }[];
    
    const engineIcons: Record<string, any> = {
        growth: Rocket,
        voice: Phone,
        social: Share2,
        reputation: Star,
        chat: Bot
    };

    const engineStyles: Record<string, { color: string, bg: string }> = {
        growth: { color: "text-blue-500", bg: "bg-blue-500/10" },
        voice: { color: "text-green-500", bg: "bg-green-500/10" },
        social: { color: "text-purple-500", bg: "bg-purple-500/10" },
        reputation: { color: "text-amber-500", bg: "bg-amber-500/10" },
        chat: { color: "text-indigo-500", bg: "bg-indigo-500/10" }
    };

    const oldWayItems = t.raw("comparison.oldWay.items") as string[];
    const newWayItems = t.raw("comparison.newWay.items") as string[];

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                        {t("hero.title")} <br/>
                        <span className="text-primary italic whitespace-nowrap">{t("hero.subtitle")}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("hero.description")}
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                            <Link href="/audit">{t("hero.cta")}</Link>
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* The Engines Section */}
            <section className="py-24 bg-muted/30 border-y">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold italic">{t("engines.title")}</h2>
                        <p className="text-muted-foreground text-lg">{t("engines.description")}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {engineData.map((engine, i) => {
                            const Icon = engineIcons[engine.id] || Zap;
                            const style = engineStyles[engine.id] || { color: "text-primary", bg: "bg-primary/10" };
                            
                            return (
                                <motion.div
                                    key={i}
                                    id={engine.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="h-full border-2 hover:border-primary/50 transition-colors shadow-sm bg-background">
                                        <CardContent className="p-8 space-y-6">
                                            <div className={`w-14 h-14 ${style.bg} rounded-2xl flex items-center justify-center ${style.color}`}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">{engine.title}</h3>
                                                <p className="text-sm font-bold text-primary uppercase tracking-widest">{engine.subtitle}</p>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed italic border-l-2 pl-4">
                                                &quot;{engine.desc}&quot;
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Old Way vs New Way Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("comparison.title")}</h2>
                        <p className="text-muted-foreground">{t("comparison.description")}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-border border rounded-3xl overflow-hidden shadow-2xl">
                        {/* Old Way */}
                        <div className="bg-background p-10 space-y-8">
                            <div className="flex items-center gap-3 text-red-500">
                                <MinusCircle className="w-8 h-8" />
                                <h3 className="text-2xl font-bold">{t("comparison.oldWay.title")}</h3>
                            </div>
                            <ul className="space-y-6">
                                {oldWayItems.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start opacity-60">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        <p className="font-medium">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mirage Way */}
                        <div className="bg-primary/5 p-10 space-y-8 border-l border-border">
                            <div className="flex items-center gap-3 text-primary">
                                <Zap className="w-8 h-8 fill-primary" />
                                <h3 className="text-2xl font-bold">{t("comparison.newWay.title")}</h3>
                            </div>
                            <ul className="space-y-6">
                                {newWayItems.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <p className="font-bold underline decoration-primary/20 underline-offset-4">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bot Benefits */}
            <section className="py-16 md:py-24 bg-muted/20 border-t">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-8">
                    <h2 className="text-3xl font-bold">{t("benefits.title")}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                        {t("benefits.quote")}
                    </p>
                    <div className="pt-8 grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-4xl font-black text-primary">{t("benefits.card1")}</p>
                            <p className="text-sm font-bold uppercase tracking-widest mt-2">{t("benefits.label1")}</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-primary">{t("benefits.card2")}</p>
                            <p className="text-sm font-bold uppercase tracking-widest mt-2">{t("benefits.label2")}</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-primary">{t("benefits.card3")}</p>
                            <p className="text-sm font-bold uppercase tracking-widest mt-2">{t("benefits.label3")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 md:px-6 py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold italic underline decoration-primary/30 text-center">{t("footerCta.title")}</h2>
                    <p className="text-xl text-muted-foreground">{t("footerCta.description")}</p>
                    <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                        <Link href="/contact">
                            {t("footerCta.button")}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
