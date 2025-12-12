"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const pipelineProjects = [
    {
        title: "BestofOman.com",
        description: "The ultimate guide to dining, living, and exploring Oman.",
    },
    {
        title: "BestofLebanon.com",
        description: "Discover the hidden gems and rich culture of Lebanon.",
    },
    {
        title: "bestGoa.com",
        description: "Your passport to the beaches, parties, and serenity of Goa.",
    },
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Showcasing our digital expertise and upcoming ventures.
                    </p>
                </div>

                {/* Featured Project */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Featured Project</span>
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-64 lg:h-full min-h-[400px] w-full bg-muted">
                            <Image
                                src="/bestofkuwait.png"
                                alt="Best of Kuwait Homepage"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 lg:p-12 space-y-6">
                            <div className="flex gap-2">
                                <Badge>Live</Badge>
                                <Badge variant="outline">Directory</Badge>
                                <Badge variant="outline">Next.js</Badge>
                            </div>
                            <h3 className="text-3xl font-bold">BestofKuwait.com</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                A premium curated directory for Kuwait, featuring the best places to eat, stay, and visit. Based on public reviews and local expertise, providing an authentic guide to the country.
                            </p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2">✨ Curated listings with expert scores</li>
                                <li className="flex items-center gap-2">✨ Advanced search and filtering</li>
                                <li className="flex items-center gap-2">✨ Responsive modern design</li>
                            </ul>
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="https://bestofkuwait.com" target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Pipeline Projects */}
                <div>
                    <h2 className="text-2xl font-bold mb-8">Coming Soon</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pipelineProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-dashed border-2 flex flex-col bg-muted/5">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>In Development</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground">{project.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Badge variant="secondary">Launch Pending</Badge>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
