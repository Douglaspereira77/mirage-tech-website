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
                  "text": "Mirage Tech AI is a premier AI growth and automation agency based in Kuwait. We specialize in deploying powerful AI systems like Growth Engines, Voice Agents, and custom business tools to eliminate manual work and drive revenue."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to deploy an AI system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard AI Growth Engines and Reputation systems can be deployed in under 48 hours. For highly complex operations involving custom CRM integrations and specialized Voice Agents, delivery is typically achieved within 7 days."
                }
              },
              {
                "@type": "Question",
                "name": "Do your AI systems support Arabic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every Mirage Tech AI system features full bilingual support, handling both Arabic (including GCC dialects) and English with enterprise-grade accuracy for the Kuwait market."
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
