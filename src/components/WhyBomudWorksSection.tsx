import saveNairaIcon from "@/assets/save-naira-icon.jpg";
import supportIcon from "@/assets/support-icon.jpg";
import nigerianPrideIcon from "@/assets/nigerian-pride-icon.jpg";

export function WhyBomudWorksSection() {
  const features = [
    {
      title: "Save as low as ₦50/day",
      description: "Start building your health safety net with amounts that fit your budget.",
      icon: saveNairaIcon,
      color: "bg-primary-lighter"
    },
    {
      title: "Access support during emergencies",
      description: "Get the help you need when health emergencies arise, no approval delays.",
      icon: supportIcon,
      color: "bg-success-light"
    },
    {
      title: "Built for Nigerians, by Nigerians",
      description: "Designed with Nigerian families in mind, understanding our unique challenges.",
      icon: nigerianPrideIcon,
      color: "bg-accent-light"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Why Leading Families Choose BOMUD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Experience the difference of Nigeria's first fintech-health platform built specifically for Nigerian families and their unique healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center h-full hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-3xl ${feature.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <img src={feature.icon} alt="" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}