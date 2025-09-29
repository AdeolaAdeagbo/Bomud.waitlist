export function NigerianStatsSection() {
  const stats = [
    {
      number: "<5%",
      label: "of Nigerians have health insurance",
      color: "bg-primary text-primary-foreground"
    },
    {
      number: "70%",
      label: "of medical expenses are paid out of pocket",
      color: "bg-accent text-accent-foreground"
    },
    {
      number: "₦50",
      label: "minimum daily savings to get started",
      color: "bg-success text-success-foreground"
    },
    {
      number: "0",
      label: "paperwork required to join",
      color: "bg-muted-darker text-foreground"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            The Healthcare Challenge in Nigeria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Understanding the urgent need for accessible healthcare financing solutions across Nigerian families.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-scale-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90 leading-tight font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}