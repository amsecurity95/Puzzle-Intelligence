import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLocation } from "wouter";
import Logo from "@/components/logo";

interface NavigationProps {
  onOpenWaitlist: () => void;
  onOpenSupport?: () => void;
}

export default function Navigation({ onOpenWaitlist, onOpenSupport }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavigation = (item: any) => {
    if (item.isPage) {
      setLocation(`/${item.id}`);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
    { label: "Careers", id: "careers", isPage: true },
  ];

  return (
    <nav className="bg-foreground/95 glass-effect border-b border-primary/20 sticky top-0 z-50">
      <div className="container-padding">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo variant="light" size="lg" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    index === 0 ? 'text-gray-100' : 'text-gray-300'
                  } ${item.label === 'Puzzle Intelligence' ? 'flex items-center gap-2' : ''}`}
                >
                  {item.label === 'Puzzle Intelligence' && (
                    <svg className="h-4 w-4 text-primary" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M25 15 L75 15 Q85 15 85 25 L85 40 L60 40 L60 60 L85 60 L85 75 Q85 85 75 85 L25 85 Q15 85 15 75 L15 25 Q15 15 25 15 Z M35 25 L35 35 L50 35 L50 50 L35 50 L35 75 L75 75 L75 50 L60 50 L60 35 L75 35 L75 25 L35 25 Z"/>
                    </svg>
                  )}
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={onOpenSupport}
                variant="outline"
                className="apple-button-outline mr-3"
              >
                Free IT Support
              </Button>
              <Button 
                onClick={onOpenWaitlist}
                className="apple-button"
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className="text-left text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {item.label === 'Puzzle Intelligence' && (
                        <svg className="h-4 w-4 text-primary" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M25 15 L75 15 Q85 15 85 25 L85 40 L60 40 L60 60 L85 60 L85 75 Q85 85 75 85 L25 85 Q15 85 15 75 L15 25 Q15 15 25 15 Z M35 25 L35 35 L50 35 L50 50 L35 50 L35 75 L75 75 L75 50 L60 50 L60 35 L75 35 L75 25 L35 25 Z"/>
                        </svg>
                      )}
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => {
                      onOpenSupport && onOpenSupport();
                      setIsOpen(false);
                    }}
                    variant="outline"
                    className="apple-button-outline mb-2"
                  >
                    Free IT Support
                  </Button>
                  <Button 
                    onClick={() => {
                      onOpenWaitlist();
                      setIsOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
