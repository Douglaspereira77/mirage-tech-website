import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall, Sparkles } from "lucide-react";
import fs from "fs";
import path from "path";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

// Mock database fetch for the lead's company info
function getLeadInfo(id: string) {
    return {
        id,
        companyName: "Your Restaurant", // In a real app, fetch from DB
    };
}

export default async function DemoPage({
    params,
    searchParams,
}: {
    params: Promise<{ locale: string; leadId: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { locale, leadId } = await params;
    const resolvedSearch = await searchParams;

    const t = await getTranslations({ locale, namespace: "Demo" });

    // Get company name from search params or default
    const nameParam = resolvedSearch.name;
    const companyName = typeof nameParam === 'string' ? nameParam : "Your Restaurant";

    const leadInfo = { ...getLeadInfo(leadId), companyName };

    const safeLeadId = leadId.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();

    // Check if video file exists
    const videoPath = `/demos/demo-${safeLeadId}.mp4`;
    const absoluteVideoPath = path.join(process.cwd(), "public", "demos", `demo-${safeLeadId}.mp4`);

    const videoExists = fs.existsSync(absoluteVideoPath);

    if (!videoExists && process.env.NODE_ENV !== "development") {
        notFound();
    }

    const features = t.raw("content.features");

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-primary/30">
            <header className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
                <div className="font-bold text-xl tracking-tight">Mirage Tech AI</div>
                <Button asChild variant="outline" className="text-black bg-white hover:bg-gray-200 border-none">
                    <Link href="/contact">
                        {t("header.contact")}
                    </Link>
                </Button>
            </header>

            <main className="flex-1 flex flex-col xl:flex-row min-h-screen">
                {/* Left column: Video Focus */}
                <div className="flex-1 relative flex items-center justify-center bg-zinc-950 p-4 pt-24 pb-12 xl:p-12 overflow-hidden border-b xl:border-b-0 xl:border-r border-zinc-900">

                    {/* Subtle background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

                    {/* Video Container (Vertical 9:16 aspect ratio like TikTok/Reels) */}
                    <div className="relative w-full max-w-[400px] h-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-zinc-800 bg-zinc-900 mx-auto">
                        {videoExists ? (
                            <video
                                src={videoPath}
                                controls
                                autoPlay
                                muted={false}
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-zinc-500">
                                <Sparkles className="w-12 h-12 mb-4 opacity-50" />
                                <p>{t("video.placeholder")}</p>
                                <p className="text-xs mt-2 opacity-50">{t("video.notFound")}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right column: Copy & CTA */}
                <div className="flex-1 flex flex-col justify-center p-6 sm:p-12 xl:p-24 bg-black relative">
                    <div className="max-w-xl mx-auto xl:mx-0">
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <Sparkles className="mr-2 h-4 w-4" />
                            {t("content.tag")}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            {t.rich("content.title", {
                                gradient: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{chunks}</span>
                            })}
                        </h1>

                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            {t.rich("content.description", {
                                companyName: leadInfo.companyName,
                                company: (chunks) => <span className="text-white font-medium">{chunks}</span>
                            })}
                        </p>

                        <div className="space-y-6 mb-10">
                            {features.map((feature: any, i: number) => (
                                <div key={i} className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-primary">
                                        {i + 1}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                                        <p className="mt-1 text-zinc-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="h-14 px-8 text-base rounded-full gap-2 shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90">
                                <Link href="/contact">
                                    <PhoneCall className="w-5 h-5" />
                                    {t("content.cta")}
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full gap-2 border-zinc-700 hover:bg-zinc-900 text-white bg-transparent">
                                <Link href="/services">
                                    {t("content.learnMore")}
                                    <MoveRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
