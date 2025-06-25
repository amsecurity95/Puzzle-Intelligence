import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Briefcase } from "lucide-react";

export default function CareersSection() {
  return (
    <section className="section-padding bg-muted/10">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="apple-text-medium text-foreground mb-6">
            Join Our Team
          </h2>
          <p className="apple-text-body max-w-3xl mx-auto text-muted-foreground">
            We're building the future of business intelligence and technology solutions. 
            Join our remote-first team of passionate professionals making a global impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="apple-card">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Remote First</h3>
              <p className="text-muted-foreground">Work from anywhere in the world. We believe in flexibility and work-life balance.</p>
            </CardContent>
          </Card>

          <Card className="apple-card">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Collaborative Culture</h3>
              <p className="text-muted-foreground">Join a team of innovative thinkers and problem solvers working on cutting-edge projects.</p>
            </CardContent>
          </Card>

          <Card className="apple-card">
            <CardContent className="p-8 text-center">
              <div className="bg-success/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Hours</h3>
              <p className="text-muted-foreground">Set your own schedule and work when you're most productive and creative.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="apple-card border-2 border-muted">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <Briefcase className="w-6 h-6 text-primary" />
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
              
              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">No Open Positions Currently</h4>
                <p className="text-muted-foreground text-lg mb-6">
                  We don't have any active job openings at the moment, but we're always interested in connecting with talented professionals who share our vision.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Most of our positions are remote-first</p>
                  <p>• We work with talent from around the globe</p>
                  <p>• Competitive compensation and benefits</p>
                  <p>• Opportunities for professional growth and development</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-medium text-foreground">Interested in Future Opportunities?</h5>
                <p className="text-muted-foreground">
                  Send us your resume and we'll keep you in mind for upcoming positions that match your expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Send Your Resume
                  </Button>
                  <Button size="lg" variant="outline">
                    Join Our Talent Network
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}