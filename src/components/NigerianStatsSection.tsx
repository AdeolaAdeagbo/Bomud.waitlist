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
      number: "₦100",
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
            The Reality for Nigerian Families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare costs shouldn't bankrupt families. Here's why we need a better solution.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-2xl p-8 text-center`}>
              <div className="space-y-3">
                <div className="text-4xl md:text-5xl font-bold">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90 leading-tight">
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