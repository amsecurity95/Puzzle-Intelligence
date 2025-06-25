import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Download,
  Upload,
  Bell,
  Settings,
  Building,
  Calendar,
  DollarSign
} from "lucide-react";
import { Link } from "wouter";

export default function InventoryTemplate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showLowStock, setShowLowStock] = useState(false);

  const inventoryItems = [
    {
      id: "INV-001",
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      sku: "WBH-2024-001",
      quantity: 45,
      minStock: 20,
      price: 99.99,
      cost: 65.00,
      supplier: "TechSupply Co.",
      location: "Warehouse A - Section 1",
      lastUpdated: "2024-05-27",
      status: "In Stock",
      image: "🎧"
    },
    {
      id: "INV-002",
      name: "Ergonomic Office Chair",
      category: "Furniture",
      sku: "EOC-2024-002",
      quantity: 8,
      minStock: 15,
      price: 249.99,
      cost: 150.00,
      supplier: "Office Furniture Ltd.",
      location: "Warehouse B - Section 3",
      lastUpdated: "2024-05-26",
      status: "Low Stock",
      image: "🪑"
    },
    {
      id: "INV-003",
      name: "Stainless Steel Water Bottle",
      category: "Lifestyle",
      sku: "SSWB-2024-003",
      quantity: 150,
      minStock: 50,
      price: 24.99,
      cost: 12.00,
      supplier: "EcoProducts Inc.",
      location: "Warehouse A - Section 2",
      lastUpdated: "2024-05-27",
      status: "In Stock",
      image: "🍼"
    },
    {
      id: "INV-004",
      name: "Gaming Mechanical Keyboard",
      category: "Electronics",
      sku: "GMK-2024-004",
      quantity: 3,
      minStock: 10,
      price: 129.99,
      cost: 80.00,
      supplier: "Gaming Gear Pro",
      location: "Warehouse A - Section 1",
      lastUpdated: "2024-05-25",
      status: "Critical",
      image: "⌨️"
    },
    {
      id: "INV-005",
      name: "Organic Cotton T-Shirt",
      category: "Apparel",
      sku: "OCT-2024-005",
      quantity: 75,
      minStock: 30,
      price: 29.99,
      cost: 15.00,
      supplier: "Sustainable Fashion Co.",
      location: "Warehouse C - Section 1",
      lastUpdated: "2024-05-27",
      status: "In Stock",
      image: "👕"
    },
    {
      id: "INV-006",
      name: "Smart Home Security Camera",
      category: "Electronics",
      sku: "SHSC-2024-006",
      quantity: 0,
      minStock: 15,
      price: 199.99,
      cost: 120.00,
      supplier: "Smart Home Solutions",
      location: "Warehouse A - Section 3",
      lastUpdated: "2024-05-24",
      status: "Out of Stock",
      image: "📹"
    }
  ];

  const categories = ["All", "Electronics", "Furniture", "Lifestyle", "Apparel"];

  const stockAlerts = inventoryItems.filter(item => 
    item.quantity <= item.minStock || item.quantity === 0
  );

  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.quantity * item.cost), 0);
  const totalItems = inventoryItems.reduce((sum, item) => sum + item.quantity, 0);

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesStockFilter = !showLowStock || item.quantity <= item.minStock;
    
    return matchesSearch && matchesCategory && matchesStockFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "default";
      case "Low Stock": return "secondary";
      case "Critical": return "destructive";
      case "Out of Stock": return "destructive";
      default: return "outline";
    }
  };

  const recentActivity = [
    { action: "Stock Updated", item: "Wireless Bluetooth Headphones", quantity: "+20", time: "2 hours ago" },
    { action: "New Item Added", item: "Smart Fitness Tracker", quantity: "50", time: "4 hours ago" },
    { action: "Stock Alert", item: "Gaming Mechanical Keyboard", quantity: "3 remaining", time: "6 hours ago" },
    { action: "Order Fulfilled", item: "Ergonomic Office Chair", quantity: "-5", time: "8 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">InventoryPro</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Orders</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Suppliers</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Reports</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {stockAlerts.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {stockAlerts.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Dashboard</h1>
          <p className="text-gray-600">Manage your stock levels and track inventory performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalItems.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Across {inventoryItems.length} products
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Total cost value
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stockAlerts.length}</div>
              <p className="text-xs text-muted-foreground">
                Require attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inventoryItems.filter(i => i.quantity > 0).length}</div>
              <p className="text-xs text-muted-foreground">
                In stock now
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="alerts">Stock Alerts ({stockAlerts.length})</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products or SKU..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <select 
                  className="border rounded-md px-3 py-2 text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
                <Button
                  variant={showLowStock ? "default" : "outline"}
                  onClick={() => setShowLowStock(!showLowStock)}
                  className="whitespace-nowrap"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Low Stock Only
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
              </div>
            </div>

            {/* Inventory Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-900">Product</th>
                        <th className="text-left p-4 font-medium text-gray-900">SKU</th>
                        <th className="text-left p-4 font-medium text-gray-900">Category</th>
                        <th className="text-left p-4 font-medium text-gray-900">Stock</th>
                        <th className="text-left p-4 font-medium text-gray-900">Price</th>
                        <th className="text-left p-4 font-medium text-gray-900">Status</th>
                        <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{item.image}</div>
                              <div>
                                <div className="font-medium text-gray-900">{item.name}</div>
                                <div className="text-sm text-gray-500">{item.supplier}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-600">{item.sku}</td>
                          <td className="p-4">
                            <Badge variant="outline">{item.category}</Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <div className={`font-medium ${item.quantity <= item.minStock ? 'text-red-600' : 'text-gray-900'}`}>
                                {item.quantity}
                              </div>
                              <div className="text-gray-500">Min: {item.minStock}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <div className="font-medium text-gray-900">${item.price}</div>
                              <div className="text-gray-500">Cost: ${item.cost}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stock Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <div className="grid gap-4">
              {stockAlerts.map((item) => (
                <Card key={item.id} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{item.image}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.sku} • {item.category}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-red-600 font-medium">
                              {item.quantity === 0 ? 'Out of Stock' : `Only ${item.quantity} left`}
                            </span>
                            <span className="text-sm text-gray-500">Min stock: {item.minStock}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Reorder</Button>
                        <Button size="sm" variant="outline">Update Stock</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recent Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest inventory movements and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Package className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.item}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{activity.quantity}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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