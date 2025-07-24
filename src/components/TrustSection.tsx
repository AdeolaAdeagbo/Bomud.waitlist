import { Quote } from "lucide-react";

export function TrustSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              "I've seen too many people suffer without a backup plan. BOMUD fixes that."
            </blockquote>

            {/* Attribution */}
            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">
                Adeola Adebayo
              </div>
              <div className="text-muted-foreground">
                Co-founder & Public Health Engineer
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Security First
                </div>
                <div className="text-muted-foreground text-sm">
                  Bank-level encryption and FDIC-insured partner banks
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-sm font-semibold text-success uppercase tracking-wide">
                  Transparent Fees
                </div>
                <div className="text-muted-foreground text-sm">
                  No hidden charges or surprise costs, ever
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Mission Driven
                </div>
                <div className="text-muted-foreground text-sm">
                  Building health equity through financial accessibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}