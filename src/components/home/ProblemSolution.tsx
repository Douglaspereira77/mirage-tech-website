"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemSolution() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Your Competitors Are Already Using AI
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Manual processes are costing you time, money, and customers. AI changes the game.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background rounded-2xl p-8 shadow-sm border border-destructive/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <XCircle className="w-24 h-24 text-destructive" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-6 text-destructive flex items-center gap-2">
                            <XCircle className="w-6 h-6" />
                            The Old Way
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-destructive mt-1">✕</span>
                                <span className="text-muted-foreground">Manual replies to hundreds of WhatsApp/Instagram messages</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-destructive mt-1">✕</span>
                                <span className="text-muted-foreground">6-month software projects that launch over budget</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-destructive mt-1">✕</span>
                                <span className="text-muted-foreground">No AI strategy — watching competitors automate while you wait</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-destructive mt-1">✕</span>
                                <span className="text-muted-foreground">Hiring expensive full-time staff for repetitive tasks</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background rounded-2xl p-8 shadow-lg border border-chart-2/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle className="w-24 h-24 text-chart-2" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-6 text-chart-2 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6" />
                            The Mirage Way
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-chart-2 mt-1">✓</span>
                                <span className="text-foreground">AI chatbots that handle customers 24/7 in Arabic & English</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-chart-2 mt-1">✓</span>
                                <span className="text-foreground">Custom web apps shipped in under 7 days with Vibe Coding</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-chart-2 mt-1">✓</span>
                                <span className="text-foreground">Clear AI roadmaps that turn strategy into working systems</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-chart-2 mt-1">✓</span>
                                <span className="text-foreground">Fraction of the cost — done-for-you, no hiring needed</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
