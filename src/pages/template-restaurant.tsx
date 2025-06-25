import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Clock, Star, MapPin, Phone, Mail } from "lucide-react";

export default function RestaurantTemplate() {
  const [reservation, setReservation] = useState({ name: "", date: "", time: "", guests: "" });

  const menuItems = [
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herb butter and seasonal vegetables",
      price: "$28",
      category: "Main Course"
    },
    {
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle and parmesan cream sauce",
      price: "$24",
      category: "Main Course"
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan, croutons, house-made dressing",
      price: "$16",
      category: "Appetizer"
    },
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla ice cream",
      price: "$12",
      category: "Dessert"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ChefHat className="h-8 w-8" />
              <h1 className="text-3xl font-bold">Bella Vista</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#menu" className="hover:text-amber-200">Menu</a>
              <a href="#about" className="hover:text-amber-200">About</a>
              <a href="#reservations" className="hover:text-amber-200">Reservations</a>
              <a href="#contact" className="hover:text-amber-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Authentic Italian Cuisine</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the finest Italian dining with fresh ingredients, traditional recipes, and warm hospitality
          </p>
          <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50">
            Make a Reservation
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Menu</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-amber-900">{item.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{item.category}</Badge>
                    </div>
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-amber-900">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Since 1985, Bella Vista has been serving authentic Italian cuisine in the heart of the city. 
                Our family recipes have been passed down through generations, bringing you the true taste of Italy.
              </p>
              <div className="flex gap-4 text-amber-600">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Michelin Recommended</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Since 1985</span>
                </div>
              </div>
            </div>
            <div className="bg-amber-100 rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Opening Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Thursday:</strong> 5:00 PM - 10:00 PM</p>
                <p><strong>Friday - Saturday:</strong> 5:00 PM - 11:00 PM</p>
                <p><strong>Sunday:</strong> 4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-900">Make a Reservation</h3>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Reserve Your Table</CardTitle>
              <CardDescription>Book your dining experience with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input 
                  value={reservation.name}
                  onChange={(e) => setReservation({...reservation, name: e.target.value})}
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <Input 
                    type="date"
                    value={reservation.date}
                    onChange={(e) => setReservation({...reservation, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Time</label>
                  <Input 
                    type="time"
                    value={reservation.time}
                    onChange={(e) => setReservation({...reservation, time: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Number of Guests</label>
                <Input 
                  type="number"
                  value={reservation.guests}
                  onChange={(e) => setReservation({...reservation, guests: e.target.value})}
                  placeholder="2"
                />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Confirm Reservation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p>123 Italian Street<br />Downtown District<br />City, State 12345</p>
            </div>
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p>info@bellavista.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="h-6 w-6" />
            <span className="text-xl font-bold">Bella Vista</span>
          </div>
          <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}