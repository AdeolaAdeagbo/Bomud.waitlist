import { WaitlistForm } from "./WaitlistForm";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Secure Your Family's Health Future Today
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-medium">
              Join thousands of Nigerian families building financial security for healthcare. Get early access and exclusive founding member benefits.
            </p>
          </div>

          <WaitlistForm className="max-w-2xl mx-auto" size="lg" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Early platform access</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Founding member rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Nigerian-first support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}