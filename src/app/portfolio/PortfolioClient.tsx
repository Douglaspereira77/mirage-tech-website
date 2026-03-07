"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Our Work
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Real projects. Real results. Built with AI-powered development.
                    </p>
                </div>

                {/* Case Study: BestofKuwait.com */}
                <div className="mb-12 md:mb-16 flex flex-col items-center">
                    <div className="flex justify-center w-full mb-8">
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                            Case Study
                        </span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow text-center w-full max-w-5xl"
                    >
                        <div className="relative h-[300px] md:h-[500px] w-full bg-muted/30 p-4 md:p-8">
                            <Image
                                src="/bok-showcase.png"
                                alt="Best of Kuwait Restaurant Directory"
                                fill
                                className="object-contain hover:scale-[1.02] transition-transform duration-700 p-4"
                                priority
                            />
                        </div>
                        <div className="p-8 lg:p-12 space-y-8 flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-2">
                                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Live</Badge>
                                <Badge variant="outline" className="border-primary/20 bg-primary/5">Custom Business Tools</Badge>
                                <Badge variant="outline">Next.js</Badge>
                                <Badge variant="outline">Supabase</Badge>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">BestofKuwait.com</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                                    A full-scale curated directory platform for Kuwait — featuring restaurants, fitness, schools, and more. Built from scratch using our <strong>AI Automation & Custom Business Tools</strong> methodology in just <strong>a few weeks</strong>, proving that AI-accelerated development delivers production-grade applications at unprecedented speed.
                                </p>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/80 max-w-2xl w-full text-left">
                                <li className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-border transition-colors">
                                    <span className="shrink-0 text-primary text-lg">✨</span>
                                    <span>Full SEO & AEO optimization with JSON-LD schema</span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-border transition-colors">
                                    <span className="shrink-0 text-primary text-lg">✨</span>
                                    <span>Advanced search, filtering, and curated scoring</span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-border transition-colors">
                                    <span className="shrink-0 text-primary text-lg">✨</span>
                                    <span>Responsive modern design with dark mode</span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-border transition-colors">
                                    <span className="shrink-0 text-primary text-lg">✨</span>
                                    <span>Admin CMS for content management</span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button asChild size="lg" className="rounded-full">
                                    <Link href="https://bestofkuwait.com" target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Capabilities Section */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-primary/70">Other Capabilities</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col items-center text-center border-muted hover:shadow-xl transition-shadow w-full">
                                <CardHeader className="flex flex-col items-center text-center w-full space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-2 mx-auto">
                                        <MessageCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-center w-full">WhatsApp AI Chatbots</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center text-center w-full">
                                    <p className="text-muted-foreground max-w-[320px] mx-auto text-center">
                                        Designed, built, and deployed intelligent WhatsApp chatbots for educational institutions — automating parent inquiries, appointment scheduling, and multilingual FAQ handling for hundreds of users.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center border-muted hover:shadow-xl transition-shadow w-full">
                                <CardHeader className="flex flex-col items-center text-center w-full space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-2 mx-auto">
                                        <Bot className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-center w-full">Internal Automation Systems</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center text-center w-full">
                                    <p className="text-muted-foreground max-w-[320px] mx-auto text-center">
                                        Built custom AI-powered internal tools for workflow automation, including data extraction, report generation, and notification systems that significantly reduced manual workload.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="bg-muted/50 rounded-3xl p-8 md:p-16 border max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Want to be our next case study?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Let's build something remarkable together.
                        </p>
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">
                                Start Your Project
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
