import { WaitlistForm } from "./WaitlistForm";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Ready to Secure Your Family's Health?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of Nigerian families who are taking control of their health finances. 
              Get early access and exclusive founding member benefits.
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