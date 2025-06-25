import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

export default function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background text-white overflow-hidden">
      {/* Animated Blue Background - Independently Moving Bubbles */}
      <div className="absolute inset-0 opacity-30">
        {/* Large slowly floating bubbles */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500 rounded-full filter blur-lg opacity-20 animate-float-gentle"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-blue-600 rounded-full filter blur-lg opacity-15 animate-float-gentle-delayed"></div>
        <div className="absolute top-1/5 left-4/5 w-36 h-36 bg-blue-400 rounded-full filter blur-lg opacity-18 animate-float-gentle-slow"></div>
        <div className="absolute top-4/5 left-1/5 w-44 h-44 bg-blue-700 rounded-full filter blur-lg opacity-16 animate-float-gentle-extra"></div>
        
        {/* Medium bubbles */}
        <div className="absolute top-1/3 left-1/5 w-20 h-20 bg-blue-400 rounded-full filter blur-md opacity-25 animate-float-smooth"></div>
        <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-blue-700 rounded-full filter blur-md opacity-20 animate-float-smooth-delayed"></div>
        <div className="absolute top-1/8 left-1/2 w-18 h-18 bg-blue-500 rounded-full filter blur-md opacity-22 animate-float-smooth-fast"></div>
        <div className="absolute top-5/6 left-3/4 w-22 h-22 bg-blue-600 rounded-full filter blur-md opacity-24 animate-float-smooth-reverse"></div>
        <div className="absolute top-2/5 left-1/8 w-26 h-26 bg-blue-300 rounded-full filter blur-md opacity-21 animate-float-smooth-wave"></div>
        
        {/* Small bubbles */}
        <div className="absolute top-1/6 left-3/5 w-12 h-12 bg-blue-300 rounded-full filter blur-sm opacity-30 animate-float-quick"></div>
        <div className="absolute top-4/5 left-1/6 w-16 h-16 bg-blue-500 rounded-full filter blur-sm opacity-25 animate-float-quick-delayed"></div>
        <div className="absolute top-1/2 left-4/5 w-14 h-14 bg-blue-600 rounded-full filter blur-sm opacity-28 animate-float-medium"></div>
        <div className="absolute top-1/7 left-1/7 w-10 h-10 bg-blue-400 rounded-full filter blur-sm opacity-32 animate-float-quick-bounce"></div>
        <div className="absolute top-3/5 left-5/6 w-8 h-8 bg-blue-300 rounded-full filter blur-sm opacity-35 animate-float-quick-spiral"></div>
        <div className="absolute top-2/7 left-3/7 w-11 h-11 bg-blue-500 rounded-full filter blur-sm opacity-29 animate-float-medium-drift"></div>
        <div className="absolute top-6/7 left-2/7 w-13 h-13 bg-blue-600 rounded-full filter blur-sm opacity-27 animate-float-quick-float"></div>
        <div className="absolute top-1/10 left-9/10 w-9 h-9 bg-blue-700 rounded-full filter blur-sm opacity-33 animate-float-medium-circle"></div>
        
        {/* Extra tiny bubbles for more atmosphere */}
        <div className="absolute top-1/12 left-1/3 w-6 h-6 bg-blue-400 rounded-full filter blur-sm opacity-20 animate-float-tiny"></div>
        <div className="absolute top-11/12 left-2/3 w-5 h-5 bg-blue-500 rounded-full filter blur-sm opacity-22 animate-float-tiny-delayed"></div>
        <div className="absolute top-1/3 left-1/12 w-7 h-7 bg-blue-300 rounded-full filter blur-sm opacity-24 animate-float-tiny-fast"></div>
        <div className="absolute top-2/3 left-11/12 w-4 h-4 bg-blue-600 rounded-full filter blur-sm opacity-26 animate-float-tiny-wave"></div>
      </div>
      
      <div className="container-padding w-full relative z-10">
        <div className="text-center">
          <h1 className="apple-text-large text-gray-800 mb-8 max-w-5xl mx-auto">
            Solving Business <span className="text-black">Puzzles</span><br />
            One Piece at a Time
          </h1>
          <p className="apple-text-body text-gray-700 mb-12 max-w-3xl mx-auto">
            Expert consulting, reliable IT support, and exceptional customer service solutions 
            to help your business thrive in today's competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => window.location.href = '/realizations'}
              className="apple-button text-lg px-10 py-5"
            >
              Explore Our Realizations
            </Button>
            <Button 
              onClick={() => window.location.href = '/ai-intelligence'}
              className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-5 flex items-center gap-3 rounded-full transition-all duration-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 100 100" fill="currentColor">
                <path d="M25 15 L75 15 Q85 15 85 25 L85 40 L60 40 L60 60 L85 60 L85 75 Q85 85 75 85 L25 85 Q15 85 15 75 L15 25 Q15 15 25 15 Z M35 25 L35 35 L50 35 L50 50 L35 50 L35 75 L75 75 L75 50 L60 50 L60 35 L75 35 L75 25 L35 25 Z"/>
              </svg>
              AI Intelligence
            </Button>
            <Button 
              onClick={onOpenWaitlist}
              variant="outline"
              className="rounded-full px-10 py-5 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Join Our Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
