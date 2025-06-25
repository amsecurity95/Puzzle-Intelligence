import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PoweredByFooter from "@/components/powered-by-footer";
import Footer from "@/components/footer";
import { ExternalLink, Code, Smartphone, Globe, Database, Shield, Zap, Users, Eye, Download, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Realizations() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [templatePreviewModal, setTemplatePreviewModal] = useState(false);
  const [consultationModal, setConsultationModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const { toast } = useToast();

  const handleProjectDetails = (project: any) => {
    // Navigate to the appropriate showroom platform
    const platformRoutes: { [key: string]: string } = {
      "E-Commerce Platform": "/template/ecommerce",
      "Mobile Banking App": "/template/banking", 
      "Healthcare Management System": "/template/healthcare",
      "Real Estate Portal": "/template/realestate",
      "Inventory Management System": "/template/inventory",
      "Cybersecurity Dashboard": "/template/cybersecurity",
      "Restaurant Website": "/template/restaurant",
      "Fitness Center": "/template/fitness",
      "Business Website": "/template/business"
    };
    
    const route = platformRoutes[project.title];
    if (route) {
      window.location.href = route;
    } else {
      // Fallback for other projects
      setSelectedProject(project);
      toast({
        title: "Project Details",
        description: `Loading detailed information for ${project.title}...`,
      });
    }
  };

  const handleTemplatePreview = (template: any) => {
    // Navigate to the full template page
    window.open(template.demoUrl, '_blank');
  };

  const handleStartProject = () => {
    setProjectModal(true);
  };

  const handleConsultation = () => {
    setConsultationModal(true);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProjectModal(false);
    toast({
      title: "Project Request Submitted!",
      description: "We'll review your requirements and contact you within 24 hours with a detailed proposal.",
    });
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationModal(false);
    toast({
      title: "Consultation Scheduled!",
      description: "We'll contact you within 2 business hours to schedule your free consultation session.",
    });
  };
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Website Development",
      description: "Modern e-commerce platform with advanced analytics, inventory management, and payment processing",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      status: "Live",
      icon: Globe
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions",
      technologies: ["React Native", "Firebase", "Biometric API", "Encryption"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      status: "In Development",
      icon: Smartphone
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "IT Solutions",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine",
      technologies: ["Vue.js", "Express", "MongoDB", "WebRTC"],
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      status: "Live",
      icon: Users
    },
    {
      id: 4,
      title: "Real Estate Portal",
      category: "Website Development",
      description: "Interactive real estate platform with virtual tours, mortgage calculators, and agent matching",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Maps API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      status: "Live",
      icon: Globe
    },
    {
      id: 5,
      title: "Inventory Management System",
      category: "Business Solutions",
      description: "Advanced inventory management platform with stock tracking, automated alerts, and supplier management",
      technologies: ["React", "Node.js", "PostgreSQL", "Analytics"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      status: "Live",
      icon: Database
    },
    {
      id: 6,
      title: "Cybersecurity Dashboard",
      category: "IT Solutions",
      description: "Advanced security monitoring dashboard with threat detection, incident response, and compliance reporting",
      technologies: ["React", "Python", "Elasticsearch", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      status: "Live",
      icon: Shield
    }
  ];

  const templates = [
    {
      id: 1,
      name: "Restaurant Website Template",
      description: "Complete restaurant website with menu, reservations, and contact features",
      preview: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      features: ["Interactive Menu", "Reservation System", "Contact Forms", "Mobile Responsive"],
      demoUrl: "/template/restaurant",
      previewContent: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0; background: #f8fafc;">
          <!-- Header -->
          <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 0;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center;">
              <h1 style="margin: 0; font-size: 1.5rem; font-weight: 700;">Corporate Solutions</h1>
              <nav style="display: flex; gap: 2rem;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </nav>
            </div>
          </header>
          
          <!-- Hero Section -->
          <section style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover; color: white; padding: 4rem 0; text-align: center;">
            <div style="max-width: 800px; margin: 0 auto; padding: 0 2rem;">
              <h2 style="font-size: 3rem; margin-bottom: 1rem; font-weight: 700;">Transform Your Business</h2>
              <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">Leading corporate solutions for the modern enterprise</p>
              <button style="background: white; color: #667eea; padding: 1rem 2rem; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 1.1rem; cursor: pointer;">Get Started</button>
            </div>
          </section>
          
          <!-- Services -->
          <section style="padding: 4rem 0; background: white;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
              <h3 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #1f2937;">Our Services</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                  <h4 style="color: #667eea; margin-bottom: 1rem;">Consulting</h4>
                  <p style="color: #6b7280;">Strategic business consulting services</p>
                </div>
                <div style="padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                  <h4 style="color: #667eea; margin-bottom: 1rem;">Technology</h4>
                  <p style="color: #6b7280;">Cutting-edge technology solutions</p>
                </div>
                <div style="padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                  <h4 style="color: #667eea; margin-bottom: 1rem;">Support</h4>
                  <p style="color: #6b7280;">24/7 professional support services</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      `
    },
    {
      id: 2,
      name: "Fitness Center Template",
      description: "Complete fitness gym website with membership plans, class schedules, and trainer profiles",
      preview: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      features: ["Membership Plans", "Class Booking", "Trainer Profiles", "Interactive Forms"],
      demoUrl: "/template/fitness",
      previewContent: `
        <div style="font-family: 'Georgia', serif; margin: 0; padding: 0; background: #fefefe;">
          <!-- Header -->
          <header style="background: #2d1810; color: #f7f3f0; padding: 1rem 0;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center;">
              <h1 style="margin: 0; font-size: 2rem; color: #d4a574;">Bella Vista</h1>
              <nav style="display: flex; gap: 2rem;">
                <a href="#" style="color: #f7f3f0; text-decoration: none;">Menu</a>
                <a href="#" style="color: #f7f3f0; text-decoration: none;">Reservations</a>
                <a href="#" style="color: #f7f3f0; text-decoration: none;">About</a>
                <a href="#" style="color: #f7f3f0; text-decoration: none;">Contact</a>
              </nav>
            </div>
          </header>
          
          <!-- Hero Section -->
          <section style="background: linear-gradient(rgba(45,24,16,0.7), rgba(45,24,16,0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3') center/cover; color: white; padding: 6rem 0; text-align: center;">
            <div style="max-width: 800px; margin: 0 auto; padding: 0 2rem;">
              <h2 style="font-size: 3.5rem; margin-bottom: 1rem; color: #d4a574;">Authentic Italian Cuisine</h2>
              <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">Experience the finest flavors of Italy in an elegant atmosphere</p>
              <button style="background: #d4a574; color: #2d1810; padding: 1rem 2rem; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 1.1rem; cursor: pointer; margin-right: 1rem;">Reserve Table</button>
              <button style="background: transparent; color: #d4a574; padding: 1rem 2rem; border: 2px solid #d4a574; border-radius: 0.5rem; font-weight: 600; font-size: 1.1rem; cursor: pointer;">View Menu</button>
            </div>
          </section>
          
          <!-- Featured Dishes -->
          <section style="padding: 4rem 0; background: #f9f7f4;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
              <h3 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #2d1810;">Chef's Specialties</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="height: 200px; background: linear-gradient(45deg, #d4a574, #b8956a);"></div>
                  <div style="padding: 1.5rem;">
                    <h4 style="color: #2d1810; margin-bottom: 0.5rem;">Osso Buco alla Milanese</h4>
                    <p style="color: #6b7280; margin-bottom: 1rem;">Traditional braised veal shanks with saffron risotto</p>
                    <span style="color: #d4a574; font-weight: 600; font-size: 1.25rem;">$34</span>
                  </div>
                </div>
                <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="height: 200px; background: linear-gradient(45deg, #d4a574, #b8956a);"></div>
                  <div style="padding: 1.5rem;">
                    <h4 style="color: #2d1810; margin-bottom: 0.5rem;">Fresh Seafood Linguine</h4>
                    <p style="color: #6b7280; margin-bottom: 1rem;">House-made pasta with Mediterranean seafood</p>
                    <span style="color: #d4a574; font-weight: 600; font-size: 1.25rem;">$28</span>
                  </div>
                </div>
                <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="height: 200px; background: linear-gradient(45deg, #d4a574, #b8956a);"></div>
                  <div style="padding: 1.5rem;">
                    <h4 style="color: #2d1810; margin-bottom: 0.5rem;">Tiramisu della Casa</h4>
                    <p style="color: #6b7280; margin-bottom: 1rem;">Classic Italian dessert made fresh daily</p>
                    <span style="color: #d4a574; font-weight: 600; font-size: 1.25rem;">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `
    },
    {
      id: 3,
      name: "Healthcare Center Template",
      description: "Professional healthcare website with appointment booking, doctor profiles, and services",
      preview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      features: ["Appointment Booking", "Doctor Profiles", "Service Information", "Contact Forms"],
      demoUrl: "/template/healthcare",
      previewContent: `Healthcare template preview content here...`
    },
    {
      id: 4,
      name: "Corporate Business Template",
      description: "Professional business consulting website with services, team profiles, and client testimonials",
      preview: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      features: ["Service Showcase", "Team Profiles", "Client Testimonials", "Contact Forms"],
      demoUrl: "/template/business",
      previewContent: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0; background: #0a0a0a; color: #ffffff;">
          <!-- Header -->
          <header style="background: #0a0a0a; border-bottom: 1px solid #1f1f1f; padding: 1rem 0; position: sticky; top: 0; z-index: 100;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center;">
              <h1 style="margin: 0; font-size: 1.5rem; font-weight: 700; background: linear-gradient(135deg, #ff6b6b, #4ecdc4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">CreativeStudio</h1>
              <nav style="display: flex; gap: 2rem;">
                <a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Work</a>
                <a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">About</a>
                <a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Services</a>
                <a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Contact</a>
              </nav>
            </div>
          </header>
          
          <!-- Hero Section -->
          <section style="padding: 6rem 0; text-align: center; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);">
            <div style="max-width: 900px; margin: 0 auto; padding: 0 2rem;">
              <h2 style="font-size: 4rem; margin-bottom: 1.5rem; font-weight: 800; line-height: 1.1; background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">We Create Digital Experiences</h2>
              <p style="font-size: 1.25rem; margin-bottom: 3rem; color: #999999; max-width: 600px; margin-left: auto; margin-right: auto;">Award-winning creative agency specializing in brand identity, web design, and digital innovation</p>
              <button style="background: linear-gradient(135deg, #ff6b6b, #4ecdc4); color: white; padding: 1rem 2.5rem; border: none; border-radius: 2rem; font-weight: 600; font-size: 1.1rem; cursor: pointer; margin-right: 1rem; transition: transform 0.3s;">View Our Work</button>
              <button style="background: transparent; color: #ffffff; padding: 1rem 2.5rem; border: 2px solid #333333; border-radius: 2rem; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: all 0.3s;">Start Project</button>
            </div>
          </section>
          
          <!-- Portfolio Grid -->
          <section style="padding: 4rem 0; background: #0a0a0a;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
              <h3 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #ffffff; font-weight: 700;">Featured Projects</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                <div style="background: #1a1a1a; border-radius: 1rem; overflow: hidden; transition: transform 0.3s; border: 1px solid #2a2a2a;">
                  <div style="height: 250px; background: linear-gradient(135deg, #ff6b6b, #ff8e8e); position: relative;">
                    <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem;">
                      <h4 style="color: white; margin: 0; font-size: 1.25rem; font-weight: 600;">Brand Identity Design</h4>
                    </div>
                  </div>
                  <div style="padding: 1.5rem;">
                    <p style="color: #999999; margin-bottom: 1rem;">Complete brand identity for tech startup including logo, guidelines, and digital assets</p>
                    <span style="color: #4ecdc4; font-size: 0.875rem; font-weight: 500;">BRANDING • UI/UX</span>
                  </div>
                </div>
                <div style="background: #1a1a1a; border-radius: 1rem; overflow: hidden; transition: transform 0.3s; border: 1px solid #2a2a2a;">
                  <div style="height: 250px; background: linear-gradient(135deg, #4ecdc4, #45b7d1); position: relative;">
                    <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem;">
                      <h4 style="color: white; margin: 0; font-size: 1.25rem; font-weight: 600;">E-commerce Platform</h4>
                    </div>
                  </div>
                  <div style="padding: 1.5rem;">
                    <p style="color: #999999; margin-bottom: 1rem;">Modern e-commerce platform with custom checkout flow and inventory management</p>
                    <span style="color: #4ecdc4; font-size: 0.875rem; font-weight: 500;">WEB DESIGN • DEVELOPMENT</span>
                  </div>
                </div>
                <div style="background: #1a1a1a; border-radius: 1rem; overflow: hidden; transition: transform 0.3s; border: 1px solid #2a2a2a;">
                  <div style="height: 250px; background: linear-gradient(135deg, #45b7d1, #96ceb4); position: relative;">
                    <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem;">
                      <h4 style="color: white; margin: 0; font-size: 1.25rem; font-weight: 600;">Mobile App Design</h4>
                    </div>
                  </div>
                  <div style="padding: 1.5rem;">
                    <p style="color: #999999; margin-bottom: 1rem;">iOS and Android app design for fitness tracking with gamification elements</p>
                    <span style="color: #4ecdc4; font-size: 0.875rem; font-weight: 500;">MOBILE • UX DESIGN</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800";
      case "In Development": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Realizations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our portfolio of successful projects, innovative solutions, and cutting-edge templates 
              that showcase our expertise in web development, mobile apps, and IT solutions.
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <Button variant="outline" className="apple-button-outline">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Project Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the diverse range of projects we've delivered for our clients across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.id} className="apple-card overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleProjectDetails(item)}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Website Templates Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Website Templates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional, responsive website templates designed to help businesses establish their online presence quickly and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="apple-card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={template.preview} 
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary"
                      onClick={() => handleTemplatePreview(template)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview Template
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription className="text-base">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {template.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleTemplatePreview(template)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Live Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our expert development team and proven track record of success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleStartProject}
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleConsultation}
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Template Preview Modal */}
      <Dialog open={templatePreviewModal} onOpenChange={setTemplatePreviewModal}>
        <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="flex items-center justify-between">
              <span>Template Preview: {selectedTemplate?.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTemplatePreviewModal(false)}
              >
                Close Preview
              </Button>
            </DialogTitle>
            <DialogDescription>
              Live preview of the {selectedTemplate?.name} template
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            {selectedTemplate && (
              <iframe
                srcDoc={selectedTemplate.previewContent}
                className="w-full h-[70vh] border-0"
                title={`Preview of ${selectedTemplate.name}`}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Start Project Modal */}
      <Dialog open={projectModal} onOpenChange={setProjectModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Start Your Project</DialogTitle>
            <DialogDescription>
              Tell us about your project requirements and we'll provide you with a detailed proposal and timeline.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Full Name</Label>
                <Input id="project-name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-email">Email</Label>
                <Input id="project-email" type="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-company">Company</Label>
              <Input id="project-company" placeholder="Enter your company name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-type">Project Type</Label>
              <select id="project-type" className="w-full p-2 border rounded-md" required>
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="it-solution">IT Solution</option>
                <option value="template">Custom Template</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-budget">Budget Range</Label>
              <select id="project-budget" className="w-full p-2 border rounded-md" required>
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-description">Project Description</Label>
              <Textarea 
                id="project-description" 
                placeholder="Describe your project requirements, goals, and any specific features you need..." 
                rows={4}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-timeline">Desired Timeline</Label>
              <Input id="project-timeline" placeholder="e.g., 3 months, ASAP, flexible" />
            </div>
            <div className="flex gap-2 pt-4">
              <Button type="submit" className="flex-1">Submit Project Request</Button>
              <Button type="button" variant="outline" onClick={() => setProjectModal(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Consultation Modal */}
      <Dialog open={consultationModal} onOpenChange={setConsultationModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Schedule Free Consultation</DialogTitle>
            <DialogDescription>
              Book a free 30-minute consultation to discuss your project needs and get expert advice.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleConsultationSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="consult-name">Full Name</Label>
              <Input id="consult-name" placeholder="Enter your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consult-email">Email</Label>
              <Input id="consult-email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consult-phone">Phone Number</Label>
              <Input id="consult-phone" type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consult-company">Company</Label>
              <Input id="consult-company" placeholder="Enter your company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consult-interest">What are you interested in?</Label>
              <select id="consult-interest" className="w-full p-2 border rounded-md" required>
                <option value="">Select your interest</option>
                <option value="website">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="template">Website Templates</option>
                <option value="ai-solutions">AI Solutions</option>
                <option value="general">General Discussion</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="consult-message">Additional Information</Label>
              <Textarea 
                id="consult-message" 
                placeholder="Tell us about your specific needs or questions..." 
                rows={3}
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button type="submit" className="flex-1">Schedule Consultation</Button>
              <Button type="button" variant="outline" onClick={() => setConsultationModal(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
      <PoweredByFooter />
    </div>
  );
}