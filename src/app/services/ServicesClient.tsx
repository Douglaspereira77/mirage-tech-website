"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Globe, Sparkles, Check, LayoutTemplate, TrendingUp, Search, Brain, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const automationServices = [
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
        description: "Future-proof your digital presence. We optimize for Google Search (SEO) and AI Answer Engines (AEO) like ChatGPT and Gemini.",
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

const consultancyPhases = [
    {
        id: "identify",
        number: "01",
        title: "Identify",
        subtitle: "Decide what's actually worth building.",
        description: "Before anything gets built, we get aligned. We find the 5% of opportunities worth building that will create real, measurable impact.",
        icon: Search,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        items: [
            "Executive Alignment Workshops",
            "Employee & Stakeholder Interviews",
            "ROI Modeling & Business Case Design",
            "AI Readiness & Diagnostics Report"
        ]
    },
    {
        id: "develop",
        number: "02",
        title: "Develop",
        subtitle: "Build it right so it works from day one.",
        description: "This is where strategy becomes reality. We plan and build AI systems that integrate cleanly into your existing tools and workflows.",
        icon: Brain,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        items: [
            "Scoping & Technical Architecture",
            "Data & Systems Integration",
            "Proof of Concept → Production Build",
            "Security, Governance & Reliability Design"
        ]
    },
    {
        id: "adopt",
        number: "03",
        title: "Adopt",
        subtitle: "Make AI part of how work actually gets done.",
        description: "Shipping software isn’t success. Adoption is. We work side by side with your teams to ensure new systems are understood, trusted, and used.",
        icon: Rocket,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        items: [
            "Pilot Launch & Controlled Rollout",
            "AI Enablement Training Sessions",
            "Workflow Integration Support",
            "Performance Tracking & Ongoing Optimization"
        ]
    }
];

export default function ServicesClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        AI Automation & Consultancy
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        From plug-and-play intelligent agents to full-scale strategic AI transformations for the Middle East.
                    </p>
                </div>
            </div>

            {/* Tier 1: Done-For-You Automation */}
            <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-16 flex flex-col items-center">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-3">Done-For-You Automation</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">The tools you need, deployed fast and integrated smoothly.</p>
                </div>

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
                                    <div className="bg-muted/30 p-10 flex flex-col items-center justify-center text-center space-y-4 border-b border-border">
                                        <div className={`p-4 rounded-full bg-background shadow-sm ${service.color}`}>
                                            <service.icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                    </div>
                                    <div className="p-10 flex flex-col items-center text-center">
                                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                                            {service.description}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 mb-10 text-left max-w-2xl mx-auto">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button asChild variant="outline" size="lg" className="w-fit">
                                            <Link href="/contact">Deploy this solution</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tier 2: Strategic AI Consultancy */}
            <div className="bg-muted/30 border-y py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-8 md:mb-12">
                        <span className="text-violet-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Enterprise Focus</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Strategic AI Consultancy</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            We think, plan, and build your AI transformation end-to-end. Stop paying to experiment. Start paying for results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {consultancyPhases.map((phase, i) => (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative flex flex-col h-full"
                            >
                                {/* Connecting line for desktop */}
                                {i < consultancyPhases.length - 1 && (
                                    <div className="hidden md:block absolute top-[4.5rem] left-[60%] w-[80%] h-px bg-border z-0" />
                                )}

                                <Card className="flex-1 relative z-10 border-muted hover:border-primary/50 transition-colors h-full flex flex-col">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-14 h-14 rounded-xl ${phase.bg} flex items-center justify-center`}>
                                                <phase.icon className={`w-7 h-7 ${phase.color}`} />
                                            </div>
                                            <span className="text-4xl font-extrabold text-muted/30 select-none">
                                                {phase.number}
                                            </span>
                                        </div>
                                        <CardTitle className="text-2xl mb-1">{phase.title}</CardTitle>
                                        <p className="font-medium text-primary">{phase.subtitle}</p>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col items-center text-center">
                                        <p className="text-muted-foreground mb-8">
                                            {phase.description}
                                        </p>
                                        <div className="space-y-3 mt-auto pt-6 border-t border-border w-full">
                                            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">What we do:</p>
                                            <div className="space-y-3 max-w-[240px] mx-auto text-left">
                                                {phase.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                        <span className="text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-400 hover:to-violet-500 border-0">
                            <Link href="/ai-consultancy">
                                Explore full details
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* ── FAQs for AEO ────────────────────────────────────── */}
            <section className="bg-background py-12 md:py-16 border-b">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-muted/50 rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">What is Done-For-You AI Automation?</h3>
                            <p className="text-muted-foreground">It means we handle everything. From conversational design and prompt engineering to database integrations and deployment. You don't need to learn how to prompt AI—we deliver the finished, working product.</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Can your automated chatbots connect to my Shopify store?</h3>
                            <p className="text-muted-foreground">Yes. Our WhatsApp and Web chatbots seamlessly integrate with Shopify, WooCommerce, and custom backends, allowing customers to query inventory, track orders, and even checkout directly inside the chat window.</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">What happens if the AI chatbot doesn't know the answer?</h3>
                            <p className="text-muted-foreground">Every Mirage Tech AI chatbot comes equipped with \"Human Handoff\" protocols. If the AI encounters a query it cannot answer with high confidence, it immediately escalates the conversation to a human agent, providing them with the full chat history.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="text-center bg-gradient-to-br from-primary/10 via-background to-muted rounded-3xl p-8 md:p-16 border border-primary/10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Whether you need a quick automation win or a strategic AI roadmap, book a free consultation and we'll point you in the right direction.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="px-8">
                            <Link href="/contact">Book Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
