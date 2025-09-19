import boluwatifePhoto from "@/assets/boluwatife-adeagbo.jpg";
import favorPhoto from "@/assets/favor-martins.jpg";

export function FoundersSection() {
  const founders = [
    {
      name: "Boluwatife Adeagbo",
      role: "Co-founder",
      photo: boluwatifePhoto
    },
    {
      name: "Favor Martins",
      role: "Co-founder",
      photo: favorPhoto
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Meet the Founders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <div className="text-center space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {founders.map((founder, index) => (
                  <div key={index} className="space-y-4 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                      <img
                        src={founder.photo}
                        alt={`${founder.name}, ${founder.role} of BOMUD`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {founder.name}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 max-w-2xl mx-auto">
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
    </section>
  );
}