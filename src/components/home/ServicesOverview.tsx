"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Globe, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        title: "SEO & AEO Optimization",
        description: "Optimize for Google Search and AI Answer Engines like ChatGPT to future-proof your presence.",
        icon: TrendingUp,
        href: "/services#seo-aeo",
        color: "text-emerald-500",
    },
    {
        title: "Vibe Coding & Rapid MVP",
        description: "Turn your idea into a deployed application in days using advanced AI magic.",
        icon: Sparkles,
        href: "/services#vibe-coding",
        color: "text-amber-500",
    },
    {
        title: "WhatsApp Automation",
        description: "Automate customer support, order updates, and lead qualification directly on WhatsApp.",
        icon: MessageCircle,
        href: "/services#whatsapp",
        color: "text-green-500",
    },
    {
        title: "Instagram Automation",
        description: "Auto-reply to DMs and comments, and capture leads from your stories 24/7.",
        icon: Instagram,
        href: "/services#instagram",
        color: "text-pink-500",
    },
    {
        title: "Web Chatbots",
        description: "An intelligent assistant that lives on your website and engages every visitor.",
        icon: Globe,
        href: "/services#web",
        color: "text-blue-500",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Core Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-[42rem]">
                        We specialize in automating the platforms your customers already use.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-muted">
                                <CardHeader>
                                    <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <p className="text-muted-foreground flex-1 mb-6">
                                        {service.description}
                                    </p>
                                    <Button asChild variant="ghost" className="w-full justify-between group">
                                        <Link href={service.href}>
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
