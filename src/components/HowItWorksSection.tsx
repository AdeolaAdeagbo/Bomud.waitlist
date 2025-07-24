import saveIcon from "@/assets/save-naira-icon.jpg";
import supportIcon from "@/assets/support-icon.jpg";
import accessIcon from "@/assets/access-icon.jpg";
import familySavings from "@/assets/family-savings.jpg";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Save regularly",
      description: "Set up automatic micro-savings starting from ₦100 daily. Every naira counts towards your health security.",
      icon: saveIcon,
      color: "bg-primary-lighter"
    },
    {
      number: "02", 
      title: "Get support when needed",
      description: "Access your funds instantly during health emergencies. We're here when you need us most.",
      icon: supportIcon,
      color: "bg-success-light"
    },
    {
      number: "03",
      title: "Withdraw or roll over anytime",
      description: "Full control over your savings. Use them for emergencies or let them grow for the future.",
      icon: accessIcon,
      color: "bg-accent-light"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            How BOMUD Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building your health safety net shouldn't be complicated. 
            Here's how we make it simple and effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl ${step.color} p-4 flex items-center justify-center`}>
                    <img src={step.icon} alt="" className="w-8 h-8 object-contain" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={familySavings}
              alt="Nigerian family planning their health savings together"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}