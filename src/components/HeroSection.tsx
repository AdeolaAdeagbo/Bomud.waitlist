import { WaitlistForm } from "./WaitlistForm";
import heroAbstract from "@/assets/hero-abstract.jpg";

export function HeroSection() {
  return (
    <section className="section-padding pt-20 md:pt-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Save small.{" "}
                <span className="text-gradient">Stay ready.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                BOMUD helps you build a health safety net through tiny, consistent savings. 
                No complex plans. Just peace of mind.
              </p>
            </div>

            <WaitlistForm size="lg" className="max-w-2xl" />
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-xs font-semibold text-success-foreground">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-accent-foreground">
                  K
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
                  M
                </div>
              </div>
              <span>Join 1,200+ people already on the waitlist</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-lighter to-accent-light p-8">
              <img
                src={heroAbstract}
                alt="Health resilience platform visualization"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-2xl shadow-lg hidden md:block" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent rounded-xl shadow-lg hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}