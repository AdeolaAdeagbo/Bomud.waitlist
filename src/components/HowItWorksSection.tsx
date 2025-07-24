import saveIcon from "@/assets/save-icon.jpg";
import growthIcon from "@/assets/growth-icon.jpg";
import accessIcon from "@/assets/access-icon.jpg";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Save consistently",
      description: "Set up automatic micro-savings that fit your budget. Start with as little as $1 per week.",
      icon: saveIcon,
      color: "bg-primary-lighter"
    },
    {
      number: "02", 
      title: "Earn interest + community support",
      description: "Your savings grow with competitive interest rates while you're part of a supportive health community.",
      icon: growthIcon,
      color: "bg-success-light"
    },
    {
      number: "03",
      title: "Withdraw when you need it",
      description: "Access your funds instantly for health emergencies or planned medical expenses. No approval needed.",
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-border z-0" 
                     style={{ transform: "translateX(-50%)" }} />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${step.color} p-4 flex items-center justify-center`}>
                    <img src={step.icon} alt="" className="w-8 h-8 object-contain" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl font-bold text-muted-foreground">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}