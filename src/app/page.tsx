import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
