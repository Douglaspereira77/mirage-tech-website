"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const serviceLinks = [
    { name: "AI Visibility Audit", href: "/audit" },
    { name: "AI-SEO & AEO", href: "/services/ai-seo" },
    { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
    { name: "BestOfKuwait Partnership", href: "/partnership/bestofkuwait" },
    { name: "All Services", href: "/services" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6 relative">
                {/* Logo - Start */}
                <div className="flex-1 flex justify-start items-center overflow-hidden">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-primary whitespace-nowrap shrink-0">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8">
                            <Image src="/logo.png" alt="Mirage Tech AI Logo" fill className="object-contain" />
                        </div>
                        <span>Mirage Tech AI</span>
                    </Link>
                </div>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 outline-none">
                            Services
                            <ChevronDown className="w-3.5 h-3.5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-52">
                            {serviceLinks.map((link) => (
                                <DropdownMenuItem key={link.href} asChild>
                                    <Link href={link.href} className="cursor-pointer">
                                        {link.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {navItems.slice(1).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions - End */}
                <div className="flex-1 flex justify-end items-center gap-2">
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeToggle />
                        <Button asChild size="sm">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Menu">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle className="flex items-center justify-center gap-2">
                                        <div className="relative h-6 w-6">
                                            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                                        </div>
                                        Mirage Tech AI
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col items-center gap-4 mt-8">
                                    <Link
                                        href="/"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Home
                                    </Link>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className="flex items-center justify-center gap-2 w-full text-lg font-medium text-muted-foreground hover:text-primary transition-colors group outline-none"
                                        >
                                            <span>Services</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden flex flex-col gap-2"
                                                >
                                                    {serviceLinks.map((link) => (
                                                        <Link
                                                            key={link.href}
                                                            href={link.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors text-center"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {navItems.slice(1).map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Button asChild className="mt-4 w-full">
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Get Started
                                        </Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header >
    );
}
