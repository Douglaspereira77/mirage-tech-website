"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 bg-background border-t">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ready to Automate Your Customer Communications?
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Join the businesses in Kuwait and the Middle East saving time and money with Mirage Tech AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <Button asChild size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
                            <Link href="/contact">
                                Start Your Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
