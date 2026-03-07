"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Brain,
    Cpu,
    Lightbulb,
    CalendarCheck,
    FileText,
    CheckCircle,
    ArrowRight,
    Search,
    Settings,
    Rocket,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
    {
        icon: Settings,
        title: "Business‑Process Automation",
        description:
            "We map your existing workflows, identify bottlenecks, and deploy AI agents that eliminate repetitive work — cutting costs and freeing your team for high‑value tasks.",
        color: "text-teal-400",
        bg: "bg-teal-400/10",
    },
    {
        icon: Lightbulb,
        title: "AI‑Driven Product Strategy",
        description:
            "From ideation to roadmap, we help you evaluate which AI capabilities will move the needle for your product and customers — without the hype.",
        color: "text-violet-400",
        bg: "bg-violet-400/10",
    },
    {
        icon: Cpu,
        title: "Custom Model Training & Deployment",
        description:
            "Need a model trained on your own data? We design, fine‑tune, and deploy custom LLMs, vision models, and classifiers — on‑prem or cloud.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
];

const whyUs = [
    { stat: "5+", label: "Years Track Record", icon: CheckCircle },
    { stat: "100%", label: "Client Satisfaction", icon: CheckCircle },
    { stat: "0 BS", label: "Transparent Pricing", icon: CheckCircle },
];

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Identify",
        description:
            "We run a deep‑dive audit of your processes, data assets, and competitive landscape to surface the highest‑impact AI opportunities.",
    },
    {
        number: "02",
        icon: Brain,
        title: "Develop",
        description:
            "Our team architects a tailored AI roadmap — selecting the right models, integrations, and timelines for your business.",
    },
    {
        number: "03",
        icon: Rocket,
        title: "Adopt",
        description:
            "We build, test, and launch your AI solution, then stay by your side for ongoing optimisation and support.",
    },
];

/* ─── Animation helpers ─────────────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as Easing },
    }),
};

/* ─── Component ─────────────────────────────────────────────── */

export default function AIConsultancyClient() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* ── Hero ────────────────────────────────────────────── */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                {/* background image / gradient */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/ai-consultancy-hero.jpg"
                        alt="AI Consultancy hero"
                        fill
                        className="object-cover"
                        priority
                        onError={(e) => {
                            // Fallback: hide broken image, gradient underneath shows
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />
                    {/* overlay gradient — also acts as placeholder when image missing */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f1f38]/90 to-[#1a0533]/80" />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="max-w-4xl mx-auto text-center flex flex-col items-center"
                    >
                        <span className="inline-block text-teal-400 font-semibold tracking-widest text-sm uppercase mb-4">
                            AI Consultancy
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Transform Your Business{" "}
                            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                                With Intelligent AI
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            We help companies in Kuwait and the Middle East harness the power
                            of AI — from strategy and process automation to custom model
                            deployment. Practical. Transparent. Results‑driven.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-400 hover:to-violet-500 text-white border-0"
                            >
                                <Link href="/contact">
                                    <CalendarCheck className="w-5 h-5 mr-2" />
                                    Schedule a Call
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-slate-500 text-slate-200 hover:border-teal-400 hover:text-teal-400 bg-white/5 backdrop-blur"
                            >
                                <a href="/ai-consultancy-brochure.pdf" download>
                                    <FileText className="w-5 h-5 mr-2" />
                                    Download Brochure
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* decorative glow blobs */}
                <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-3xl" />
            </section>

            {/* ── What We Do ──────────────────────────────────────── */}
            <section className="py-12 md:py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                            What We Do
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Three core disciplines. One seamless AI partnership.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i + 1}
                            >
                                <Card className="h-full hover:shadow-xl transition-shadow border-muted group flex flex-col items-center text-center">
                                    <CardHeader className="flex flex-col items-center text-center w-full">
                                        <div
                                            className={`w-14 h-14 rounded-2xl ${svc.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <svc.icon className={`w-7 h-7 ${svc.color}`} />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-center w-full">{svc.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col items-center text-center w-full">
                                        <p className="text-muted-foreground max-w-[280px] mx-auto text-center">{svc.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ───────────────────────────────────── */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We don&#39;t sell buzzwords. We deliver measurable outcomes.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {whyUs.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i + 1}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent mb-2">
                                    {item.stat}
                                </div>
                                <p className="text-muted-foreground font-medium">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ────────────────────────────────────── */}
            <section className="py-12 md:py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A clear, three‑step path from conversation to live AI solution.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i + 1}
                                className="relative"
                            >
                                {/* connector line (hidden on last item) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden sm:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-muted to-transparent -translate-x-1/2 z-0" />
                                )}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="flex flex-col items-center gap-3 mb-4">
                                        <span className="text-5xl font-black text-muted/30 select-none leading-none">
                                            {step.number}
                                        </span>
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <step.icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm max-w-[250px]">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQs for AEO ────────────────────────────────────── */}
            <section className="bg-muted/50 py-12 md:py-16">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">What does an AI consultant do?</h3>
                            <p className="text-muted-foreground">An AI consultant evaluates your current business workflows, tech stack, and data architecture to build a strategic roadmap for AI integration. At Mirage Tech AI, we don't just advise; we actively build and deploy the automated systems we recommend.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">How much does AI consultancy cost in the Middle East?</h3>
                            <p className="text-muted-foreground">Costs vary based on the scope, from an initial $2,000 alignment workshop to $50,000+ for enterprise-wide custom model training and deployment. We offer transparent pricing with defined ROI models before any build phases begin.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Is generative AI safe for enterprise data?</h3>
                            <p className="text-muted-foreground">Yes, when deployed correctly. Mirage Tech AI ensures your data is secure by utilizing private, enterprise-tier LLMs (like Azure OpenAI) or deploying self-hosted open-source models so your proprietary data never trains public AI platforms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ──────────────────────────────────────── */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-teal-900/50 via-[#0f1f38] to-violet-900/50 border-y border-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                                Ready to transform your business?
                            </h2>
                            <p className="text-slate-300 text-lg max-w-xl">
                                Book a free 30‑minute strategy call and we&#39;ll show you exactly
                                where AI can make the biggest difference for your company.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-shrink-0">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-400 hover:to-violet-500 text-white border-0 text-base px-8"
                            >
                                <Link href="/contact">
                                    Schedule a Call
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-slate-500 text-slate-200 hover:border-teal-400 hover:text-teal-400 bg-white/5"
                            >
                                <a href="/ai-consultancy-brochure.pdf" download>
                                    <FileText className="w-5 h-5 mr-2" />
                                    Download Brochure
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
