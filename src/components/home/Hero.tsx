"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-chart-2 bg-chart-2/10"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>AI Automation for the Middle East</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-chart-2"
                    >
                        Intelligent Automation for the Middle East
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-[42rem] leading-relaxed"
                    >
                        Help your business communicate better with customers through AI-powered WhatsApp, Instagram, and web chatbots. Available 24/7, in Arabic and English.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button asChild size="lg" className="h-12 px-8 text-base rounded-full">
                            <Link href="/contact">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-full">
                            <Link href="/services">See Our Services</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src="/hero-bg.png"
                    alt="AI Network Background"
                    fill
                    className="object-cover opacity-20 dark:opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90 z-0" />
            </div>
        </section>
    );
}
