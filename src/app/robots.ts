import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/private/",
            },
            {
                userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "Applebot", "PerplexityBot"],
                allow: "/",
            }
        ],
        sitemap: "https://miragetech.ai/sitemap.xml",
    };
}
