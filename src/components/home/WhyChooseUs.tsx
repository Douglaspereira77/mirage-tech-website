"use client";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Check, Globe2, Clock, Zap } from "lucide-react";

const featureIcons = [Globe2, Check, Clock, Zap];
const featureKeys = ['local', 'bilingual', 'availability', 'fast'] as const;

export function WhyChooseUs() {
    const t = useTranslations('WhyChooseUs');

    return (
        <section className="py-24 bg-slate-50/50 dark:bg-gradient-to-br dark:from-[#0a0f1e] dark:via-[#0f1f38] dark:to-background border-y border-border/40 relative overflow-hidden transition-colors">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-6 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-primary">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-8 mt-8">
                        {featureKeys.map((key, index) => {
                            const Icon = featureIcons[index];
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center text-center space-y-2 p-8 rounded-3xl bg-card dark:bg-card/50 backdrop-blur-sm border border-slate-200 dark:border-muted hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-foreground">{t(`features.${key}.title`)}</h3>
                                    <p className="text-sm text-slate-600 dark:text-muted-foreground">{t(`features.${key}.description`)}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20 border-t border-border/50 pt-16">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-4">{t('trusted')}</h3>
                        <p className="text-muted-foreground">{t('trustedSub')}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {[0, 1].map((i) => (
                            <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border/50 italic text-muted-foreground relative text-center">
                                "{t(`testimonials.${i}`)}"
                                <div className="mt-4 not-italic font-bold text-foreground">
                                    {i === 0 ? "— BestOfKuwait.com" : t('trusted')}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl w-full text-center">
                            <h4 className="text-xl font-bold mb-2">{t('helpUsGrow')}</h4>
                            <p className="text-sm text-muted-foreground mb-6">{t('happyClient')}</p>
                            <a 
                                href="/reputation"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-all outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                {t('leaveReview')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
