import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dumbbell, Users, Clock, Trophy, Play, Star, Calendar } from "lucide-react";

export default function FitnessTemplate() {
  const [membershipForm, setMembershipForm] = useState({ name: "", email: "", plan: "" });

  const plans = [
    {
      name: "Basic",
      price: "$29/month",
      features: ["Gym Access", "Locker Room", "Basic Equipment"],
      popular: false
    },
    {
      name: "Premium",
      price: "$59/month", 
      features: ["Gym Access", "Group Classes", "Personal Trainer Session", "Nutrition Consultation"],
      popular: true
    },
    {
      name: "Elite",
      price: "$99/month",
      features: ["All Premium Features", "Unlimited Personal Training", "Meal Planning", "Recovery Services"],
      popular: false
    }
  ];

  const classes = [
    { name: "HIIT Training", time: "6:00 AM", instructor: "Sarah Johnson", spots: 8 },
    { name: "Yoga Flow", time: "8:00 AM", instructor: "Michael Chen", spots: 12 },
    { name: "Strength Training", time: "6:00 PM", instructor: "David Rodriguez", spots: 6 },
    { name: "Cardio Blast", time: "7:00 PM", instructor: "Lisa Park", spots: 10 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <h1 className="text-3xl font-bold">FitCore Gym</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#classes" className="hover:text-red-400">Classes</a>
              <a href="#membership" className="hover:text-red-400">Membership</a>
              <a href="#trainers" className="hover:text-red-400">Trainers</a>
              <a href="#contact" className="hover:text-red-400">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Transform Your Body</h2>
              <p className="text-xl mb-8">
                Join FitCore Gym and discover your strongest self. State-of-the-art equipment, expert trainers, and a supportive community.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm">Expert Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Gym Access</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm">Weekly Classes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-slate-900">Today's Classes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{classItem.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {classItem.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Instructor: {classItem.instructor}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{classItem.spots} spots left</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-slate-900">Membership Plans</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-red-500 border-2' : ''} hover:shadow-xl transition-shadow`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-900">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-600">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-red-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-slate-600 hover:bg-slate-700'}`}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-slate-900">Meet Our Trainers</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sarah Johnson", specialty: "HIIT & Cardio", experience: "8 years", rating: 4.9 },
              { name: "Michael Chen", specialty: "Yoga & Flexibility", experience: "6 years", rating: 4.8 },
              { name: "David Rodriguez", specialty: "Strength Training", experience: "10 years", rating: 5.0 }
            ].map((trainer, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <CardDescription>{trainer.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{trainer.experience} experience</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{trainer.rating}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Join FitCore Today</h3>
          <Card className="max-w-md mx-auto bg-white text-slate-900">
            <CardHeader>
              <CardTitle>Start Your Fitness Journey</CardTitle>
              <CardDescription>Get a free consultation and tour</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  value={membershipForm.name}
                  onChange={(e) => setMembershipForm({...membershipForm, name: e.target.value})}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  value={membershipForm.email}
                  onChange={(e) => setMembershipForm({...membershipForm, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Interested Plan</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={membershipForm.plan}
                  onChange={(e) => setMembershipForm({...membershipForm, plan: e.target.value})}
                >
                  <option value="">Select a plan</option>
                  <option value="basic">Basic - $29/month</option>
                  <option value="premium">Premium - $59/month</option>
                  <option value="elite">Elite - $99/month</option>
                </select>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Schedule Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">FitCore Gym</span>
              </div>
              <p className="text-gray-400">Transform your body, transform your life.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Mon-Fri: 5:00 AM - 11:00 PM</p>
                <p>Saturday: 6:00 AM - 10:00 PM</p>
                <p>Sunday: 7:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>123 Fitness Street</p>
                <p>Health District</p>
                <p>(555) FIT-CORE</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="border-gray-600">Facebook</Button>
                <Button size="sm" variant="outline" className="border-gray-600">Instagram</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitCore Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}