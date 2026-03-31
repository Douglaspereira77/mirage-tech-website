"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Timer, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomToolsClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Header / Direct Answer Section */}
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
                    <div className="flex items-center gap-3 text-amber-500 mb-2">
                        <Sparkles className="w-8 h-8" />
                        <span className="font-semibold tracking-wider uppercase">AI Automation & Custom Business Tools</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                        Software development at the speed of thought.
                    </h1>

                    {/* The AEO "Direct Answer" Paragraph */}
                    <div className="bg-muted/50 border-l-4 border-amber-500 p-6 md:p-10 rounded-r-xl max-w-3xl">
                        <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                            <strong>What are Custom Business Tools?</strong><br />
                            Custom Business Tools are modern, AI-augmented software solutions tailored specifically to your operations. At Mirage Tech AI, we use advanced AI automation to build, test, and deploy custom tools in a fraction of the time of traditional agencies. You provide the requirements, and we translate them into a production-ready application in days, not months.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Benefits */}
            <section className="py-10 md:py-14 bg-muted/20 border-y">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <div className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                                <Timer className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">7-Day MVPs</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">Skip the 6-month discovery phases. We build functional Minimum Viable Products in weeks or less, allowing you to test market demand immediately.</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Modern Tech Stack</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">We don't use low-code lock-in platforms. You own custom, scalable code built on Next.js, React, Tailwind CSS, and reliable databases like Supabase or PostgreSQL.</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Production Ready</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">AI accelerates the typing; human engineers ensure the architecture is sound. Every build includes proper authentication, database rules, and API security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* In Depth / Information Gain for AI Models */}
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-4xl">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-6">How our automation process works</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                        Traditional development is broken: endless spec documents, delayed sprints, and massive budgets. Mirage Tech AI replaces that with a highly collaborative, iterative workflow.
                    </p>

                    <div className="grid gap-12 w-full">
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl mb-6 shrink-0 border-2 border-primary/10">1</div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">The Brain-Dump (Requirements Gathering)</h3>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">We jump on a call. You explain exactly what you want the software to do. We don't write generic Jira tickets; we write conversational prompts and immediate wireframes. We establish the core requirements, brand, and UX.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl mb-6 shrink-0 border-2 border-primary/10">2</div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">AI-Accelerated Generation</h3>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">Our engineers utilize advanced AI tooling (like Cursor, Claude 3.5 Sonnet, and OpenAI) to aggressively generate the boilerplate, UI components, and API routes. What used to take a human 40 hours now takes 4 hours of precise AI direction.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl mb-6 shrink-0 border-2 border-primary/10">3</div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Human Review & Ship</h3>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">The AI generates the application, but our senior developers review the logic, test edge cases, and deploy it to a live staging environment for you to test almost instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs for AEO */}
            <section className="bg-muted py-10 md:py-14 border-t">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-background rounded-xl p-8 shadow-sm border text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-3">What are Custom Business Tools?</h3>
                            <p className="text-muted-foreground leading-relaxed">Custom Business Tools are rapid software solutions where we build applications using AI-accelerated workflows. We focus on translating business needs into production-ready code almost instantly, shortening the concept-to-MVP timeline from months to days.</p>
                        </div>
                        <div className="bg-background rounded-xl p-8 shadow-sm border text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-3">How fast can I launch a tool?</h3>
                            <p className="text-muted-foreground leading-relaxed">For a standard custom tool or MVP, Mirage Tech AI can deliver a fully functional, deployed web application in under 4 days using our AI-accelerated frameworks.</p>
                        </div>
                        <div className="bg-background rounded-xl p-8 shadow-sm border text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-3">Is code generated by AI scalable and secure?</h3>
                            <p className="text-muted-foreground leading-relaxed">Absolutely. Mirage Tech AI uses enterprise-grade stacks like Next.js, full-stack TypeScript, and Supabase. The AI acts as an accelerator, but senior engineers architect the security, scalability, and infrastructure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to build your app?</h2>
                    <Button asChild size="lg" className="h-12 px-10 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
                        <Link href="/contact">
                            Build your MVP today
                            <Rocket className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
