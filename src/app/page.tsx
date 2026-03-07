import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorksHome } from "@/components/home/HowItWorksHome";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Mirage Tech AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mirage Tech AI is a premier AI automation agency based in Kuwait. We specialize in rapidly deploying custom AI solutions like WhatsApp chatbots, Instagram DM automation, and custom web applications (AI Automation & Custom Business Tools) for businesses across the Middle East."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build an AI chatbot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard WhatsApp or Instagram chatbots can be deployed in under 7 days. For highly complex, custom-trained LLMs connected to your proprietary CRM, timelines usually range from 2 to 4 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Do your AI solutions support Arabic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All our AI deployments feature native bilingual support, understanding and generating fluid Arabic (including GCC dialects) and English with enterprise-grade accuracy."
                }
              }
            ]
          })
        }}
      />
      <Hero />
      <ServicesOverview />
      <ProblemSolution />
      <HowItWorksHome />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  );
}
