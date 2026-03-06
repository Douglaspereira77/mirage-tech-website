"use client";

import { motion } from "framer-motion";
import { Phone, Wrench, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Discovery Call",
        description:
            "We jump on a 30-minute call to understand your business, your pain points, and where AI can make the biggest impact.",
    },
    {
        number: "02",
        icon: Wrench,
        title: "Custom Build",
        description:
            "Our team designs, builds, and tests your solution — whether it's a chatbot, a web app, or a strategic roadmap.",
    },
    {
        number: "03",
        icon: Rocket,
        title: "Deploy & Optimize",
        description:
            "We deploy to production and stay by your side. You get ongoing support, analytics, and optimization as your business grows.",
    },
];

export function HowItWorksHome() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A clear, three-step path from conversation to live AI solution.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Connector line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-7 left-[60%] w-full h-px bg-gradient-to-r from-muted-foreground/20 to-transparent z-0" />
                            )}

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-5xl font-black text-muted-foreground/15 select-none leading-none">
                                        {step.number}
                                    </span>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <step.icon className="w-7 h-7 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
