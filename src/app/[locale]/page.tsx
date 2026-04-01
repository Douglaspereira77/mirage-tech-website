import { useTranslations } from 'next-intl';
import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorksHome } from "@/components/home/HowItWorksHome";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  const t = useTranslations('FAQ');
  
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [0, 1, 2].map((i) => ({
              "@type": "Question",
              "name": t(`items.${i}.question`),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`items.${i}.answer`)
              }
            }))
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
