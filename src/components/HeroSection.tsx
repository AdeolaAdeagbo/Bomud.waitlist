import { WaitlistForm } from "./WaitlistForm";
import heroImage from "@/assets/hero-nigerian-woman.jpg";
import bomudLogo from "@/assets/bomud-logo.png";

export function HeroSection() {
  return (
    <section className="relative section-padding pt-20 md:pt-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/30 via-background to-accent-light/20 pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center mb-6 animate-slide-in-left">
              <img src={bomudLogo} alt="BOMUD" className="h-12 w-auto hover-lift" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Save Today,{" "}
                <span className="text-gradient">Stay Covered Tomorrow</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                Build micro-savings for health emergencies with Nigeria's most trusted fintech-health platform
              </p>
            </div>

            <div className="animate-scale-in">
              <WaitlistForm size="lg" className="max-w-2xl" />
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover-lift">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="font-medium">2,500+ families joined</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2 hover-lift">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">Trusted & secure</span>
              </div>
            </div>
          </div>

          {/* Visual with smooth background blend */}
          <div className="relative lg:pl-8 animate-scale-in">
            {/* Background blend layer */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl blur-2xl opacity-60" />
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-glow">
                <img
                  src={heroImage}
                  alt="Nigerian woman confidently using BOMUD app for health savings"
                  className="w-full h-auto rounded-3xl object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
                />
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-primary/5 rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10 rounded-3xl" />
              </div>
              
              {/* Floating professional elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-success to-success-light rounded-2xl shadow-xl hidden md:block opacity-80 hover-lift glass-effect" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-accent to-primary-light rounded-xl shadow-xl hidden md:block opacity-80 hover-lift glass-effect" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}