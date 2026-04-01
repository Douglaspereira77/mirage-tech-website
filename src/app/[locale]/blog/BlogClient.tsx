"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const posts = [
    {
        title: "The Future of Customer Service involved Chatbots",
        excerpt: "Why 85% of customer interactions will be automated by 2025.",
        category: "Trends",
        date: "Dec 10, 2025",
        slug: "future-of-customer-service",
    },
    {
        title: "How to Automate WhatsApp for Your Business",
        excerpt: "A step-by-step guide to setting up WhatsApp Business API.",
        category: "Guides",
        date: "Dec 05, 2025",
        slug: "automate-whatsapp-business",
    },
    {
        title: "Case Study: Kuwait Retailer Increases Sales by 40%",
        excerpt: "See how Al-Futtaim utilized Instagram automation to drive engagement.",
        category: "Case Studies",
        date: "Nov 28, 2025",
        slug: "case-study-retail-growth",
    },
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Resources & Insights
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Latest trends in AI automation and business growth strategies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {posts.map((post, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary">{post.category}</Badge>
                                    <span className="text-sm text-muted-foreground">{post.date}</span>
                                </div>
                                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                                    <Link href={`#`}>{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="ghost" className="p-0">
                                    <Link href={`#`}>Read More →</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
