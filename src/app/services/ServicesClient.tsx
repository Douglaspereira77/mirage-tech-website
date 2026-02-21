"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Globe, Sparkles, Check, LayoutTemplate, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
    {
        id: "vibe-coding",
        title: "Vibe Coding & Rapid MVP",
        description: "Turn your idea into a deployed application in days, not months. We leverage advanced AI to code at the speed of thought.",
        icon: Sparkles,
        color: "text-amber-500",
        features: [
            "Idea to MVP in < 7 days",
            "Real-time collaborative build sessions",
            "Modern Tech Stack (Next.js, Supabase, AI)",
            "Focus on User Experience & 'Vibe'",
            "Scalable, production-ready code",
        ],
    },
    {
        id: "seo-aeo",
        title: "SEO & AEO Optimization",
        description: "Future-proof your digital presence. We optimize your brand not just for Google Search (SEO), but for AI Answer Engines (AEO) like ChatGPT and Gemini.",
        icon: TrendingUp,
        color: "text-emerald-500",
        features: [
            "Technical site audits & optimization",
            "AI-friendly content structuring",
            "Schema markup for rich snippets",
            "Targeting Answer Engine platforms",
            "Local SEO strategy implementation",
        ],
    },
    {
        id: "whatsapp",
        title: "WhatsApp Automation",
        description: "The most popular messaging app in the Middle East, now fully automated for your business.",
        icon: MessageCircle,
        color: "text-green-500",
        features: [
            "Automated customer support 24/7",
            "Order tracking and status updates",
            "Appointment scheduling and reminders",
            "Instant FAQ handling",
            "Lead qualification flows",
        ],
    },
    {
        id: "instagram",
        title: "Instagram Automation",
        description: "Turn your Instagram DMs and comments into a sales machine.",
        icon: Instagram,
        color: "text-pink-500",
        features: [
            "Instant DM auto-responses",
            "Comment management and reply automation",
            "Lead capture from Stories interactions",
            "Product inquiries handling",
            "Influencer collaboration filtering",
        ],
    },
    {
        id: "web",
        title: "Web Chatbots",
        description: "An intelligent assistant that lives on your website and engages every visitor.",
        icon: Globe,
        color: "text-blue-500",
        features: [
            "Proactive website visitor engagement",
            "Multi-language support (Arabic/English)",
            "Lead generation and CRM sync",
            "Customer support automation",
            "Product recommendation engine",
        ],
    },
    {
        id: "platforms",
        title: "Web Platforms & Directories",
        description: "Build scalable content directories and platforms like BestofKuwait.com.",
        icon: LayoutTemplate,
        color: "text-purple-500",
        features: [
            "Custom directory architecture",
            "Advanced search and filtering",
            "User-generated content flows",
            "Scalable Next.js performance",
            "SEO-optimized structure",
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        AI Automation & Vibe Coding
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Building the future of software with speed and intuition. From intelligent chatbots to full-stack applications built at the speed of thought.
                    </p>
                </div>

                <div className="grid gap-12 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-muted shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-0 grid md:grid-cols-12 gap-6">
                                    <div className="md:col-span-4 bg-muted/30 p-8 flex flex-col items-center justify-center text-center space-y-4 border-b md:border-b-0 md:border-r border-border">
                                        <div className={`p-4 rounded-full bg-background shadow-sm ${service.color}`}>
                                            <service.icon className="w-12 h-12" />
                                        </div>
                                        <h2 className="text-2xl font-bold">{service.title}</h2>
                                    </div>
                                    <div className="md:col-span-8 p-8 flex flex-col justify-center">
                                        <p className="text-lg text-muted-foreground mb-6">
                                            {service.description}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button asChild className="w-fit">
                                            <Link href="/contact">Get Started with {service.title}</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Book a free consultation and we'll help you find the right automation strategy.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Book Free Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
