"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Globe, Sparkles, Check, LayoutTemplate, TrendingUp, Search, Brain, Rocket, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const automationServices = [
    {
        id: "reviews-engine",
        title: "AI Reputation & Local SEO Dominance",
        problem: "Are you losing local Kuwaiti leads to competitors with more stars? Every day you stay at 3.5 stars is another day your revenue leaks to others in Salmiya and Sharq.",
        solution: "A 100% automated system that generates 5-star reviews on autopilot and uses AEO (Answer Engine Optimization) to ensure your business is the #1 answer for AI search queries.",
        outcome: "Dominant AI SEO ranking in Kuwait City and absolute trust for your clinic, salon, or restaurant.",
        icon: Sparkles,
        color: "text-amber-500",
        features: [
            "AI-Driven Local SEO",
            "AEO (Answer Engine Optimization)",
            "Google Business Profile Sync",
        ],
    },
    {
        id: "growth-engine",
        title: "AI Lead & Growth Engine",
        problem: "30% of your Kuwaiti WhatsApp leads are dying in your inbox due to slow human replies. If you don't answer in 5 minutes, that customer is gone forever.",
        solution: "Native bilingual AI Agents that live on your WhatsApp 24/7 to answer questions, qualify leads, and book appointments while you sleep.",
        outcome: "2x increase in booked appointments across Kuwait without hiring a single extra staff member.",
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
        problem: "Missed calls are missed revenue. Your staff is too busy to answer every inquiry, leaving thousands of KWD on the table every month in missed bookings.",
        solution: "Intelligent AI Voice Agents that handle calls, manage inquiries, and send instant 'Missed Call Text-Backs' on WhatsApp to keep the conversation alive.",
        outcome: "Zero missed opportunities and a 30%+ increase in staff productivity for local Kuwaiti teams.",
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
        problem: "You've already paid for your Kuwaiti leads—stop letting them rot. Old databases and 'no-shows' are dead capital sitting in your phone right now.",
        solution: "Automated AI Reactivation systems that reach out to your old leads and database to spark new interest and book fresh sales instantly.",
        outcome: "Recovered revenue from the Kuwaiti leads you've already spent your marketing budget on.",
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
        week: "Day 1",
        title: "Audit & Strategy",
        description: "We audit your current visibility and set up your core AI reputation engine.",
    },
    {
        week: "Days 2-3",
        title: "Launch & Automate",
        description: "Deployment of AI Chat, WhatsApp triage, and automated follow-up systems.",
    },
    {
        week: "Ongoing",
        title: "Optimize & Grow",
        description: "Weekly performance reporting and AI prompt tuning for maximum conversion.",
    },
];

export default function ServicesClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        AI SEO, AEO & Growth Engines for Kuwait Businesses
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Stop missing leads. Start dominating local search and AI-driven Answer Engines (AEO) with high-performance systems that ruthlessly increase your revenue.
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

            {/* Timeline: How it works in 7 days */}
            <div className="bg-muted/30 border-y py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">How it works in 7 days</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto">Our rapid deployment roadmap to turn AI into a revenue driver for your business.</p>
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
                            <p className="text-muted-foreground">Most businesses see a spike in Google reviews and lead response speed within the first 48 hours of deployment.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Does the AI speak Kuwaiti Arabic?</h3>
                            <p className="text-muted-foreground">Yes. Our models are specifically tuned for Gulf and Kuwaiti dialects to ensure your brand sounds natural and professional, not robotic.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">What is AEO?</h3>
                            <p className="text-muted-foreground">Answer Engine Optimization (AEO) is the next evolution of SEO. It ensures your business is the top result when customers ask AI tools like ChatGPT, Perplexity, or Gemini for local recommendations in Kuwait.</p>
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
