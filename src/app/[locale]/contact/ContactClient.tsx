"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Mail, Phone, Search, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendContactEmail } from "./actions";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("Contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formSchema = z.object({
        name: z.string().min(2, t("form.validation.name")),
        email: z.string().email(t("form.validation.email")),
        phone: z.string().min(8, t("form.validation.phone")),
        company: z.string().min(1, t("form.validation.company")),
        platform: z.string().min(1, t("form.validation.platform")),
        message: z.string().min(10, t("form.validation.message")),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            platform: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const result = await sendContactEmail(values);

            if (result.error) {
                console.error(result.error);
                alert(t("form.validation.generic") + ": " + result.error);
                setIsSubmitting(false);
                return;
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
            alert(t("form.validation.generic"));
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Tabs defaultValue="audit" className="w-full space-y-12">
                        <div className="flex justify-center">
                            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                                <TabsTrigger value="audit" className="text-base">{t("tabs.audit")}</TabsTrigger>
                                <TabsTrigger value="contact" className="text-base">{t("tabs.contact")}</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="audit" className="focus-visible:ring-0">
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-muted/30 p-8 rounded-3xl border">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-chart-2 bg-chart-2/10">
                                        <Search className="mr-2 h-3 w-3" />
                                        <span>{t("auditSection.badge")}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight">{t("auditSection.title")}</h2>
                                    <p className="text-lg text-muted-foreground">
                                        {t("auditSection.description")}
                                    </p>
                                    <ul className="space-y-3">
                                        {[0, 1, 2].map((i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm">
                                                <ShieldCheck className="w-5 h-5 text-chart-2" />
                                                <span>{t(`auditSection.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                                        <Link href="/audit">
                                            {t("auditSection.cta")}
                                            <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
                                        </Link>
                                    </Button>
                                    <p className="text-xs text-muted-foreground italic">{t("auditSection.footer")}</p>
                                </div>
                                <div className="relative aspect-video rounded-2xl overflow-hidden border shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                                       <Search className="w-20 h-20 text-primary animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="contact" className="focus-visible:ring-0">
                            <div className="grid md:grid-cols-5 gap-12">
                                {/* Contact Info */}
                                <div className="md:col-span-2 space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold">{t("contactSection.title")}</h2>
                                        <p className="text-muted-foreground">{t("contactSection.description")}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <Card className="bg-muted/30 border-none">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground uppercase font-semibold">{t("contactSection.emailLabel")}</p>
                                                    <p className="text-sm font-medium">info@gomiragetech.com</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card className="bg-muted/30 border-none">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground uppercase font-semibold">{t("contactSection.whatsappLabel")}</p>
                                                    <p className="text-sm font-medium">+965 97524391</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="md:col-span-3 bg-card p-8 rounded-2xl border shadow-sm">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-600">{t("form.success.title")}</h3>
                                <p className="text-muted-foreground">
                                    {t("form.success.message")}
                                </p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                    {t("form.success.sendAnother")}
                                </Button>
                            </div>
                        ) : (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t("form.labels.name")}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t("form.placeholders.name")} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t("form.labels.email")}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t("form.placeholders.email")} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t("form.labels.phone")}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={t("form.placeholders.phone")} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="company"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t("form.labels.company")}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={t("form.placeholders.company")} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="platform"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t("form.labels.interest")}</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={t("form.placeholders.interest")} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="whatsapp">{t("form.services.automation")}</SelectItem>
                                                        <SelectItem value="vibe-coding">{t("form.services.customApp")}</SelectItem>
                                                        <SelectItem value="consultancy">{t("form.services.consultancy")}</SelectItem>
                                                        <SelectItem value="web-chatbot">{t("form.services.voiceChat")}</SelectItem>
                                                        <SelectItem value="all">{t("form.services.general")}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t("form.labels.message")}</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder={t("form.placeholders.message")}
                                                        className="min-h-[120px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                {t("form.submitting")}
                                            </>
                                        ) : (
                                            t("form.submit")
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        )}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
