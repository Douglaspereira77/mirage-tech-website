"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Target, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("About");

    const values = [
        { icon: Target, title: t("values.local.title"), desc: t("values.local.desc") },
        { icon: Users, title: t("values.customer.title"), desc: t("values.customer.desc") },
        { icon: Lightbulb, title: t("values.innovation.title"), desc: t("values.innovation.desc") },
        { icon: ShieldCheck, title: t("values.transparency.title"), desc: t("values.transparency.desc") }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Story Section */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-12">
                    <div className="space-y-6 max-w-3xl">
                        <h2 className="text-3xl font-bold">{t("story.title")}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t("story.p1")}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t("story.p2")}
                        </p>
                    </div>
                    <div className="w-full h-[300px] md:h-[400px] bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Abstract Visualization of "Bridge" */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20"></div>
                        <div className="text-center p-8 z-10">
                            <span className="text-6xl font-bold text-primary/80 block mb-2">{t("story.year")}</span>
                            <span className="text-xl text-muted-foreground uppercase tracking-widest">{t("story.established")}</span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("values.title")}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card p-6 rounded-xl border shadow-sm text-center flex flex-col items-center"
                            >
                                <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Founder Section */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("founder.title")}</h2>
                    <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
                        <div className="shrink-0">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                                <Image
                                    src="/founder.jpg"
                                    alt={t("founder.alt")}
                                    width={160}
                                    height={160}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold">{t("founder.name")}</h3>
                                <p className="text-muted-foreground">{t("founder.role")}</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                {t("founder.bio1")}
                            </p>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                {t.rich("founder.bio2", {
                                    link: (chunks) => (
                                        <a href="https://bestofkuwait.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                                            {chunks}
                                        </a>
                                    )
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
