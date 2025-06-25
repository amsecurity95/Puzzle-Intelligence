import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "CEO, TechStart Inc.",
      content: "Puzzle Business Group transformed our IT infrastructure and streamlined our operations. Their team's expertise and dedication to our success was evident from day one.",
      initials: "SM",
      bgColor: "bg-primary",
    },
    {
      name: "Michael Johnson",
      position: "Operations Manager, RetailPro",
      content: "Outstanding customer service consulting that helped us reduce response times by 60%. The training programs they developed for our team were exceptional.",
      initials: "MJ",
      bgColor: "bg-accent",
    },
    {
      name: "Lisa Davis",
      position: "Founder, GrowthCo",
      content: "Their strategic consulting helped us identify new market opportunities and optimize our processes. Revenue increased by 40% in the first year of partnership.",
      initials: "LD",
      bgColor: "bg-success",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="apple-text-medium text-foreground mb-6">What Our Clients Say</h2>
          <p className="apple-text-body">Don't just take our word for it - hear from the businesses we've helped transform.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="apple-card p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-2xl flex items-center justify-center text-white font-semibold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
