"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
    {
        title: "AI Reviews & Reputation",
        subtitle: "Google & Maps Dominance",
        description:
            "Automate review generation and respond to customer feedback in seconds. We turn happy customers into your best marketing engine on autopilot.",
        icon: Sparkles,
        href: "/services/ai-automation#reputation",
        color: "text-amber-500",
        bgGlow: "from-amber-500/10 via-amber-500/5 to-transparent",
    },
    {
        title: "AI Chat & Lead Capture",
        subtitle: "Omnichannel Engagement",
        description:
            "Don't lose another lead to slow replies. Our bilingual AI agents handle inquiries, qualify leads, and book appointments on WhatsApp and Web 24/7.",
        icon: MessageCircle,
        href: "/services/ai-automation#growth",
        color: "text-green-500",
        bgGlow: "from-green-500/10 via-green-500/5 to-transparent",
    },
    {
        title: "AI Voice & Reception",
        subtitle: "24/7 Voice Agents",
        description:
            "Replace your manual hold times with immediate AI responses. Our Voice Agents qualify callers and book appointments while you focus on the work.",
        icon: Brain,
        href: "/services/ai-automation#voice",
        color: "text-violet-500",
        bgGlow: "from-violet-500/10 via-violet-500/5 to-transparent",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
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
                            className="flex"
                        >
                            <Card className={`w-full flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 border-muted group bg-gradient-to-br ${pillar.bgGlow}`}>
                                <CardHeader className="pb-4 flex flex-col items-center text-center space-y-2 w-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform ${pillar.color}`}>
                                        <pillar.icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-center w-full">
                                        {pillar.title}
                                    </CardTitle>
                                    <p className="text-sm font-semibold text-muted-foreground w-full text-center max-w-[300px] mx-auto leading-tight">
                                        {pillar.subtitle}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col items-center text-center w-full pt-0">
                                    <p className="text-muted-foreground flex-1 mb-8 leading-relaxed max-w-[320px] mx-auto text-center">
                                        {pillar.description}
                                    </p>
                                    <Button asChild variant="ghost" className="w-full justify-center group/btn font-semibold">
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
