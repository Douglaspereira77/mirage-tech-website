import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                            <div className="relative h-8 w-8">
                                <Image src="/logo.png" alt={`${t("brandName")} Logo`} fill className="object-contain" />
                            </div>
                            <span>{t("brandName")}</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            {t("description")}
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/company/112511725/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://www.instagram.com/miragetechai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://x.com/MirageTech_AI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">X (Twitter)</span>
                            </Link>
                            <Link href="https://www.facebook.com/profile.php?id=61577670448931" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">{t("company")}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">{t("about")}</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary">{t("portfolio")}</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">{t("contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">{t("services")}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services/ai-automation" className="hover:text-primary">{t("aiAutomation")}</Link></li>
                            <li><Link href="/services/custom-tools" className="hover:text-primary">{t("customTools")}</Link></li>
                            <li><Link href="/ai-consultancy" className="hover:text-primary">{t("consultancy")}</Link></li>
                            <li><Link href="/services" className="hover:text-primary">{t("allServices")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">{t("contact")}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>{t("address")}</li>
                            <li><a href="mailto:info@gomiragetech.com" className="hover:text-primary">info@gomiragetech.com</a></li>
                            <li><a href="https://wa.me/+96597524391" target="_blank" rel="noopener noreferrer" className="hover:text-primary">{t("whatsapp")}: +965 97524391</a></li>
                            <li><a href="tel:+96567067633" className="hover:text-primary">{t("callUs")}: +965 67067633</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {t("brandName")}. {t("rights")}</p>
                </div>
            </div>
        </footer>
    );
}
