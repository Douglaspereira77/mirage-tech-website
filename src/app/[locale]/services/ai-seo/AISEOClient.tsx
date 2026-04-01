"use client";

import { motion } from "framer-motion";
import { Search, Brain, Zap, ArrowRight, Gauge, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AISEOClient() {
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

            {/* In-Depth Strategy Section */}
            <div className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">How We Make Sure You Get the Right Answer, No Matter How You Search</h2>
                            <p className="text-xl text-muted-foreground">
                                At gomiragetech.com, we want to make finding technical solutions simple. We use two strategies, <strong>SEO</strong> and <strong>AEO</strong>, to ensure you get accurate answers.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* SEO Section */}
                            <div className="space-y-6">
                                <div className="relative rounded-2xl overflow-hidden border shadow-xl bg-white mb-8">
                                    <NextImage 
                                        src="/seo.jpg" 
                                        alt="SEO: Optimizing for Web Links" 
                                        width={800} 
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-blue-600">What is SEO? <span className="text-muted-foreground text-lg block">(Finding the Best Link for Your Search)</span></h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Think of <strong>SEO</strong> as the foundation of our digital reputation. It’s how we optimize our entire website to ensure traditional search engines (like Google) recognize us as a leading, trustworthy technical authority.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                            <p className="text-sm"><strong>What it does for you:</strong> We focus on making a fast, technically sound website filled with deep, expert-level content. This helps us build "Authority" and ensure we show up first in "Organic Rankings."</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                            <p className="text-sm"><strong>The Bottom Line:</strong> If you search for a generic technology term, SEO helps gomiragetech.com appear at the top, confirming you have found an established expert.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* AEO Section */}
                            <div className="space-y-6">
                                <div className="relative rounded-2xl overflow-hidden border shadow-2xl bg-white ring-4 ring-primary/20 mb-8">
                                    <NextImage 
                                        src="/aeo.jpg" 
                                        alt="AEO: Optimizing for Direct Answers" 
                                        width={800} 
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-primary">What is AEO? <span className="text-muted-foreground text-lg block">(Getting a Direct Answer, Instantly)</span></h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Now, think of <strong>AEO</strong> as our modern, conversational way of answering. It's not about being a link in a list; it's about being <em>the definitive cited answer</em> that AI-powered "answer engines" deliver to you instantly.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                            <p className="text-sm"><strong>What it does for you:</strong> We structure our knowledge into clear "Q&A" formats and use "Schema Markup." By focusing on your true "Intent," we make it effortless for AI to find and cite our exact solution.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                            <p className="text-sm"><strong>The Bottom Line:</strong> If you ask your smart speaker or AI a specific technical question, AEO ensures gomiragetech.com provides that <strong>cited answer</strong> as the trusted source.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
