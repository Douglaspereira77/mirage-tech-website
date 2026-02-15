import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                            <div className="relative h-8 w-8">
                                <Image src="/logo.png" alt="Mirage Tech Logo" fill className="object-contain" />
                            </div>
                            <span>Mirage Tech</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Intelligent Automation for the Middle East. Helping businesses communicate better.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-primary">How It Works</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services#whatsapp" className="hover:text-primary">WhatsApp Automation</Link></li>
                            <li><Link href="/services#instagram" className="hover:text-primary">Instagram Automation</Link></li>
                            <li><Link href="/services#web" className="hover:text-primary">Web Chatbots</Link></li>
                            <li><Link href="/services#vibe-coding" className="hover:text-primary">Vibe Coding & MVP</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Kuwait City, Kuwait</li>
                            <li><a href="mailto:info@gomiragetech.com" className="hover:text-primary">info@gomiragetech.com</a></li>
                            <li><a href="tel:+96597524391" className="hover:text-primary">WhatsApp: +965 97524391</a></li>
                            <li><a href="tel:+96567067633" className="hover:text-primary">Call Us: +965 67067633</a></li>
                            <li><a href="https://www.gomiragetech.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">www.gomiragetech.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Mirage Tech AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
