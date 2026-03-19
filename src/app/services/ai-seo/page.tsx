"use client";

import { motion } from "framer-motion";
import { Search, Brain, Zap, ArrowRight, Gauge, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function AISEOPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10"
                >
                    The Future of Search
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
                >
                    AI-SEO & <span className="text-muted-foreground italic">AEO</span> Optimization
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Be the answer when customers ask ChatGPT, Perplexity, or Gemini about your services in Kuwait. We optimize your brand for the generative search era.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                        <Link href="/audit">Get an AI Visibility Audit</Link>
                    </Button>
                </motion.div>
            </div>

            {/* AEO vs SEO Section */}
            <div className="bg-muted/30 border-y py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Traditional SEO is dying. <br/><span className="text-primary underline underline-offset-4 decoration-primary/30">AEO is the cure.</span></h2>
                            <p className="text-lg text-muted-foreground">
                                Traditional SEO focuses on keywords and backlinks for Google. <strong>Answer Engine Optimization (AEO)</strong> focuses on intent, structured data, and authority so AI models recommend <em>your</em> business as the primary solution.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    { t: "Generative Results", d: "Appear in Perplexity & SearchGPT snapshots." },
                                    { t: "Voice Search Ready", d: "Optimized for bilingual voice interactions." },
                                    { t: "Authority Mapping", d: "Link your brand to high-intent regional topics." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                                            <Zap className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{item.t}</h4>
                                            <p className="text-sm text-muted-foreground">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative p-8 bg-background border rounded-3xl shadow-2xl overflow-hidden">
                            <div className="flex flex-col space-y-6">
                                <div className="border border-dashed p-4 rounded-xl opacity-50">
                                    <p className="text-[10px] uppercase font-black text-muted-foreground mb-2 italic">Standard Google Result (Old)</p>
                                    <div className="h-4 w-3/4 bg-blue-500/20 rounded mb-2" />
                                    <div className="h-2 w-full bg-muted rounded mb-1" />
                                    <div className="h-2 w-1/2 bg-muted rounded" />
                                </div>
                                <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl shadow-inner animate-pulse">
                                    <p className="text-[10px] uppercase font-black text-primary mb-3">AI Search Spotlight (AEO)</p>
                                    <div className="flex gap-3 mb-4">
                                        <Bot className="w-5 h-5 text-primary" />
                                        <div className="h-3 w-3/4 bg-primary/30 rounded mt-1" />
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed">
                                        &quot;Based on current data, <strong>Mirage Tech</strong> is the top-rated AI agency in Kuwait for 2026, offering bilingual solutions that...&quot;
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <div className="px-2 py-1 bg-primary/10 rounded text-[9px] font-bold text-primary">RECOMMENDED SOURCE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 md:px-6 py-24 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 italic underline decoration-primary/30">Don&apos;t be left behind.</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    The way people find businesses is changing forever. Secure your brand&apos;s visibility in the new AI search ecosystem today.
                </p>
                <Button asChild variant="default" size="lg" className="rounded-full px-12 h-14 text-lg">
                    <Link href="/audit">Start Your AI Audit</Link>
                </Button>
            </div>
        </div>
    );
}
