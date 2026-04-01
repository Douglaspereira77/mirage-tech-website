"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, 
    Zap, 
    ArrowRight, 
    Star, 
    MessageCircle, 
    Phone, 
    RefreshCcw,
    TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ServicesClient() {
    const t = useTranslations('Services');
    const servicesData = t.raw('automationServices');

    const automationServices = [
        {
            icon: Star,
            slug: "reviews-engine",
            title: servicesData['reviews-engine'].title,
            problem: servicesData['reviews-engine'].problem,
            solution: servicesData['reviews-engine'].solution,
            outcome: servicesData['reviews-engine'].outcome,
            features: servicesData['reviews-engine'].features,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
        {
            icon: MessageCircle,
            slug: "growth-engine",
            title: servicesData['growth-engine'].title,
            problem: servicesData['growth-engine'].problem,
            solution: servicesData['growth-engine'].solution,
            outcome: servicesData['growth-engine'].outcome,
            features: servicesData['growth-engine'].features,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: Phone,
            slug: "voice-agent",
            title: servicesData['voice-agent'].title,
            problem: servicesData['voice-agent'].problem,
            solution: servicesData['voice-agent'].solution,
            outcome: servicesData['voice-agent'].outcome,
            features: servicesData['voice-agent'].features,
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
        },
        {
            icon: RefreshCcw,
            slug: "revenue-recovery",
            title: servicesData['revenue-recovery'].title,
            problem: servicesData['revenue-recovery'].problem,
            solution: servicesData['revenue-recovery'].solution,
            outcome: servicesData['revenue-recovery'].outcome,
            features: servicesData['revenue-recovery'].features,
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
        },
    ];

    const timelineSteps = t.raw('timeline.steps');
    const industries = t.raw('industries.list');
    const faqs = t.raw('faqs.list');

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                                {t('header.title')}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto">
                                {t('header.description')}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-2"
                        >
                            {industries.map((industry: string) => (
                                <Badge key={industry} variant="secondary" className="px-4 py-1 text-sm font-medium">
                                    {industry}
                                </Badge>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12">
                        {automationServices.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden border-none shadow-premium bg-card">
                                    <div className="grid lg:grid-cols-2">
                                        <div className="p-8 lg:p-12 space-y-8">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                                                    <service.icon className={`w-6 h-6 ${service.color}`} />
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/70">{t('labels.problem')}</h4>
                                                    <p className="text-lg leading-relaxed text-foreground/90">{service.problem}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary">{t('labels.solution')}</h4>
                                                    <p className="text-lg leading-relaxed font-medium">{service.solution}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-green-500">{t('labels.outcome')}</h4>
                                                    <p className="text-lg leading-relaxed text-foreground/90 font-semibold">{service.outcome}</p>
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                                                    <Link href="/audit">
                                                        {t('labels.cta')}
                                                        <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="bg-muted lg:border-l p-8 lg:p-12 flex flex-col justify-center space-y-8">
                                            <ul className="space-y-4">
                                                {service.features.map((feature: string, idx: number) => (
                                                    <li key={idx} className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                                                        <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="relative group cursor-pointer overflow-hidden rounded-3xl border bg-card/50 p-6 backdrop-blur hover:bg-card transition-colors">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    <TrendingUp className="w-24 h-24" />
                                                </div>
                                                <p className="text-sm italic font-medium">ROI Focus:</p>
                                                <p className="text-xl font-bold tracking-tight">Rapid Implementation. Zero Downtime.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="py-20 bg-background overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">{t('timeline.title')}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('timeline.subtitle')}
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {timelineSteps.map((step: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative z-10 p-8 rounded-3xl bg-muted/50 border hover:bg-muted transition-colors text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-6">
                                    {step.week}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 md:py-28 bg-card border-t border-b">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center">{t('faqs.title')}</h2>
                        <div className="grid gap-8">
                            {faqs.map((faq: any, idx: number) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-xl font-bold">{faq.question}</h3>
                                    <p className="text-muted-foreground text-lg">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32" />
                        
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl mx-auto leading-tight">
                            {t('bottomCTA')}
                        </h2>
                        <Button asChild size="lg" variant="secondary" className="rounded-full text-lg h-14 px-10 shadow-2xl hover:scale-105 transition-transform">
                            <Link href="/audit">
                                {t('labels.cta')}
                                <Zap className="ml-2 w-5 h-5 fill-current" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
