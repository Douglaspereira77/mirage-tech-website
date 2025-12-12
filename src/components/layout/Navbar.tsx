"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    // Pricing is optional/contact based usually, but user asked for it. 
    // Let's keep it or link to contact if specified. 
    // User spec: 5. Pricing Page (/pricing)
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="relative h-8 w-8">
                        <Image src="/logo.png" alt="Mirage Tech Logo" fill className="object-contain" />
                    </div>
                    <span>Mirage Tech</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="ml-4">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
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
                                    Mirage Tech
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-8">
                                {navItems.map((item) => (
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
