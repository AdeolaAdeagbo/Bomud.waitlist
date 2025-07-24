import founderImage from "@/assets/founder-boluwatife.jpg";

export function FoundersSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Meet the Founders
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="Boluwatife Adeagbo, Co-founder of BOMUD"
                    className="w-48 h-48 md:w-full md:h-auto rounded-2xl object-cover mx-auto aspect-square"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-2 text-center md:text-left space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Boluwatife Adeagbo
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    Co-founder
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-foreground font-medium">
                    "We're building for families like ours."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Having witnessed firsthand how medical emergencies can devastate Nigerian families financially, 
                    we knew there had to be a better way. BOMUD is our solution — built with deep understanding 
                    of the challenges our people face every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}