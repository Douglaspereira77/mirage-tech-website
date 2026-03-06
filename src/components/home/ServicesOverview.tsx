"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
    {
        title: "Conversational AI",
        subtitle: "WhatsApp & Instagram Automation",
        description:
            "Automate customer support, order tracking, lead qualification, and appointment scheduling on WhatsApp and Instagram — 24/7, in Arabic and English.",
        icon: MessageCircle,
        href: "/services/whatsapp-automation",
        color: "text-green-500",
        bgGlow: "from-green-500/10 to-green-500/5",
    },
    {
        title: "Vibe Coding",
        subtitle: "Rapid App Development",
        description:
            "Turn your idea into a deployed, production-ready web application in days using AI-accelerated development. Modern stack. You own the code.",
        icon: Sparkles,
        href: "/services/vibe-coding",
        color: "text-amber-500",
        bgGlow: "from-amber-500/10 to-amber-500/5",
    },
    {
        title: "AI Consultancy",
        subtitle: "Enterprise Strategy & Deployment",
        description:
            "We map your workflows, identify AI opportunities, and build an implementation roadmap. From process automation to custom model training.",
        icon: Brain,
        href: "/ai-consultancy",
        color: "text-violet-500",
        bgGlow: "from-violet-500/10 to-violet-500/5",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        What We Build
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-[42rem]">
                        Three core capabilities. One seamless AI partnership.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Card className={`h-full flex flex-col hover:shadow-xl transition-all duration-300 border-muted group bg-gradient-to-b ${pillar.bgGlow}`}>
                                <CardHeader className="pb-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${pillar.color}`}>
                                        <pillar.icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                                    <p className="text-sm font-medium text-muted-foreground">{pillar.subtitle}</p>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <p className="text-muted-foreground flex-1 mb-8 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                    <Button asChild variant="ghost" className="w-full justify-between group/btn">
                                        <Link href={pillar.href}>
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
