import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Briefcase, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Logo from "@/components/logo";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function Careers() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Logo variant="dark" size="lg" />
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                  Home
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => {
                  window.location.href = "/#about";
                }}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => {
                  window.location.href = "/#services";
                }}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => {
                  setShowContactForm(true);
                  setTimeout(() => {
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Contact
              </Button>
            </nav>

            {/* Mobile menu - Back to Home */}
            <div className="md:hidden">
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're building the future of business intelligence and technology solutions. 
              Join our remote-first team of passionate professionals making a global impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Remote First</h3>
                <p className="text-gray-600">Work from anywhere in the world. We believe in flexibility and work-life balance.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">Join a team of innovative thinkers and problem solvers working on cutting-edge projects.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Hours</h3>
                <p className="text-gray-600">Set your own schedule and work when you're most productive and creative.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Opportunities */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Current Opportunities
              </CardTitle>
              <CardDescription className="text-lg">
                We're always looking for talented individuals to join our team
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="mb-8">
                <Badge variant="outline" className="text-lg px-6 py-2 mb-4">
                  Remote Positions Available Worldwide
                </Badge>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">No Open Positions Currently</h4>
                <p className="text-gray-600 text-lg mb-6">
                  We don't have any active job openings at the moment, but we're always interested in connecting with talented professionals who share our vision.
                </p>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Most of our positions are remote-first</p>
                  <p>• We work with talent from around the globe</p>
                  <p>• Competitive compensation and benefits</p>
                  <p>• Opportunities for professional growth and development</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-medium text-gray-900">Interested in Future Opportunities?</h5>
                <p className="text-gray-600">
                  Contact our HR team to learn about upcoming positions and submit your information.
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      setShowContactForm(true);
                      // Scroll to contact form after a short delay to ensure it's rendered
                      setTimeout(() => {
                        const contactForm = document.getElementById('contact-form');
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    Contact HR
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Culture */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Culture & Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation at Our Core</h3>
              <p className="text-gray-600 mb-4">
                We're passionate about using technology to solve real business problems. Our team thrives on challenges and is always looking for better ways to serve our clients.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cutting-edge technology stack</li>
                <li>• Continuous learning opportunities</li>
                <li>• Innovation time for personal projects</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600 mb-4">
                We understand that our best work comes when we're healthy, happy, and fulfilled. That's why we prioritize flexibility and personal well-being.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible working hours</li>
                <li>• Remote-first environment</li>
                <li>• Mental health support</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Contact Form - Shows when Contact HR is clicked */}
      {showContactForm && (
        <div id="contact-form">
          <ContactSection />
        </div>
      )}

      <Footer />
    </div>
  );
}