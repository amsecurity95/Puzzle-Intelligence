import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Users, Target, TrendingUp, Award, Phone, Mail, MapPin, CheckCircle, Star } from "lucide-react";

export default function BusinessTemplate() {
  const [contactForm, setContactForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    service: "", 
    message: ""
  });

  const services = [
    {
      icon: Target,
      name: "Strategic Consulting",
      description: "Expert guidance to help your business achieve its strategic objectives and competitive advantage",
      features: ["Market Analysis", "Growth Strategy", "Risk Assessment", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      name: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions and digital workflows",
      features: ["Process Automation", "Cloud Migration", "Digital Analytics", "System Integration"]
    },
    {
      icon: Users,
      name: "Team Development",
      description: "Build high-performing teams through training, coaching, and organizational development",
      features: ["Leadership Training", "Skills Development", "Team Building", "Performance Management"]
    },
    {
      icon: Award,
      name: "Quality Assurance",
      description: "Ensure excellence in all aspects of your business operations and customer experience",
      features: ["Process Improvement", "Quality Standards", "Compliance", "Customer Satisfaction"]
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      experience: "15+ years",
      expertise: "Strategic Leadership, Business Development",
      bio: "Sarah founded the company with a vision to help businesses achieve sustainable growth through strategic consulting."
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      experience: "12+ years",
      expertise: "Digital Transformation, IT Strategy",
      bio: "Michael leads our technology initiatives and helps clients navigate digital transformation successfully."
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Consultant",
      experience: "10+ years",
      expertise: "Operations, Process Optimization",
      bio: "Emily specializes in operational excellence and has helped hundreds of companies streamline their processes."
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "TechVision Inc.",
      role: "CEO",
      content: "The strategic consulting services transformed our business approach. We saw 40% growth within the first year.",
      rating: 5
    },
    {
      name: "Jennifer Lopez",
      company: "Global Retail Corp",
      role: "Operations Director",
      content: "Their digital transformation expertise helped us modernize our entire operation. Highly recommended!",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "Innovation Labs",
      role: "Founder",
      content: "Professional, knowledgeable, and results-driven. They delivered exactly what they promised.",
      rating: 5
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">BusinessPro Solutions</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
              <a href="#team" className="text-gray-600 hover:text-blue-600 font-medium">Team</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold leading-tight mb-6">
                Transform Your Business With 
                <span className="text-blue-300"> Strategic Expertise</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                We help ambitious companies achieve sustainable growth through strategic consulting, 
                digital transformation, and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">500+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">15+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">97% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions designed to drive growth, efficiency, and competitive advantage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">About BusinessPro Solutions</h3>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, BusinessPro Solutions has been at the forefront of business transformation, 
                helping companies navigate complex challenges and unlock their full potential.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of seasoned consultants brings deep industry expertise and proven methodologies 
                to deliver measurable results for our clients across various sectors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
              <p className="text-lg mb-6 text-blue-100">
                To empower businesses with strategic insights and innovative solutions that drive sustainable growth and competitive advantage.
              </p>
              <h4 className="text-2xl font-bold mb-6">Our Vision</h4>
              <p className="text-lg text-blue-100">
                To be the trusted partner of choice for businesses seeking transformation and excellence in an ever-evolving marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry experts with decades of combined experience in business strategy and transformation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div>
                      <Badge variant="secondary" className="mb-2">{member.experience}</Badge>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{member.expertise}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">Let's Transform Your Business Together</h3>
              <p className="text-xl text-blue-100 mb-8">
                Ready to take your business to the next level? Contact us for a free consultation 
                and discover how we can help you achieve your goals.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-200">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-200">info@businessprosolutions.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-blue-200">123 Business District<br />Corporate Plaza, Suite 400<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Get Your Free Consultation</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input 
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Company</label>
                    <Input 
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Service Interest</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="strategic">Strategic Consulting</option>
                      <option value="digital">Digital Transformation</option>
                      <option value="team">Team Development</option>
                      <option value="quality">Quality Assurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us about your business needs and challenges..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Request Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">BusinessPro Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through strategic expertise and innovative solutions.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                  Twitter
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Strategic Consulting</p>
                <p>Digital Transformation</p>
                <p>Team Development</p>
                <p>Quality Assurance</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <p>About Us</p>
                <p>Our Team</p>
                <p>Case Studies</p>
                <p>Careers</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>+1 (555) 123-4567</p>
                <p>info@businessprosolutions.com</p>
                <p>123 Business District</p>
                <p>Corporate Plaza, Suite 400</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BusinessPro Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}