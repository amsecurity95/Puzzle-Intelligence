import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import SoftwareDeveloperSection from "@/components/software-developer-section";
import ContactSection from "@/components/contact-section";

import Footer from "@/components/footer";
import PoweredByFooter from "@/components/powered-by-footer";
import WaitlistModal from "@/components/waitlist-modal";
import ITSupportChat from "@/components/it-support-chat";
import { useState } from "react";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onOpenWaitlist={() => setIsWaitlistOpen(true)} 
        onOpenSupport={() => setIsSupportChatOpen(true)}
      />
      <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <section className="section-padding bg-muted/20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="apple-text-medium text-foreground mb-6">
              Why Choose Puzzle Business Group?
            </h2>
            <p className="apple-text-body max-w-4xl mx-auto">
              We understand that every business is unique, with its own set of challenges and opportunities. 
              Our integrated approach combines strategic consulting, technical expertise, and customer-centric solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="apple-card p-10 text-center">
              <div className="bg-primary/10 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic Innovation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Cutting-edge solutions tailored to your business needs and market demands.</p>
            </div>
            <div className="apple-card p-10 text-center">
              <div className="bg-accent/10 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Expert Team</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Seasoned professionals with decades of combined industry experience.</p>
            </div>
            <div className="apple-card p-10 text-center">
              <div className="bg-success/10 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Proven Results</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Track record of delivering measurable improvements and ROI for our clients.</p>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <SoftwareDeveloperSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <PoweredByFooter />
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      <ITSupportChat 
        isOpen={isSupportChatOpen} 
        onClose={() => setIsSupportChatOpen(false)} 
      />
    </div>
  );
}
