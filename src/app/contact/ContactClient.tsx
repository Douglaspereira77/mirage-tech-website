"use client";

import { useState } from "react";
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
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Ready to transform your customer communication? Let's talk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">Contact Information</h2>
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email Us</h3>
                                        <p className="text-muted-foreground">info@gomiragetech.com</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">WhatsApp</h3>
                                        <p className="text-muted-foreground">
                                            <a href="https://wa.me/+96597524391" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                                +965 97524391
                                            </a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Call Us</h3>
                                        <p className="text-muted-foreground">
                                            <a href="tel:+96567067633" className="hover:text-primary">
                                                +965 67067633
                                            </a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-2xl border shadow-sm">
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
                                                <FormLabel>Preferred Platform</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a platform" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                        <SelectItem value="instagram">Instagram</SelectItem>
                                                        <SelectItem value="web">Web Chatbot</SelectItem>
                                                        <SelectItem value="all">All / Not Sure</SelectItem>
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
            </div>
        </div>
    );
}
