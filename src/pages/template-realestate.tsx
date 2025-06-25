import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  MapPin, 
  Search, 
  Filter, 
  Heart, 
  Bed, 
  Bath, 
  Square, 
  Car,
  Star,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Calendar,
  DollarSign,
  Building,
  TrendingUp,
  Users,
  Eye
} from "lucide-react";
import { Link } from "wouter";

export default function RealEstateTemplate() {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: 850000,
      type: "Condo",
      address: "123 Main Street, Downtown",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      garage: 1,
      image: "🏢",
      rating: 4.8,
      status: "For Sale",
      agent: "Sarah Johnson",
      agentPhone: "(555) 123-4567",
      features: ["Modern Kitchen", "City View", "Gym Access", "Rooftop Deck"]
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: 1250000,
      type: "House",
      address: "456 Oak Avenue, Suburbs",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      garage: 2,
      image: "🏠",
      rating: 4.9,
      status: "For Sale",
      agent: "Michael Chen",
      agentPhone: "(555) 987-6543",
      features: ["Large Backyard", "Updated Kitchen", "Master Suite", "Pool"]
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      price: 450000,
      type: "Studio",
      address: "789 Pine Street, Arts District",
      bedrooms: 0,
      bathrooms: 1,
      sqft: 650,
      garage: 0,
      image: "🏠",
      rating: 4.5,
      status: "For Rent",
      agent: "Emily Rodriguez",
      agentPhone: "(555) 456-7890",
      features: ["Exposed Brick", "High Ceilings", "Walk to Transit", "Pet Friendly"]
    },
    {
      id: 4,
      title: "Waterfront Penthouse",
      price: 2500000,
      type: "Penthouse",
      address: "321 Harbor Drive, Waterfront",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2200,
      garage: 2,
      image: "🏢",
      rating: 5.0,
      status: "For Sale",
      agent: "David Wilson",
      agentPhone: "(555) 321-9876",
      features: ["Ocean View", "Private Balcony", "Luxury Finishes", "Concierge"]
    },
    {
      id: 5,
      title: "Charming Townhouse",
      price: 750000,
      type: "Townhouse",
      address: "654 Maple Lane, Historic District",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1800,
      garage: 1,
      image: "🏘️",
      rating: 4.7,
      status: "For Sale",
      agent: "Lisa Thompson",
      agentPhone: "(555) 654-3210",
      features: ["Historic Charm", "Updated Interior", "Private Patio", "Walk Score 95"]
    },
    {
      id: 6,
      title: "Modern Loft Space",
      price: 680000,
      type: "Loft",
      address: "987 Industrial Blvd, Creative Quarter",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1000,
      garage: 0,
      image: "🏭",
      rating: 4.6,
      status: "For Sale",
      agent: "James Park",
      agentPhone: "(555) 789-0123",
      features: ["Open Floor Plan", "Industrial Style", "Artist Community", "Skylights"]
    }
  ];

  const agents = [
    {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "(555) 123-4567",
      email: "sarah@realestate.com",
      rating: 4.9,
      sales: 156,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      title: "Luxury Property Specialist",
      phone: "(555) 987-6543",
      email: "michael@realestate.com",
      rating: 4.8,
      sales: 89,
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      title: "First-Time Buyer Expert",
      phone: "(555) 456-7890",
      email: "emily@realestate.com",
      rating: 4.7,
      sales: 203,
      avatar: "👩‍💼"
    }
  ];

  const marketStats = [
    { label: "Average Home Price", value: "$925K", change: "+5.2%", trend: "up" },
    { label: "Properties Sold", value: "1,247", change: "+12%", trend: "up" },
    { label: "Days on Market", value: "28", change: "-8%", trend: "down" },
    { label: "Market Activity", value: "High", change: "+15%", trend: "up" }
  ];

  const filteredProperties = properties.filter(property => {
    if (selectedFilter === "all") return true;
    return property.status.toLowerCase().includes(selectedFilter);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">PropertyHub</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Buy</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Rent</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Sell</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Agents</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Market</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="h-5 w-5" />
              </Button>
              <Button>List Property</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Search Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-xl text-blue-100">Discover the perfect property in your ideal location</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Enter city, neighborhood, or address..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div>
                  <select className="w-full h-12 border rounded-md px-3 text-gray-900">
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                    <option>Loft</option>
                  </select>
                </div>
                <div>
                  <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Market Stats */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`flex items-center gap-1 ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className={`h-4 w-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                      <span className="text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Properties</h2>
            <p className="text-gray-600">{filteredProperties.length} properties available</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select 
                className="border rounded-md px-3 py-1 text-sm"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Properties</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
            
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-6xl">
                    {property.image}
                  </div>
                  <Badge className="absolute top-2 left-2">
                    {property.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-2 left-2">
                    <div className="flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      {property.rating}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{property.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {property.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-blue-600">
                      ${property.price.toLocaleString()}
                    </span>
                    <Badge variant="outline">{property.type}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        {property.bedrooms || 'Studio'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        {property.bathrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        {property.sqft} sqft
                      </span>
                      {property.garage > 0 && (
                        <span className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          {property.garage}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-3">
                    <Button className="flex-1" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Tour
                    </Button>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-600">Agent: {property.agent}</p>
                    <p className="text-xs text-gray-500">{property.agentPhone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Agents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{agent.avatar}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{agent.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{agent.title}</p>
                  
                  <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{agent.rating}</span>
                    </div>
                    <span className="text-gray-500">{agent.sales} sales</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      {agent.phone}
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h3>
            <p className="text-gray-600">Complete real estate solutions for all your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Buy Properties</h4>
              <p className="text-gray-600 text-sm">Find your perfect home with our expert guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sell Properties</h4>
              <p className="text-gray-600 text-sm">Get the best value for your property</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rent Properties</h4>
              <p className="text-gray-600 text-sm">Find the perfect rental for your lifestyle</p>
            </div>
          </div>
        </section>
      </div>

      {/* Back to Realizations */}
      <div className="fixed bottom-6 left-6">
        <Link href="/realizations">
          <Button variant="outline" className="shadow-lg bg-white">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}