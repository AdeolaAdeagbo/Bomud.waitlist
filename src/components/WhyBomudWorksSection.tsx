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
            Why BOMUD Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the challenges Nigerian families face with healthcare costs. 
            That's why we built something different.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-2xl ${feature.color} p-5 flex items-center justify-center`}>
                  <img src={feature.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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