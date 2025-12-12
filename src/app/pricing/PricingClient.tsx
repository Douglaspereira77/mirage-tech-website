"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const plans = [
    {
        name: "Starter",
        price: "Custom",
        description: "Perfect for small businesses starting with automation.",
        features: [
            "Single Platform (WhatsApp OR Instagram)",
            "Basic Automated Responses",
            "Email Support",
            "Standard Response Time",
            "Monthly Reports",
        ],
        missing: [
            "Multi-platform integration",
            "Advanced AI workflows",
            "CRM Integration",
            "Priority Support",
        ],
    },
    {
        name: "Business",
        price: "Custom",
        description: "For growing companies needing multi-channel support.",
        featured: true,
        features: [
            "Two Platforms Included",
            "Advanced AI Context Awareness",
            "Priority Email & Chat Support",
            "Fast Response Time",
            "Live Analytics Dashboard",
            "Basic CRM Integration",
        ],
        missing: [
            "Dedicated Account Manager",
            "Custom ERP Integrations",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale solution for large organizations.",
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
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        We tailor our solutions to your specific needs. Contact us for a custom quote.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`flex flex-col ${plan.featured ? "border-chart-2 shadow-lg scale-105 relative z-10" : "border-border"}`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-chart-2 text-chart-2-foreground px-4 py-1 rounded-full text-sm font-bold">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.missing.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
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

                <div className="mt-16 text-center text-muted-foreground">
                    <p>Prices depend on message volume and complexity of automation flows.</p>
                </div>
            </div>
        </div>
    );
}
