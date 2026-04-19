"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
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
import { LanguageToggle } from "@/components/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export function Navbar() {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = React.useState(false);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);

    const navItems = [
        { name: t("home"), href: "/" },
        { name: t("portfolio"), href: "/portfolio" },
        { name: t("about"), href: "/about" },
        { name: t("contact"), href: "/contact" },
    ];

    const serviceLinks = [
        { name: t("visibilityAudit"), href: "/audit" },
        { name: t("aiSeo"), href: "/services/ai-seo" },
        { name: t("aiAutomation"), href: "/services/ai-automation" },
        { name: t("partnership"), href: "/partnership/bestofkuwait" },
        { name: t("allServices"), href: "/services" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6 relative">
                {/* Logo - Start */}
                <div className="flex-1 flex justify-start items-center overflow-hidden">
                    <Link href="/" className="flex items-center shrink-0">
                        <div className="relative h-14 w-[300px] sm:h-16 sm:w-[360px]">
                            <Image src="/logo-text-horizontal.png" alt="Mirage Tech AI" fill className="object-contain" />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        {t("home")}
                    </Link>

                    {/* Services Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 outline-none">
                            {t("services")}
                            <ChevronDown className="w-3.5 h-3.5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-52">
                            {serviceLinks.map((link) => (
                                <DropdownMenuItem key={link.href} asChild>
                                    <Link href={link.href as any} className="cursor-pointer">
                                        {link.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {navItems.slice(1).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href as any}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions - End */}
                <div className="flex-1 flex justify-end items-center gap-2">
                    <div className="hidden md:flex items-center gap-2">
                        <LanguageToggle />
                        <ThemeToggle />
                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
                            <Link href="/audit"> {t("freeAudit")}</Link>
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageToggle />
                        <ThemeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Menu">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle className="flex items-center justify-center">
                                        <div className="relative h-12 w-[220px]">
                                            <Image src="/logo-text-horizontal.png" alt="Mirage Tech AI" fill className="object-contain" />
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col items-center gap-4 mt-8">
                                    <Link
                                        href="/"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {t("home")}
                                    </Link>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className="flex items-center justify-center gap-2 w-full text-lg font-medium text-muted-foreground hover:text-primary transition-colors group outline-none"
                                        >
                                            <span> {t("services")}</span>
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
                                                            href={link.href as any}
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
                                            href={item.href as any}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
                                        <Link href="/audit" onClick={() => setIsOpen(false)}>
                                            {t("freeAudit")}
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
