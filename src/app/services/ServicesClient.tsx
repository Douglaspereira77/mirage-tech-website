"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Globe, Sparkles, Check, LayoutTemplate, TrendingUp, Search, Brain, Rocket, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const automationServices = [
    {
        id: "reviews-engine",
        title: "AI Reputation & Review Systems",
        problem: "Local businesses in Kuwait often miss leads because of low review counts or slow responses to feedback.",
        solution: "A fully hands-off system that generates 5-star reviews and uses AI to respond to every customer comment instantly in Arabic and English.",
        outcome: "Dominant local search ranking and higher trust for clinics, salons, and restaurants.",
        icon: Sparkles,
        color: "text-amber-500",
        features: [
            "Auto-Review Generation",
            "Bilingual Sentiment Analysis",
            "Google Business Profile Sync",
        ],
    },
    {
        id: "growth-engine",
        title: "AI Lead & Growth Engine",
        problem: "Kuwaiti SMBs lose up to 30% of their WhatsApp and web leads because of delayed human replies.",
        solution: "Native bilingual AI agents that live on your WhatsApp and website to answer questions, qualify leads, and book appointments 24/7.",
        outcome: "2x increase in booked appointments without hiring more staff.",
        icon: MessageCircle,
        color: "text-green-500",
        features: [
            "Bilingual WhatsApp Triage",
            "Instant Web Lead Capture",
            "24/7 AI Sales Qualification",
        ],
    },
    {
        id: "voice-agent",
        title: "AI Voice & Call Handling",
        problem: "Missed calls are missed revenue. Staff are often too busy to answer every inquiry during peak hours.",
        solution: "Intelligent AI voice agents that answer calls, handle basic inquiries, and send instant 'Missed Call Text-Backs' on WhatsApp.",
        outcome: "Zero missed opportunities and 30%+ increase in staff productivity.",
        icon: Brain,
        color: "text-blue-500",
        features: [
            "AI Voice Appointment Booking",
            "Missed Call Text-Back (WhatsApp)",
            "Automated Inquiry Routing",
        ],
    },
    {
        id: "revenue-recovery",
        title: "AI Revenue Recovery Engine",
        problem: "Old leads and 'no-shows' are dead capital sitting in your database or phone.",
        solution: "Automated AI systems that reach out to missed calls or old databases to reactivate interest and book new sales.",
        outcome: "Recovered revenue from leads you already paid for.",
        icon: TrendingUp,
        color: "text-violet-500",
        features: [
            "No-Show Prevention Flows",
            "Database Reactivation Campaigns",
            "Smart Lead Nurturing",
        ],
    },
];

const timelineSteps = [
    {
        week: "Week 1",
        title: "Audit & Strategy",
        description: "We audit your current visibility and set up your core AI reputation engine.",
    },
    {
        week: "Weeks 2-4",
        title: "Launch & Automate",
        description: "Deployment of AI Chat, WhatsApp triage, and automated follow-up systems.",
    },
    {
        week: "Ongoing",
        title: "Optimize & Grow",
        description: "Monthly performance reporting and AI prompt tuning for maximum conversion.",
    },
];

export default function ServicesClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        AI Visibility & Growth Engines for Kuwait Businesses
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Stop missing leads. Start dominating local search and WhatsApp with high-performance AI systems that ruthlessly increase your revenue.
                    </p>
                </div>
            </div>

            {/* Core Services */}
            <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-16 flex flex-col items-center">
                <div className="grid gap-12 max-w-4xl w-full">
                    {automationServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-muted shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-0 flex flex-col">
                                    <div className="bg-muted/30 p-8 flex flex-col items-center justify-center text-center space-y-4 border-b border-border">
                                        <div className={`p-4 rounded-full bg-background shadow-sm ${service.color}`}>
                                            <service.icon className="w-10 h-10" />
                                        </div>
                                        <h2 className="text-3xl font-bold">{service.title}</h2>
                                    </div>
                                    <div className="p-8 flex flex-col space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-red-500">The Problem</span>
                                                    <p className="text-muted-foreground">{service.problem}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">The AI Solution</span>
                                                    <p className="font-medium text-foreground">{service.solution}</p>
                                                </div>
                                            </div>
                                            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                                                <span className="text-xs font-bold uppercase tracking-wider text-primary">Business Outcome</span>
                                                <p className="text-xl font-bold text-foreground mt-2">{service.outcome}</p>
                                                <div className="mt-6 space-y-2">
                                                    {service.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <Check className="w-4 h-4 text-emerald-500" />
                                                            <span className="text-sm font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center pt-4">
                                            <Button asChild variant="default" size="lg" className="rounded-full px-8">
                                                <Link href="/contact">Book an AI Audit</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Timeline: How it works in 30 days */}
            <div className="bg-muted/30 border-y py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">How it works in 30 days</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto">Our proven deployment roadmap to turn AI into a revenue driver for your business.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                        <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-0.5 bg-border z-0" />
                        {timelineSteps.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                                    {i + 1}
                                </div>
                                <div className="space-y-2">
                                    <span className="text-primary font-bold">{step.week}</span>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground max-w-[240px]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Who It's For */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Designed for Kuwaiti Businesses</h2>
                    <p className="text-muted-foreground">Specialized AI systems for local industries that demand excellence.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {['Medical Clinics', 'Beauty Salons', 'Restaurants', 'Private Schools'].map((industry) => (
                        <div key={industry} className="p-8 border rounded-2xl text-center font-bold bg-background shadow-sm hover:shadow-md transition-shadow">
                            {industry}
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <section className="bg-muted/30 py-12 md:py-16 border-y">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">How fast can we see results?</h3>
                            <p className="text-muted-foreground">Most businesses see a spike in Google reviews and lead response speed within the first 14 days of deployment.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Does the AI speak Kuwaiti Arabic?</h3>
                            <p className="text-muted-foreground">Yes. Our models are specifically tuned for Gulf and Kuwaiti dialects to ensure your brand sounds natural and professional, not robotic.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Is it compatible with my current WhatsApp?</h3>
                            <p className="text-muted-foreground">Yes. We integrate with the official WhatsApp Business API so you keep your number while adding 24/7 intelligence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
                <Button asChild size="lg" className="px-8 rounded-full h-14 text-lg">
                    <Link href="/contact">Book your Free AI Visibility Audit</Link>
                </Button>
            </div>
        </div>
    );
}
