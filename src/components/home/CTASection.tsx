"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    const t = useTranslations('CTA');

    return (
        <section className="py-10 md:py-14 bg-background border-t">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <Button asChild size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
                            <Link href="/contact">
                                {t('bookCall')}
                                <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
