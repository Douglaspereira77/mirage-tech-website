"use client";

import { useState } from "react";
import Link from "next/link";
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Mail, MapPin, Phone, Search, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendContactEmail } from "./actions";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Valid phone number is required"),
    company: z.string().min(1, "Company name is required"),
    platform: z.string().min(1, "Please select a platform"),
    message: z.string().min(10, "Please provide more details about your needs"),
});

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    });



    // existing code ...

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const result = await sendContactEmail(values);

            if (result.error) {
                // In a real app we'd show a toast error here
                console.error(result.error);
                alert("Failed to send message: " + result.error);
                setIsSubmitting(false);
                return;
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Let&apos;s Grow Your Business
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Choose the fastest path to results.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Tabs defaultValue="audit" className="w-full space-y-12">
                        <div className="flex justify-center">
                            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                                <TabsTrigger value="audit" className="text-base">Free Audit</TabsTrigger>
                                <TabsTrigger value="contact" className="text-base">Direct Inquiry</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="audit" className="focus-visible:ring-0">
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-muted/30 p-8 rounded-3xl border">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-chart-2 bg-chart-2/10">
                                        <Search className="mr-2 h-3 w-3" />
                                        <span>Recommended for SMBs</span>
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight">Claim Your Free Growth &amp; Visibility Audit</h2>
                                    <p className="text-lg text-muted-foreground">
                                        We&apos;ll analyze your business, find exactly where you are losing leads, and show you how to fix it with AI.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm">
                                            <ShieldCheck className="w-5 h-5 text-chart-2" />
                                            <span>Full GMB & SEO performance check</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm">
                                            <ShieldCheck className="w-5 h-5 text-chart-2" />
                                            <span>Lead response-time leakage report</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm">
                                            <ShieldCheck className="w-5 h-5 text-chart-2" />
                                            <span>3-step AI implementation roadmap</span>
                                        </li>
                                    </ul>
                                    <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                                        <Link href="/audit">
                                            Start My Free Audit
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <p className="text-xs text-muted-foreground italic">Takes 2 minutes. No credit card required.</p>
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
                                        <h2 className="text-2xl font-bold">Specific Inquiry?</h2>
                                        <p className="text-muted-foreground">Have a specific project or question? Send us a message and we&apos;ll reply within 24 hours.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <Card className="bg-muted/30 border-none">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground uppercase font-semibold">Email</p>
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
                                                    <p className="text-xs text-muted-foreground uppercase font-semibold">WhatsApp</p>
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
                                    <Loader2 className="w-8 h-8 animate-spin" /> {/* Just teasing, static check would be better but reusing loader symbol loosely or finding Check */}
                                    {/* Actually let's use check circle */}
                                </div>
                                <h3 className="text-2xl font-bold text-green-600">Message Sent!</h3>
                                <p className="text-muted-foreground">
                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                </p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                    Send Another Message
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
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
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
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@company.com" {...field} />
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
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+965 ..." {...field} />
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
                                                    <FormLabel>Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Business" {...field} />
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
                                                <FormLabel>What are you interested in?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a service" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="whatsapp">AI Growth Engines & Automation</SelectItem>
                                                        <SelectItem value="vibe-coding">Custom App Development & Business Tools</SelectItem>
                                                        <SelectItem value="consultancy">AI Consultancy & Strategy</SelectItem>
                                                        <SelectItem value="web-chatbot">AI Voice & Chat Systems</SelectItem>
                                                        <SelectItem value="all">Not Sure / General Inquiry</SelectItem>
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
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us about your automation needs..."
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
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
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
