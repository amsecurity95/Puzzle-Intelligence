import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Heart, 
  Search, 
  Star, 
  Truck, 
  Shield, 
  CreditCard,
  Filter,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  User,
  Menu
} from "lucide-react";
import { Link } from "wouter";

export default function ECommerceTemplate() {
  const [cartItems, setCartItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 124,
      image: "🎧",
      category: "Electronics",
      inStock: true,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviews: 89,
      image: "⌚",
      category: "Wearables",
      inStock: true,
      badge: "Sale"
    },
    {
      id: 3,
      name: "Professional Camera Lens",
      price: 599.99,
      originalPrice: 699.99,
      rating: 4.9,
      reviews: 45,
      image: "📷",
      category: "Photography",
      inStock: false,
      badge: "Limited"
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 449.99,
      originalPrice: 549.99,
      rating: 4.7,
      reviews: 156,
      image: "🪑",
      category: "Furniture",
      inStock: true,
      badge: "New"
    },
    {
      id: 5,
      name: "Smart Home Speaker",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      reviews: 203,
      image: "🔊",
      category: "Smart Home",
      inStock: true,
      badge: "Popular"
    },
    {
      id: 6,
      name: "Gaming Mechanical Keyboard",
      price: 179.99,
      originalPrice: 219.99,
      rating: 4.8,
      reviews: 87,
      image: "⌨️",
      category: "Gaming",
      inStock: true,
      badge: "Gaming"
    }
  ];

  const categories = ["All", "Electronics", "Wearables", "Photography", "Furniture", "Smart Home", "Gaming"];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  const addToWishlist = (productId: number) => {
    setWishlistItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🛒</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ShopHub</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Categories</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Deals</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {wishlistItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Summer Sale
                <span className="block text-2xl md:text-3xl text-blue-200">Up to 50% Off</span>
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Discover amazing deals on top electronics, fashion, and home essentials.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  View Deals
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🛍️</div>
              <div className="flex justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our handpicked selection of premium items</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>All Categories</option>
                {categories.slice(1).map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-1 border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  {product.badge && (
                    <Badge className="absolute top-2 left-2">
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => addToWishlist(product.id)}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <section className="mt-16 py-12 bg-white rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Shop With Us?</h3>
            <p className="text-gray-600">We provide the best shopping experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
              <p className="text-gray-600 text-sm">Free shipping on orders over $50</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Payment</h4>
              <p className="text-gray-600 text-sm">100% secure payment processing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy Returns</h4>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
          </div>
        </section>
      </main>

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