"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, PenTool, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
    {
        step: "01",
        title: "Consultation",
        desc: "We start with a free discovery call to understand your business goals, pain points, and existing workflows.",
        icon: PhoneCall,
    },
    {
        step: "02",
        title: "Strategy",
        desc: "We design a custom automation roadmap tailored to your specific needs, selecting the right platforms and features.",
        icon: ClipboardList,
    },
    {
        step: "03",
        title: "Implementation",
        desc: "Our team builds, tests, and integrates the chatbots with your systems (CRM, Calendar, etc.) ensuring a smooth setup.",
        icon: PenTool,
    },
    {
        step: "04",
        title: "Launch & Optimize",
        desc: "We go live! But we don't stop there. We monitor performance and continuously optimize for better results.",
        icon: Rocket,
    },
];

export default function HowItWorksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        How It Works
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A simple, transparent process to get your business automated.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line for Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block -z-10" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Text Content */}
                                <div className={`flex-1 text-center md:text-left ${index % 2 !== 0 && "md:text-right"}`}>
                                    <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary mb-4 md:hidden`}>
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm font-bold text-chart-2 tracking-widest uppercase mb-2 block">
                                        Step {item.step}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Center Icon bubble for desktop */}
                                <div className="hidden md:flex flex-none items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-muted shadow-sm z-10">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>

                                {/* Empty spacer for grid alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link href="/contact">Start Your Journey Today</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
