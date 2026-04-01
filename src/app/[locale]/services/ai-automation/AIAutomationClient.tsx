"use client";

import { motion } from "framer-motion";
import { 
    Rocket, 
    Phone, 
    Star, 
    MessageSquare, 
    Share2, 
    Zap, 
    CheckCircle2, 
    ArrowRight, 
    Clock, 
    Target,
    Bot,
    MinusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function AIAutomationClient() {
    const engines = [
        {
            id: "growth",
            title: "The AI Growth Engine",
            subtitle: "Your 24/7 Sales & Follow-Up Employee",
            desc: "Convert more leads without adding staff. This system responds to new inquiries instantly across WhatsApp, SMS, and Email, qualifies them, and moves them to booked appointments—all while you sleep.",
            icon: Rocket,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            id: "voice",
            title: "AI Voice Agent",
            subtitle: "Your 24/7 AI Receptionist",
            desc: "Missed calls are missed revenue. Our AI Voice Agent answers inbound calls instantly, qualifies callers, and routes high-intent opportunities to your team. No more hold music, just immediate service.",
            icon: Phone,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            id: "social",
            title: "Social Visibility Engine",
            subtitle: "Your AI Social Media Employee",
            desc: "Stay top-of-mind without the daily grind. We train AI on your brand voice to plan, create, and post consistent content across Instagram, LinkedIn, and Facebook automatically.",
            icon: Share2,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            id: "reputation",
            title: "AI Powered Reputation Manager",
            subtitle: "Digital Trust Builder",
            desc: "Automatically capture and respond to reviews. This system sends requests at the perfect moment and uses AI to write brand-aligned responses, turning your reputation into a marketing asset.",
            icon: Star,
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            id: "chat",
            title: "AI Chat Widget",
            subtitle: "Website Conversion Employee",
            desc: "Turn passive traffic into active leads. The AI Chat Widget engages visitors the moment they land, answering technical questions and guiding them toward a booking or inquiry.",
            icon: Bot,
            color: "text-indigo-500",
            bg: "bg-indigo-500/10"
        }
    ];

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
                        Replace Manual Work with <br/>
                        <span className="text-primary italic whitespace-nowrap">Powerful AI Growth Engines</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stop relying on memory, manual follow-up, and overworked staff. We build revenue-protecting AI systems that fit into how your business actually operates.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                            <Link href="/audit">Start Your AI Audit</Link>
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* The Engines Section */}
            <section className="py-24 bg-muted/30 border-y">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold italic">Automation Services Built for Kuwait</h2>
                        <p className="text-muted-foreground text-lg">Every AI system we build is installed for you, trained on your business, and optimized for growth.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {engines.map((engine, i) => (
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
                                        <div className={`w-14 h-14 ${engine.bg} rounded-2xl flex items-center justify-center ${engine.color}`}>
                                            <engine.icon className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">{engine.title}</h3>
                                            <p className="text-sm font-bold text-primary uppercase tracking-widest">{engine.subtitle}</p>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed italic border-l-2 pl-4">
                                            "{engine.desc}"
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Old Way vs New Way Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Shift to Applied AI</h2>
                        <p className="text-muted-foreground">Why Kuwaiti businesses are moving away from manual overhead.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-border border rounded-3xl overflow-hidden shadow-2xl">
                        {/* Old Way */}
                        <div className="bg-background p-10 space-y-8">
                            <div className="flex items-center gap-3 text-red-500">
                                <MinusCircle className="w-8 h-8" />
                                <h3 className="text-2xl font-bold">The Old Way</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Manual follow-up 48+ hours later",
                                    "Missed calls during lunch & holidays",
                                    "Social media posting is 'extra work'",
                                    "Overwhelmed staff burning out",
                                    "Review requests are handled randomly"
                                ].map((item, i) => (
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
                                <h3 className="text-2xl font-bold">The Mirage Way</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Instant response (under 2 minutes)",
                                    "24/7 Voice & Chat availability",
                                    "Consistent posting in brand voice",
                                    "Focus team on high-value strategy",
                                    "Systematic reputation management"
                                ].map((item, i) => (
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
                    <h2 className="text-3xl font-bold">Systems Before Software</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                        "At Mirage Tech, we don't believe in selling tools and walking away. Software alone doesn't solve problems, systems do. Our goal is to remove friction from your daily operations so you can focus on scale."
                    </p>
                    <div className="pt-8 grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-4xl font-black text-primary">100%</p>
                            <p className="text-sm font-bold uppercase tracking-widest mt-2">Lead Capture</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-primary">0</p>
                            <p className="text-sm font-bold uppercase tracking-widest mt-2">Missed Opportunities</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-primary">24/7</p>
                            <p className="text-sm font-bold uppercase tracking-widest mt-2">Active Operations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 md:px-6 py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold italic underline decoration-primary/30 text-center">Stop Relying on Memory.</h2>
                    <p className="text-xl text-muted-foreground md:whitespace-nowrap">Secure your growth with a revenue-protecting AI receptionist & sales team.</p>
                    <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                        <Link href="/contact">
                            Audit Your Automation Gaps
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
