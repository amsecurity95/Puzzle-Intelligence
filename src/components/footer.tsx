
import { useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Footer() {
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with section anchor
      window.location.href = `/#${sectionId}`;
    }
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
  };

  return (
    <footer className="bg-foreground text-gray-100">
      <div className="container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Solving business puzzles with expert consulting, reliable IT support, 
              and exceptional customer service solutions.
            </p>

          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('/careers')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  Business Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  IT Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  Customer Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p className="text-base">&copy; 2024 Puzzle Business Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
