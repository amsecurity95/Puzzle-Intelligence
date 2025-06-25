import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="apple-text-medium text-foreground mb-8">
              About Puzzle Business Group
            </h2>
            <p className="apple-text-body mb-8">
              Founded on the principle that every business challenge is a puzzle waiting to be solved, 
              Puzzle Business Group has been helping companies navigate complex operational and technological landscapes since our inception.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="text-success text-xl mr-4 mt-1 h-6 w-6" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Our Mission</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">To empower businesses with innovative solutions that drive growth, efficiency, and customer satisfaction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-success text-xl mr-4 mt-1 h-6 w-6" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Our Vision</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">To be the trusted partner that transforms business challenges into competitive advantages.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-success text-xl mr-4 mt-1 h-6 w-6" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Our Values</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">Integrity, innovation, collaboration, and commitment to excellence in everything we do.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="apple-card p-8">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&h=2160&q=80" 
                alt="Professional business team collaboration" 
                className="rounded-2xl w-full h-auto" 
              />
            </div>
            <div className="absolute -bottom-8 -left-8 apple-card p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground font-medium">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
