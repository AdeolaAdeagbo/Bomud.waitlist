import { WaitlistForm } from "./WaitlistForm";
import heroImage from "@/assets/hero-nigerian-woman.jpg";
import bomudLogo from "@/assets/bomud-logo.png";

export function HeroSection() {
  return (
    <section className="section-padding pt-20 md:pt-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <img src={bomudLogo} alt="BOMUD" className="h-12 w-auto" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Save Today,{" "}
                <span className="text-gradient">Stay Covered Tomorrow</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
                Build micro-savings for health emergencies with Nigeria's most trusted fintech-health platform
              </p>
            </div>

            <WaitlistForm size="lg" className="max-w-2xl" />
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="font-medium">2,500+ families joined</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">Trusted & secure</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Nigerian woman confidently using BOMUD app for health savings"
                className="w-full h-auto rounded-2xl object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-2xl shadow-lg hidden md:block opacity-90" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent rounded-xl shadow-lg hidden md:block opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}