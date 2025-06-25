import { PieChart, Laptop, Headphones, Globe, TrendingUp, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: PieChart,
      title: "Business Consulting",
      description: "Strategic guidance to optimize operations and drive growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&h=2160&q=80",
      features: ["Strategic Planning", "Process Optimization", "Market Analysis", "Performance Metrics"],
      bgColor: "bg-primary",
    },
    {
      icon: Laptop,
      title: "IT Support",
      description: "Comprehensive technical support services including troubleshooting, system setup, and remote assistance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&h=2160&q=80",
      features: ["24/7 Technical Support", "System Installation", "Network Security", "Remote Assistance"],
      bgColor: "bg-accent",
    },

    {
      icon: Globe,
      title: "Website Creation",
      description: "Professional web development services creating responsive, modern websites that drive business growth.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&h=2160&q=80",
      features: ["Responsive Design", "E-commerce Solutions", "SEO Optimization", "Custom Development"],
      bgColor: "bg-accent",
    },

  ];

  return (
    <section id="services" className="section-padding bg-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="apple-text-medium text-foreground mb-6">Our Services</h2>
          <p className="apple-text-body max-w-4xl mx-auto">
            Comprehensive solutions designed to address every aspect of your business operations, 
            from strategic planning to technical implementation and customer engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="apple-card p-8">
                <div className="mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-2xl w-full h-56 object-cover" 
                  />
                </div>
                <div className={`${service.bgColor}/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon className={`${service.bgColor.replace('bg-', 'text-')} h-8 w-8`} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-success mr-3 h-5 w-5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
