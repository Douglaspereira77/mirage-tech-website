"use client";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

export function FAQSection() {
    const t = useTranslations('FAQ');
    const items = [0, 1, 2];

    return (
        <section className="bg-muted/50 py-24">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t('title')}</h2>
                    <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
                </motion.div>

                <div className="space-y-6">
                    {items.map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background rounded-xl p-6 shadow-sm border border-border text-center flex flex-col items-center"
                        >
                            <h3 className="text-xl font-bold mb-2">{t(`items.${i}.question`)}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t(`items.${i}.answer`)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
