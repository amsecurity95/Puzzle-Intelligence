import { Button } from "@/components/ui/button";
import { Code, Database, Server, Smartphone, Globe, Shield } from "lucide-react";

export default function SoftwareDeveloperSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Full-stack web and mobile applications tailored to your business requirements",
      technologies: ["React", "Node.js", "Python", "TypeScript"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management for scalable applications",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud deployments with modern DevOps practices",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation and testing",
      technologies: ["REST", "GraphQL", "OpenAPI", "Postman"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Performance",
      description: "Code auditing, security implementation, and performance optimization",
      technologies: ["OAuth", "JWT", "SSL/TLS", "Performance Monitoring"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a complete e-commerce solution with payment processing, inventory management, and analytics dashboard",
      stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: "40% increase in conversion rate"
    },
    {
      title: "Healthcare Management System",
      description: "Developed a HIPAA-compliant patient management system with appointment scheduling and telemedicine features",
      stack: ["Vue.js", "Python", "MongoDB", "WebRTC"],
      metrics: "50% reduction in administrative overhead"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Created real-time financial analytics platform with advanced reporting and data visualization",
      stack: ["React", "TypeScript", "Express", "Redis"],
      metrics: "60% faster decision-making process"
    }
  ];

  return (
    <section id="software-development" className="section-padding bg-muted/20">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="apple-text-medium text-foreground mb-6">
            Software Development Excellence
          </h2>
          <p className="apple-text-body max-w-4xl mx-auto">
            From concept to deployment, we deliver robust, scalable software solutions 
            that drive business growth and innovation. Our development team combines 
            technical expertise with business acumen to create applications that truly make a difference.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="apple-card p-8 group hover:shadow-lg transition-all duration-300">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Recent Development Projects
            </h3>
            <p className="apple-text-body max-w-2xl mx-auto">
              Explore some of our latest software development successes and the impact they've made for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="apple-card p-8 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-success/10 text-success px-4 py-2 rounded-lg text-sm font-medium">
                  Result: {project.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="apple-card p-12 text-center bg-gradient-to-r from-primary/5 to-accent/5">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Build Your Next Software Solution?
          </h3>
          <p className="apple-text-body mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom development plan 
            that aligns with your business goals and technical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="apple-button text-lg px-8 py-3"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-3"
              onClick={() => window.location.href = '/realizations'}
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}