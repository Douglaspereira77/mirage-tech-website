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
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Why Choose Mirage Tech?
                        </h2>
                        <p className="text-lg text-primary-foreground/80 max-w-[600px]">
                            We don't just build chatbots; we build intelligent systems designed for businesses in Kuwait and the Middle East.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 mt-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col space-y-2 p-4 rounded-lg bg-primary-foreground/5"
                                >
                                    <feature.icon className="w-8 h-8 text-chart-3 mb-2" />
                                    <h3 className="font-bold text-lg">{feature.title}</h3>
                                    <p className="text-sm text-primary-foreground/70">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative hidden lg:block h-[500px] w-full bg-gradient-to-br from-chart-2/20 to-primary-foreground/5 rounded-2xl border border-primary-foreground/10 p-8 md:p-12 backdrop-blur-sm">
                        {/* Abstract Graphic or Code Snippet Mockup */}
                        <div className="absolute inset-4 rounded-xl border border-primary-foreground/10 bg-black/40 p-6 font-mono text-sm text-green-400 opacity-80 overflow-hidden">
                            <div className="space-y-2">
                                <p><span className="text-purple-400">const</span> <span className="text-yellow-400">consultant</span> = <span className="text-blue-400">new</span> <span className="text-green-300">AI_Agent</span>();</p>
                                <p><span className="text-purple-400">await</span> consultant.<span className="text-blue-300">connect</span>(<span className="text-orange-300">'WhatsApp'</span>);</p>
                                <p><span className="text-slate-400">// Listening for messages...</span></p>
                                <p><span className="text-purple-400">if</span> (msg.lang === <span className="text-orange-300">'ar'</span>) &#123;</p>
                                <p>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-orange-300">"مرحباً بك في ميراج تك! كيف يمكنني مساعدتك؟"</span>;</p>
                                <p>&#125; <span className="text-purple-400">else</span> &#123;</p>
                                <p>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-orange-300">"Welcome to Mirage Tech! How can I help you?"</span>;</p>
                                <p>&#125;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
