"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const plans = [
    {
        name: "Starter",
        price: "100",
        period: "/mo",
        description: "Perfect for small businesses starting with a single chatbot or automation.",
        features: [
            "Single Platform (WhatsApp OR Instagram)",
            "AI Chatbot with FAQ Handling",
            "Bilingual Support (Arabic & English)",
            "Email Support",
            "Monthly Performance Reports",
        ],
        missing: [
            "Multi-platform integration",
            "CRM / Shopify Integration",
            "Priority Support",
        ],
    },
    {
        name: "Business",
        price: "250",
        period: "/mo",
        description: "For growing companies needing multi-channel automation.",
        featured: true,
        features: [
            "Two Platforms Included",
            "Advanced AI Context Awareness",
            "CRM / Calendar Integration",
            "Priority Email & Chat Support",
            "Live Analytics Dashboard",
            "Human Handoff Protocols",
        ],
        missing: [
            "Dedicated Account Manager",
            "Custom Model Training",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Full-scale AI transformation for large organizations.",
        features: [
            "All Platforms (WhatsApp, Insta, Web)",
            "Custom AI Model Training",
            "24/7 Dedicated Support",
            "Dedicated Account Manager",
            "Full CRM & ERP Integration",
            "SLA Guarantees",
            "On-premise Deployment Options",
        ],
        missing: [],
    },
];

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Simple pricing that scales with your business. All prices in KWD.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`flex flex-col items-center text-center ${plan.featured ? "border-chart-2 shadow-lg scale-105 relative z-10" : "border-border"}`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-chart-2 text-chart-2-foreground px-4 py-1 rounded-full text-sm font-bold">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="flex flex-col items-center text-center w-full space-y-2">
                                <CardTitle className="text-2xl font-bold text-center w-full">{plan.name}</CardTitle>
                                <CardDescription className="max-w-[280px] mx-auto text-center w-full text-sm">
                                    {plan.description}
                                </CardDescription>
                                <div className="mt-4 text-center w-full">
                                    {plan.price === "Custom" ? (
                                        <span className="text-4xl font-bold">Custom</span>
                                    ) : (
                                        <div className="flex flex-col items-center">
                                            <span className="text-sm text-muted-foreground">From </span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-bold">{plan.price} KWD</span>
                                                <span className="text-muted-foreground">{plan.period}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col items-center">
                                <ul className="space-y-3 flex flex-col items-center">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.missing.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                            <X className="w-5 h-5 text-muted shrink-0" />
                                            <span className="text-sm line-through">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant={plan.featured ? "default" : "outline"}>
                                    <Link href="/contact">Get a Quote</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 max-w-2xl mx-auto text-center space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6 border">
                        <p className="font-semibold text-lg mb-2">💡 Annual Plans Available</p>
                        <p className="text-muted-foreground">
                            Save with annual billing — starting from <strong>1,000 KWD/year</strong>. Contact us for details.
                        </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Prices depend on message volume and complexity of automation flows. Vibe Coding and Consultancy projects are priced separately.
                    </p>
                </div>
            </div>
        </div>
    );
}
