import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miragetech.ai"),
  title: {
    default: "Mirage Tech AI | Intelligent Automation for the Middle East",
    template: "%s | Mirage Tech AI",
  },
  description: "AI automation agency helping businesses in Kuwait and the Middle East communicate better with their customers through WhatsApp, Instagram, and web chatbots.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miragetech.ai",
    siteName: "Mirage Tech AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirage Tech AI",
    description: "Intelligent Automation for the Middle East",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
