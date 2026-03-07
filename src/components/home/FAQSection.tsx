"use client";

import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Mirage Tech AI?",
        answer: "Mirage Tech AI is a premier AI automation agency based in Kuwait. We specialize in rapidly deploying custom AI solutions like WhatsApp chatbots, Instagram DM automation, and custom web applications (Vibe Coding) for businesses across the Middle East."
    },
    {
        question: "How long does it take to build an AI chatbot?",
        answer: "Standard WhatsApp or Instagram chatbots can be deployed in under 7 days. For highly complex, custom-trained LLMs connected to your proprietary CRM, timelines usually range from 2 to 4 weeks."
    },
    {
        question: "Do your AI solutions support Arabic?",
        answer: "Yes. All our AI deployments feature native bilingual support, understanding and generating fluid Arabic (including GCC dialects) and English with enterprise-grade accuracy."
    }
];

export function FAQSection() {
    return (
        <section className="bg-muted/50 py-24">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">Common questions about our AI Automation and Vibe Coding services.</p>
                </motion.div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background rounded-xl p-6 shadow-sm border border-border text-center flex flex-col items-center"
                        >
                            <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
