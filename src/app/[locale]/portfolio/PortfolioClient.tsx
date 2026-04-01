"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
    const t = useTranslations('Portfolio');

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Case Study: BestofKuwait.com */}
                <div className="mb-12 md:mb-16 flex flex-col items-center">
                    <div className="flex justify-center w-full mb-8">
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                            {t('caseStudy.badge')}
                        </span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow text-center w-full max-w-5xl"
                    >
                        <div className="relative h-[300px] md:h-[500px] w-full bg-muted/30 p-4 md:p-8">
                            <Image
                                src="/bok-showcase.png"
                                alt="Best of Kuwait Restaurant Directory"
                                fill
                                className="object-contain hover:scale-[1.02] transition-transform duration-700 p-4"
                                priority
                            />
                        </div>
                        <div className="p-8 lg:p-12 space-y-8 flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-2">
                                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">{t('caseStudy.status')}</Badge>
                                <Badge variant="outline" className="border-primary/20 bg-primary/5">{t('caseStudy.category')}</Badge>
                                <Badge variant="outline">Next.js</Badge>
                                <Badge variant="outline">Supabase</Badge>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{t('caseStudy.title')}</h3>
                                <div className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                                    {t.rich('caseStudy.description', {
                                        strong: (chunks) => <strong className="font-bold text-foreground"> {chunks} </strong>
                                    })}
                                </div>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/80 max-w-2xl w-full text-left">
                                {t.raw('caseStudy.results').map((result: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-border transition-colors">
                                        <span className="shrink-0 text-primary text-lg">✨</span>
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <Button asChild size="lg" className="rounded-full">
                                    <Link href="https://bestofkuwait.com" target="_blank" rel="noopener noreferrer">
                                        {t('caseStudy.cta')}
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Capabilities Section */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-primary/70">{t('capabilities.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col items-center text-center border-muted hover:shadow-xl transition-shadow w-full">
                                <CardHeader className="flex flex-col items-center text-center w-full space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-2 mx-auto">
                                        <MessageCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-center w-full">{t('capabilities.chatbot.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center text-center w-full">
                                    <div className="text-muted-foreground max-w-[320px] mx-auto text-center">
                                        {t.rich('capabilities.chatbot.description', {
                                            strong: (chunks) => <strong className="font-bold text-foreground"> {chunks} </strong>
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center border-muted hover:shadow-xl transition-shadow w-full">
                                <CardHeader className="flex flex-col items-center text-center w-full space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-2 mx-auto">
                                        <Bot className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-center w-full">{t('capabilities.roi.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center text-center w-full">
                                    <div className="text-muted-foreground max-w-[320px] mx-auto text-center">
                                        {t.rich('capabilities.roi.description', {
                                            strong: (chunks) => <strong className="font-bold text-foreground"> {chunks} </strong>
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="bg-muted/50 rounded-3xl p-8 md:p-16 border max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {t('cta.description')}
                        </p>
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/audit">
                                {t('cta.button')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
