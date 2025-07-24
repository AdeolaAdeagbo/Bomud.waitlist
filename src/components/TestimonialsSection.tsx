import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This app saved my family ₦20,000 when my daughter needed urgent care.",
      name: "Aisha M.",
      location: "Lagos"
    },
    {
      quote: "Finally, a savings app that understands how we actually live and spend money.",
      name: "Emeka O.",
      location: "Abuja"
    },
    {
      quote: "I love that I can start with just ₦100 a day. It's not intimidating like other financial apps.",
      name: "Funmi S.",
      location: "Ibadan"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from Nigerian families who are taking control of their health finances.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-primary" />
                
                <p className="text-foreground leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
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