import { WaitlistForm } from "./WaitlistForm";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-primary via-primary-light to-secondary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent)]" />
      
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Secure Your Family's Health Future Today
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Join thousands of Nigerian families building financial security for healthcare. Get early access and exclusive founding member benefits.
            </p>
          </div>

          <div className="animate-scale-in">
            <WaitlistForm className="max-w-2xl mx-auto" size="lg" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-3 hover-lift">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="font-medium">Early platform access</span>
            </div>
            <div className="flex items-center gap-3 hover-lift">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="font-medium">Founding member rewards</span>
            </div>
            <div className="flex items-center gap-3 hover-lift">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="font-medium">Nigerian-first support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}