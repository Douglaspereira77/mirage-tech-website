"use client";

import { motion } from "framer-motion";
import { Search, Globe, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function BestOfKuwaitPartnership() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10"
                    >
                        Strategic Partnership
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        BestOfKuwait <span className="text-muted-foreground">x</span> Mirage Tech AI
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl"
                    >
                        Powering Kuwait&apos;s premium business listings with the region&apos;s most advanced lead capture and visibility systems.
                    </motion.p>
                </div>
            </div>

            {/* Synergy Section */}
            <div className="bg-muted/30 border-y py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Why we partnered</h2>
                            <p className="text-lg text-muted-foreground">
                                High-quality listings deserve high-quality conversion. We select featured businesses on BestOfKuwait and upgrade them with AI systems that turn traffic into customers.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Increased visibility on Google and AI search",
                                    "Automated 24/7 bilingual lead capture",
                                    "Verified review generation engine",
                                    "Seamless WhatsApp appointment booking"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Simplified Diagram */}
                        <div className="relative p-8 bg-background border rounded-3xl shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                            <div className="flex flex-col items-center space-y-8 relative z-10">
                                <div className="flex flex-col items-center space-y-2 p-4 border bg-muted/30 rounded-2xl w-full">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <Search className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-bold">Google / AI Search</span>
                                </div>
                                <div className="w-0.5 h-8 bg-border" />
                                <div className="flex flex-col items-center space-y-2 p-4 border bg-primary text-primary-foreground rounded-2xl w-full shadow-lg">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-wider">BestOfKuwait Page</span>
                                </div>
                                <div className="w-0.5 h-8 bg-border" />
                                <div className="flex flex-col items-center space-y-2 p-4 border border-emerald-500/50 bg-emerald-500/10 text-emerald-700 rounded-2xl w-full">
                                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-bold">Mirage AI Systems</span>
                                    <span className="text-[10px] uppercase font-bold text-emerald-600/70">Engines • Voice • Automations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 md:px-6 py-24 text-center">
                <h2 className="text-3xl font-bold mb-6">Are you a BestOfKuwait listing?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Check if your business qualifies for a Mirage Tech AI upgrade to double your conversion rate from your directory listing.
                </p>
                <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                    <Link href="/contact">Book a Synergy Audit</Link>
                </Button>
            </div>
        </div>
    );
}
