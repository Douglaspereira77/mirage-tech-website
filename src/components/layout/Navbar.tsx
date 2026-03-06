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

import { ModeToggle } from "@/components/ModeToggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const serviceLinks = [
    { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
    { name: "Vibe Coding & MVP", href: "/services/vibe-coding" },
    { name: "AI Consultancy", href: "/ai-consultancy" },
    { name: "All Services", href: "/services" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="relative h-8 w-8">
                        <Image src="/logo.png" alt="Mirage Tech AI Logo" fill className="object-contain" />
                    </div>
                    <span>Mirage Tech AI</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
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
                    <div className="flex items-center gap-2 ml-4">
                        <ModeToggle />
                        <Button asChild size="sm">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Menu">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="text-left flex items-center gap-2">
                                    <div className="relative h-6 w-6">
                                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                                    </div>
                                    Mirage Tech AI
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-8">
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    Home
                                </Link>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Services</p>
                                    {serviceLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-base font-medium text-foreground hover:text-primary transition-colors pl-3"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                {navItems.slice(1).map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
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
        </header>
    );
}
