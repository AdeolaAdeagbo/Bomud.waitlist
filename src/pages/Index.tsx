import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyDifferentSection } from "@/components/WhyDifferentSection";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <WhyDifferentSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
