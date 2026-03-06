"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, ArrowRight, Clock, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhatsAppClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Header / Direct Answer Section */}
            <section className="container px-4 md:px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3 text-green-500 mb-6">
                        <MessageCircle className="w-8 h-8" />
                        <span className="font-semibold tracking-wider uppercase">WhatsApp Automation</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Turn WhatsApp into your hardest working employee.
                    </h1>

                    {/* The AEO "Direct Answer" Paragraph */}
                    <div className="bg-muted/50 border-l-4 border-green-500 p-6 md:p-8 rounded-r-xl">
                        <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                            <strong>What is a WhatsApp AI Chatbot by Mirage Tech AI?</strong><br />
                            We build custom WhatsApp AI agents for businesses in Kuwait and the Middle East that instantly automate customer support, appointment scheduling, and lead qualification. By integrating directly with your existing CRM and databases, our bots respond 24/7 in both Arabic and English, saving hundreds of manual hours and driving immediate sales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features / Details */}
            <section className="py-20 bg-muted/20 border-y">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">24/7 Availability</h3>
                            <p className="text-muted-foreground">Never leave a customer waiting. Immediate, accurate responses to FAQs, order tracking, and product queries at any hour.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">System Integrations</h3>
                            <p className="text-muted-foreground">We don't just build chatbots; we build agents. Our bots talk to Shopify, Calendly, Salesforce, Hubspot, and custom databases.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Bilingual NLP</h3>
                            <p className="text-muted-foreground">Flawless understanding and generation of both English and Arabic (including regional dialects), perfect for the GCC market.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversational SEO Section */}
            <section className="container px-4 md:px-6 py-20 max-w-4xl mx-auto">
                <div className="prose prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-6">How businesses in Kuwait are using WhatsApp Automation</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        The Middle East runs on WhatsApp. Traditional email marketing and web forms have single-digit conversion rates, while WhatsApp boasts 98% open rates. Here is how Mirage Tech AI implements automation:
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">1. E-commerce Order Management</h3>
                            <p className="text-muted-foreground">Instead of customers calling your hotline to ask "Where is my order?", they simply send a WhatsApp message. The AI instantly queries your Shopify or delivery database, formats the exact status, and replies in seconds.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">2. Hospital & Clinic Appointments</h3>
                            <p className="text-muted-foreground">Handling patient bookings manually leads to errors and long hold times. Our bots read real-time calendar availability and allow patients to select slots, receive reminders, and cancel—entirely through natural WhatsApp chat.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">3. Real Estate Lead Qualification</h3>
                            <p className="text-muted-foreground">When a buyer clicks an Instagram ad, they are redirected to WhatsApp. The AI immediately engages them, asks qualifying questions (budget, preferred area, property type), and routes high-value leads directly to human agents on the sales floor.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs for AEO */}
            <section className="bg-muted py-20">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">What is a WhatsApp AI chatbot?</h3>
                            <p className="text-muted-foreground">A WhatsApp AI chatbot is an automated software integrated into your WhatsApp Business account. It uses advanced NLP (Natural Language Processing) to understand customer inquiries and provide immediate, human-like responses 24/7.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">How can a business in Kuwait automate appointments with WhatsApp?</h3>
                            <p className="text-muted-foreground">Mirage Tech AI builds custom WhatsApp agents that integrate directly with your calendar and CRM. Customers simply text the bot to check availability, book, reschedule, or cancel appointments, completely hands-free.</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Can a WhatsApp bot handle order tracking?</h3>
                            <p className="text-muted-foreground">Yes. Our WhatsApp chatbots connect to your inventory or delivery system via APIs, allowing customers to check order status, delivery times, and inventory levels instantly through a simple WhatsApp message.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container px-4 md:px-6 py-24 text-center">
                <h2 className="text-3xl font-bold mb-6">Stop missing customer messages.</h2>
                <Button asChild size="lg" className="h-12 px-8">
                    <Link href="/contact">
                        Automate your WhatsApp
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </Button>
            </section>
        </div>
    );
}
