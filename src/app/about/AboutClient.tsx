"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        About Mirage Tech AI
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Bridging the gap between Middle Eastern businesses and the future of communication.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Founded in Kuwait, Mirage Tech AI was born from a simple observation: businesses in the Middle East strive to provide excellent hospitality, but often struggle to maintain that personal touch at scale in the digital age.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We saw an opportunity to use Artificial Intelligence not to replace human connection, but to enhance it. By automating routine inquiries, we free up business owners and staff to focus on what matters most—building relationships.
                        </p>
                    </div>
                    <div className="h-[400px] bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Abstract Visualization of "Bridge" */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20"></div>
                        <div className="text-center p-8 z-10">
                            <span className="text-6xl font-bold text-primary/80 block mb-2">2024</span>
                            <span className="text-xl text-muted-foreground uppercase tracking-widest">Established</span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: "Local Expertisse", desc: "Deep understanding of the Gulf market." },
                            { icon: Users, title: "Customer First", desc: "Technology should serve people, not the other way around." },
                            { icon: Lightbulb, title: "Innovation", desc: "Always exploring the latest in AI capabilities." },
                            { icon: ShieldCheck, title: "Transparency", desc: "Honest communication and clear results." }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card p-6 rounded-xl border shadow-sm text-center flex flex-col items-center"
                            >
                                <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
