"use client";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemSolution() {
    const t = useTranslations('ProblemSolution');

    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background rounded-2xl p-8 shadow-sm border border-destructive/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <XCircle className="w-24 h-24 text-destructive" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-6 text-destructive flex items-center justify-center gap-2">
                            <XCircle className="w-6 h-6" />
                            {t('oldWay.title')}
                        </h3>
                        <ul className="space-y-4 max-w-sm mx-auto">
                            {[0, 1, 2, 3].map((i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-destructive mt-1">✕</span>
                                    <span className="text-muted-foreground">{t(`oldWay.items.${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background rounded-2xl p-8 shadow-lg border border-chart-2/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle className="w-24 h-24 text-chart-2" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-6 text-chart-2 flex items-center justify-center gap-2">
                            <CheckCircle className="w-6 h-6" />
                            {t('mirageWay.title')}
                        </h3>
                        <ul className="space-y-4 max-w-sm mx-auto">
                            {[0, 1, 2, 3].map((i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-chart-2 mt-1">✓</span>
                                    <span className="text-foreground">{t(`mirageWay.items.${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
