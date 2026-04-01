"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, PenTool, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const stepIcons = [PhoneCall, ClipboardList, PenTool, Rocket];

export default function HowItWorksPage() {
    const t = useTranslations("HowItWorksPage");
    const stepsData = t.raw("steps");
    
    const steps = Object.values(stepsData).map((item: any, index: number) => ({
        ...item,
        icon: stepIcons[index],
    }));

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-12 md:space-y-16">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Step Indicator */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-xs font-bold text-primary shadow-sm">
                                        {item.number}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Dash Connector */}
                                {index < steps.length - 1 && (
                                    <div className="w-px h-12 bg-gradient-to-b from-primary/20 to-transparent mt-8 hidden md:block" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-muted/30 border">
                        <h2 className="text-2xl font-bold mb-6">{t("cta.title")}</h2>
                        <Button asChild size="lg" className="rounded-full px-12 h-12 text-base shadow-lg hover:shadow-xl transition-all">
                            <Link href="/contact">{t("cta.button")}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
