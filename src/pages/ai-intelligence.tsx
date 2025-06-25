import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PoweredByFooter from "@/components/powered-by-footer";
import Footer from "@/components/footer";
import { Brain, Smartphone, Globe, Zap, Users, TrendingUp, Rocket, Star } from "lucide-react";
import { useState } from "react";

export default function AIIntelligence() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [earlyAccessModalOpen, setEarlyAccessModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoModalOpen(false);
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
  };

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setEarlyAccessModalOpen(false);
    toast({
      title: "Early Access Request Submitted!",
      description: "You're now on our priority list. We'll notify you as soon as early access becomes available.",
    });
  };
  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Business Analytics",
      description: "Advanced machine learning algorithms that analyze your business data to identify trends, predict outcomes, and recommend optimization strategies.",
      status: "Available Now",
      badge: "Popular"
    },
    {
      icon: Zap,
      title: "Intelligent Process Automation",
      description: "Smart automation tools that learn from your workflows and continuously improve efficiency while reducing manual tasks.",
      status: "Available Now",
      badge: "New"
    },
    {
      icon: Users,
      title: "AI Customer Service Assistant",
      description: "Natural language processing technology that provides instant, accurate responses to customer inquiries 24/7.",
      status: "Available Now",
      badge: "Featured"
    },
    {
      icon: TrendingUp,
      title: "Predictive Market Intelligence",
      description: "AI-driven market analysis that forecasts trends, competitor movements, and opportunities before they happen.",
      status: "Coming Q2 2025",
      badge: "Coming Soon"
    }
  ];

  const projects = [
    {
      icon: Smartphone,
      title: "Safari Friend",
      description: "AI travel companion that provides personalized recommendations, real-time assistance, and seamless trip planning with a wide range of travel management capabilities.",
      features: ["Personalized Itineraries", "Real-time Travel Updates", "Local Recommendations", "Smart Booking Assistant"],
      status: "Beta Testing",
      image: "data:image/svg+xml;base64," + btoa(`
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#7C3AED;stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <!-- Background -->
          <rect width="800" height="600" fill="url(#bg)"/>
          
          <!-- Safari Friend Logo -->
          <g transform="translate(400,250)">
            <!-- Main character background -->
            <circle cx="0" cy="0" r="120" fill="#34D399" stroke="#1F2937" stroke-width="8"/>
            
            <!-- Character face -->
            <circle cx="0" cy="0" r="80" fill="#FFFFFF" stroke="#1F2937" stroke-width="6"/>
            
            <!-- Hat -->
            <ellipse cx="0" cy="-50" rx="70" ry="25" fill="#F59E0B" stroke="#1F2937" stroke-width="6"/>
            <ellipse cx="0" cy="-75" rx="50" ry="30" fill="#F59E0B" stroke="#1F2937" stroke-width="6"/>
            
            <!-- Eyes -->
            <circle cx="-25" cy="-15" r="8" fill="#1F2937"/>
            <circle cx="25" cy="-15" r="8" fill="#1F2937"/>
            
            <!-- Smile -->
            <path d="M -30 15 Q 0 40 30 15" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>
            
            <!-- Location pin -->
            <g transform="translate(80,-20)">
              <path d="M 0 -30 C -15 -30 -25 -20 -25 -5 C -25 10 0 30 0 30 C 0 30 25 10 25 -5 C 25 -20 15 -30 0 -30 Z" fill="#34D399" stroke="#1F2937" stroke-width="4"/>
              <circle cx="0" cy="-5" r="8" fill="#FFFFFF"/>
            </g>
          </g>
          

        </svg>
      `)
    },
    {
      icon: TrendingUp,
      title: "WiseWallet",
      description: "AI financial advisor offering comprehensive financial planning, investment insights, and personalized money management with a wide range of financial capabilities.",
      features: ["Investment Analysis", "Budget Optimization", "Risk Assessment", "Financial Planning"],
      status: "Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&h=2160&q=80"
    },
    {
      icon: Globe,
      title: "PuzzleCloud Platform",
      description: "Next-generation cloud platform that combines AI, automation, and analytics in one unified ecosystem. Built for scalability and designed for the future of business operations.",
      features: ["AI Workflow Builder", "Advanced Security", "Global CDN", "API Integration"],
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&h=2160&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <svg className="h-16 w-16 text-primary" viewBox="0 0 100 100" fill="currentColor">
                <path d="M25 15 L75 15 Q85 15 85 25 L85 40 L60 40 L60 60 L85 60 L85 75 Q85 85 75 85 L25 85 Q15 85 15 75 L15 25 Q15 15 25 15 Z M35 25 L35 35 L50 35 L50 50 L35 50 L35 75 L75 75 L75 50 L60 50 L60 35 L75 35 L75 25 L35 25 Z"/>
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Puzzle <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Harness the power of next-generation AI to transform your business operations. 
              From intelligent automation to predictive analytics, we're building the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setEarlyAccessModalOpen(true)}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Request Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setDemoModalOpen(true)}
              >
                <Star className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-background">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Next-Generation AI Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary artificial intelligence solutions designed to solve complex business puzzles 
              and unlock unprecedented growth opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-xl p-3">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                          <div className="flex gap-2">
                            <Badge variant={feature.badge === "Coming Soon" ? "secondary" : "default"}>
                              {feature.badge}
                            </Badge>
                            <Badge variant="outline">{feature.status}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Innovative Project Announcements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Groundbreaking mobile and web applications that will revolutionize how businesses 
              interact with AI-powered solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="group">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="mb-2">{project.status}</Badge>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                          <Icon className="h-6 w-6" />
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button 
                            onClick={() => setDemoModalOpen(true)}
                            className="flex-1"
                          >
                            <Rocket className="h-4 w-4 mr-2" />
                            Request Demo
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setEarlyAccessModalOpen(true)}
                            className="flex-1"
                          >
                            <Star className="h-4 w-4 mr-2" />
                            Early Access
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our early access program and be among the first to experience 
              the next generation of AI-powered business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setEarlyAccessModalOpen(true)}
              >
                Request Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setDemoModalOpen(true)}
              >
                Schedule Demo
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">AI Consultation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get expert advice on AI implementation for your business
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setConsultationModalOpen(true)}
                  >
                    Book Consultation
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Technology Brief</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download our comprehensive AI technology overview
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      // Create and download AI technology overview PDF
                      const content = `
# Comprehensive AI Technology Overview
## Puzzle Intelligence - AI Solutions

### Executive Summary
Our AI technology stack represents the cutting edge of artificial intelligence, combining machine learning, natural language processing, and computer vision to deliver transformative business solutions.

### Core Technologies

#### 1. Machine Learning Framework
- Advanced neural networks for pattern recognition
- Deep learning models for complex data analysis
- Predictive analytics for business intelligence
- Real-time learning and adaptation capabilities

#### 2. Natural Language Processing
- Conversational AI for customer interaction
- Document analysis and content generation
- Multi-language support and translation
- Sentiment analysis and intent recognition

#### 3. Computer Vision
- Image and video analysis
- Object detection and classification
- Facial recognition and biometric authentication
- Automated quality control systems

#### 4. Data Analytics
- Big data processing and visualization
- Real-time dashboard creation
- Predictive modeling and forecasting
- Business intelligence reporting

### Implementation Approach

#### Phase 1: Assessment (2-4 weeks)
- Current system analysis
- AI readiness evaluation
- Custom solution design
- ROI projection and timeline

#### Phase 2: Development (6-12 weeks)
- Custom AI model training
- System integration planning
- Security and compliance setup
- Testing and validation

#### Phase 3: Deployment (2-4 weeks)
- Production environment setup
- Staff training and onboarding
- Performance monitoring
- Continuous optimization

### Success Metrics
- 40% reduction in processing time
- 65% improvement in accuracy
- 50% cost savings on manual processes
- 90% user satisfaction rate

### Security & Compliance
- End-to-end encryption
- GDPR and CCPA compliance
- Regular security audits
- Data privacy protection

### Support & Maintenance
- 24/7 technical support
- Regular system updates
- Performance optimization
- Scalability planning

### Next Steps
Contact our AI specialists at info@puzzlebusinessgroup.com to schedule your personalized consultation and begin your AI transformation journey.

---
© 2024 Puzzle Business Group. All rights reserved.
                      `;
                      
                      const blob = new Blob([content], { type: 'text/plain' });
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = 'Puzzle-Intelligence-AI-Technology-Overview.txt';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(url);
                    }}
                  >
                    Download PDF
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Join Community</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with other AI enthusiasts and early adopters
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://www.reddit.com/r/artificial/', '_blank')}
                  >
                    Join Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      <Dialog open={demoModalOpen} onOpenChange={setDemoModalOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule a Demo</DialogTitle>
          <DialogDescription>
            Get a personalized demonstration of our AI solutions. We'll show you how our technology can transform your business.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDemoRequest} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-name">Full Name</Label>
            <Input id="demo-name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-company">Company</Label>
            <Input id="demo-company" placeholder="Enter your company name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-phone">Phone Number</Label>
            <Input id="demo-phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-message">What would you like to see in the demo?</Label>
            <Textarea 
              id="demo-message" 
              placeholder="Tell us about your specific needs or what features you're most interested in..." 
              rows={3}
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">Schedule Demo</Button>
            <Button type="button" variant="outline" onClick={() => setDemoModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

    {/* Early Access Modal */}
    <Dialog open={earlyAccessModalOpen} onOpenChange={setEarlyAccessModalOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Early Access</DialogTitle>
          <DialogDescription>
            Join our exclusive early access program and be among the first to experience our cutting-edge AI solutions.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleEarlyAccess} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="access-name">Full Name</Label>
            <Input id="access-name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="access-email">Email</Label>
            <Input id="access-email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="access-company">Company</Label>
            <Input id="access-company" placeholder="Enter your company name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="access-role">Your Role</Label>
            <Input id="access-role" placeholder="e.g., CEO, CTO, Business Owner" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="access-interest">What AI solutions interest you most?</Label>
            <Textarea 
              id="access-interest" 
              placeholder="Tell us about your business needs and which AI features would be most valuable..." 
              rows={3}
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">Request Early Access</Button>
            <Button type="button" variant="outline" onClick={() => setEarlyAccessModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

    {/* Consultation Booking Modal */}
    <Dialog open={consultationModalOpen} onOpenChange={setConsultationModalOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book AI Consultation</DialogTitle>
          <DialogDescription>
            Schedule a free 60-minute consultation with our AI experts to discuss your business needs and explore AI implementation opportunities.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => {
          e.preventDefault();
          toast({
            title: "Consultation Booked!",
            description: "We'll contact you within 24 hours to confirm your appointment.",
          });
          setConsultationModalOpen(false);
        }} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="consultation-name">Full Name</Label>
              <Input id="consultation-name" placeholder="Enter your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultation-company">Company</Label>
              <Input id="consultation-company" placeholder="Your company name" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="consultation-email">Email</Label>
              <Input id="consultation-email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultation-phone">Phone</Label>
              <Input id="consultation-phone" placeholder="Your phone number" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="consultation-industry">Industry</Label>
            <select id="consultation-industry" className="w-full p-2 border border-input rounded-md" required>
              <option value="">Select your industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="consultation-budget">Project Budget Range</Label>
            <select id="consultation-budget" className="w-full p-2 border border-input rounded-md" required>
              <option value="">Select budget range</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="consultation-goals">AI Implementation Goals</Label>
            <Textarea 
              id="consultation-goals" 
              placeholder="Describe what you hope to achieve with AI in your business..." 
              rows={3}
              required
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">Book Consultation</Button>
            <Button type="button" variant="outline" onClick={() => setConsultationModalOpen(false)}>
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