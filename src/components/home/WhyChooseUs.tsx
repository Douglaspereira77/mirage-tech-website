"use client";

import { motion } from "framer-motion";
import { Check, Globe2, Clock, Zap } from "lucide-react";

const features = [
    {
        title: "Local Expertise",
        description: "We understand the Middle East market and business culture.",
        icon: Globe2,
    },
    {
        title: "Arabic & English",
        description: "Fully bilingual bots that switch languages seamlessly.",
        icon: Check,
    },
    {
        title: "24/7 Availability",
        description: "Never miss a customer message, even on weekends or holidays.",
        icon: Clock,
    },
    {
        title: "Fast Integration",
        description: "Get up and running with your existing systems in days, not months.",
        icon: Zap,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0a0f1e] via-[#0f1f38] to-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-6 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground dark:text-primary">
                        Why Choose Mirage Tech AI?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                        We don't just build chatbots; we build intelligent systems designed for businesses in Kuwait and the Middle East.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-8 mt-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-muted hover:border-primary/30 transition-colors group"
                            >
                                <feature.icon className="w-8 h-8 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-lg text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
