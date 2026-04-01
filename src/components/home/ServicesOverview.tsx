"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const pillarIcons = [Sparkles, MessageCircle, Brain];
const pillarKeys = ['reputation', 'chat', 'voice'] as const;
const pillarColors = ["text-amber-500", "text-green-500", "text-violet-500"];
const pillarGlows = [
    "from-amber-500/10 via-amber-500/5 to-transparent",
    "from-green-500/10 via-green-500/5 to-transparent",
    "from-violet-500/10 via-violet-500/5 to-transparent"
];
const pillarHrefs = [
    "/services/ai-automation#reputation",
    "/services/ai-automation#growth",
    "/services/ai-automation#voice"
];

export function ServicesOverview() {
    const t = useTranslations('ServicesOverview');

    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-[42rem]">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pillarKeys.map((key, index) => {
                        const Icon = pillarIcons[index];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex"
                            >
                                <Card className={`w-full flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 border-muted group bg-gradient-to-br ${pillarGlows[index]}`}>
                                    <CardHeader className="pb-4 flex flex-col items-center text-center space-y-2 w-full">
                                        <div className={`w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform ${pillarColors[index]}`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-center w-full">
                                            {t(`pillars.${key}.title`)}
                                        </CardTitle>
                                        <p className="text-sm font-semibold text-muted-foreground w-full text-center max-w-[300px] mx-auto leading-tight">
                                            {t(`pillars.${key}.subtitle`)}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col items-center text-center w-full pt-0">
                                        <p className="text-muted-foreground flex-1 mb-8 leading-relaxed max-w-[320px] mx-auto text-center">
                                            {t(`pillars.${key}.description`)}
                                        </p>
                                        <Button asChild variant="ghost" className="w-full justify-center group/btn font-semibold">
                                            <Link href={pillarHrefs[index] as any}>
                                                {t('learnMore')}
                                                <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-180 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
