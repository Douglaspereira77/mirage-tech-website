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
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Our Work
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Real projects. Real results. Built with AI-powered development.
                    </p>
                </div>

                {/* Case Study: BestofKuwait.com */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Case Study</span>
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-64 lg:h-full min-h-[400px] w-full bg-muted">
                            <Image
                                src="/bestofkuwait.png"
                                alt="Best of Kuwait Homepage"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 lg:p-12 space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <Badge>Live</Badge>
                                <Badge variant="outline">Vibe Coding</Badge>
                                <Badge variant="outline">Next.js</Badge>
                                <Badge variant="outline">Supabase</Badge>
                            </div>
                            <h3 className="text-3xl font-bold">BestofKuwait.com</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                A full-scale curated directory platform for Kuwait — featuring restaurants, fitness, schools, and more. Built from scratch using our <strong>Vibe Coding</strong> methodology in just <strong>a few weeks</strong>, proving that AI-accelerated development delivers production-grade applications at unprecedented speed.
                            </p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2">✨ Full SEO & AEO optimization with JSON-LD schema</li>
                                <li className="flex items-center gap-2">✨ Advanced search, filtering, and curated scoring</li>
                                <li className="flex items-center gap-2">✨ Responsive modern design with dark mode</li>
                                <li className="flex items-center gap-2">✨ Admin CMS for content management</li>
                            </ul>
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="https://bestofkuwait.com" target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Capabilities Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-8">Other Capabilities</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                        <MessageCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <CardTitle>WhatsApp AI Chatbots</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
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
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                        <Bot className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <CardTitle>Internal Automation Systems</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Built custom AI-powered internal tools for workflow automation, including data extraction, report generation, and notification systems that significantly reduced manual workload.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
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
