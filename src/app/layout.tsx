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
  metadataBase: new URL("https://www.gomiragetech.com"),
  title: {
    default: "Mirage Tech AI | AI Visibility & Lead Systems for Kuwait SMBs",
    template: "%s | Mirage Tech AI",
  },
  description: "Dominant AI visibility and lead generation systems for Kuwait businesses. Specialists in AI reviews engine, AI Growth Engines, and bilingual lead capture.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gomiragetech.com",
    title: "Mirage Tech AI | AI Visibility & Lead Systems for Kuwait SMBs",
    description: "Dominant AI visibility and lead generation systems for Kuwait businesses. Specialized in AI reviews engine and AI Growth Systems.",
    siteName: "Mirage Tech AI",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Mirage Tech AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirage Tech AI",
    description: "Intelligent Automation for the Middle East",
    images: ["/logo.png"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/Chatbot";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {"siteId":4467532,"cookiePolicyId":71050831,"lang":"en","storage":{"useSiteId":true}};
            `,
          }}
        />
        <script type="text/javascript" src="https://cs.iubenda.com/autoblocking/4467532.js" />
        <script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js" />
        <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async />
        <GoogleAnalytics />
        <MetaPixel />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://miragetech.ai/#organization",
                    "name": "Mirage Tech AI",
                    "url": "https://miragetech.ai",
                    "logo": "https://miragetech.ai/logo.png",
                    "sameAs": [
                      "https://www.linkedin.com/company/miragetechai",
                      "https://twitter.com/miragetechai",
                      "https://www.instagram.com/miragetechai/"
                    ],
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "hello@miragetech.ai",
                      "contactType": "customer support",
                      "availableLanguage": ["English", "Arabic"]
                    }
                  },
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://miragetech.ai/#localbusiness",
                    "name": "Mirage Tech AI",
                    "url": "https://miragetech.ai",
                    "image": "https://miragetech.ai/logo.png",
                    "email": "hello@miragetech.ai",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Kuwait City",
                      "addressCountry": "KW"
                    },
                    "priceRange": "$$$"
                  }
                ]
              })
            }}
          />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
