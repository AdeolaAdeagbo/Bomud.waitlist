import { HeroSection } from "@/components/HeroSection";
import { WhyBomudWorksSection } from "@/components/WhyBomudWorksSection";
import { NigerianStatsSection } from "@/components/NigerianStatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FoundersSection } from "@/components/FoundersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyBomudWorksSection />
      <NigerianStatsSection />
      <HowItWorksSection />
      <FoundersSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
