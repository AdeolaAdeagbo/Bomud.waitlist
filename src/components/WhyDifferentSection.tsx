import { CheckCircle } from "lucide-react";

export function WhyDifferentSection() {
  const features = [
    {
      title: "Built by public health and fintech engineers",
      description: "Our team combines deep healthcare expertise with cutting-edge financial technology to create solutions that actually work."
    },
    {
      title: "Community-first, not policy-first",
      description: "We believe in peer support and shared resilience, not bureaucratic insurance policies that put profits over people."
    },
    {
      title: "Rewards consistency over premiums",
      description: "Your commitment to regular saving is rewarded with better rates and community benefits, not penalized with higher costs."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Why BOMUD is Different
              </h2>
              <p className="text-lg text-muted-foreground">
                Traditional health insurance is broken. We're building something better—
                a platform that puts your financial health first.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-lighter rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  $200B
                </div>
                <div className="text-sm text-primary/80">
                  Average medical debt in the US
                </div>
              </div>
              
              <div className="bg-success-light rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">
                  85%
                </div>
                <div className="text-sm text-success/80">
                  Can't afford emergency care
                </div>
              </div>
              
              <div className="bg-accent-light rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  3.2%
                </div>
                <div className="text-sm text-accent/80">
                  Interest earned on savings
                </div>
              </div>
              
              <div className="bg-muted-darker rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-2">
                  $1
                </div>
                <div className="text-sm text-muted-foreground">
                  Minimum weekly savings
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <div className="text-center space-y-3">
                <div className="text-2xl font-semibold text-foreground">
                  Join the Movement
                </div>
                <div className="text-muted-foreground">
                  Be part of a community that's redefining healthcare financial security
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}