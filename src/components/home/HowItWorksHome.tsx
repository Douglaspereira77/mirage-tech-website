"use client";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Phone, Wrench, Rocket } from "lucide-react";

const stepIcons = [Phone, Wrench, Rocket];
const stepKeys = ['audit', 'engineer', 'scale'] as const;

export function HowItWorksHome() {
    const t = useTranslations('HowItWorks');

    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {stepKeys.map((key, i) => {
                        const Icon = stepIcons[i];
                        const stepNumber = (i + 1).toString().padStart(2, '0');
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Connector line */}
                                {i < stepKeys.length - 1 && (
                                    <div className="hidden md:block absolute top-7 left-[60%] rtl:right-[60%] rtl:left-auto w-full h-px bg-gradient-to-r from-muted-foreground/20 to-transparent z-0" />
                                )}

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-5xl font-black text-muted-foreground/15 select-none leading-none">
                                            {stepNumber}
                                        </span>
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{t(`steps.${key}.title`)}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{t(`steps.${key}.description`)}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
