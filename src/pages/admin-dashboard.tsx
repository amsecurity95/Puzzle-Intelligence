import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { Users, Mail, Calendar, TrendingUp, Search, Download, Filter, Home, LogOut, Image } from "lucide-react";
import WebsiteImageManager from "@/components/website-image-manager";
import { format } from "date-fns";
import { useLocation } from "wouter";
import Logo from "@/components/logo";
import Footer from "@/components/footer";
import type { WaitlistEntry, ContactMessage } from "@shared/schema";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      setLocation('/admin-login');
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setLocation('/admin-login');
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Fetch waitlist entries
  const { data: waitlistData = [], isLoading: waitlistLoading } = useQuery({
    queryKey: ['/api/waitlist'],
    queryFn: async () => {
      const response = await fetch('/api/waitlist');
      if (!response.ok) throw new Error('Failed to fetch waitlist');
      return response.json() as Promise<WaitlistEntry[]>;
    }
  });

  // Fetch contact messages
  const { data: contactData = [], isLoading: contactLoading } = useQuery({
    queryKey: ['/api/contact'],
    queryFn: async () => {
      const response = await fetch('/api/contact');
      if (!response.ok) throw new Error('Failed to fetch contacts');
      return response.json() as Promise<ContactMessage[]>;
    }
  });

  // Filter functions
  const filteredWaitlist = waitlistData.filter(entry =>
    entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contactData.filter(contact =>
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Statistics
  const stats = {
    totalWaitlist: waitlistData.length,
    totalContacts: contactData.length,
    recentWaitlist: waitlistData.filter(entry => 
      new Date(entry.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
    ).length,
    recentContacts: contactData.filter(contact => 
      new Date(contact.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
    ).length,
  };

  const exportToCSV = (data: any[], filename: string) => {
    if (!data.length) return;
    
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(item => Object.values(item).join(',')).join('\n');
    const csvContent = `${headers}\n${rows}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Logo variant="primary" size="xl" />
              <div>
                <p className="text-sm text-blue-600 font-medium">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setIsImageManagerOpen(true)}
              >
                <Image className="h-4 w-4" />
                Manage Images
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setLocation('/')}
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
          <p className="text-gray-600">Manage your leads and track business growth</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Waitlist</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalWaitlist}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.recentWaitlist} this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.recentContacts} this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalWaitlist + stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground">
                Combined prospects
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.recentWaitlist + stats.recentContacts}</div>
              <p className="text-xs text-muted-foreground">
                New leads
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by email, name, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => exportToCSV(waitlistData, 'waitlist')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export Waitlist
            </Button>
            <Button
              variant="outline"
              onClick={() => exportToCSV(contactData, 'contacts')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export Contacts
            </Button>
          </div>
        </div>

        {/* Lead Management Tabs */}
        <Tabs defaultValue="waitlist" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="waitlist">Waitlist ({filteredWaitlist.length})</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages ({filteredContacts.length})</TabsTrigger>
          </TabsList>

          {/* Waitlist Tab */}
          <TabsContent value="waitlist">
            <Card>
              <CardHeader>
                <CardTitle>Waitlist Entries</CardTitle>
                <CardDescription>
                  People who signed up for early access
                </CardDescription>
              </CardHeader>
              <CardContent>
                {waitlistLoading ? (
                  <div className="text-center py-8">Loading waitlist entries...</div>
                ) : filteredWaitlist.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    {searchTerm ? 'No waitlist entries found matching your search.' : 'No waitlist entries yet.'}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredWaitlist.map((entry) => (
                      <div key={entry.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold text-lg">{entry.fullName}</h3>
                              <Badge variant="secondary">Waitlist</Badge>
                            </div>
                            <p className="text-gray-600">{entry.email}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {format(new Date(entry.createdAt), 'MMM dd, yyyy HH:mm')}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`mailto:${entry.email}`, '_blank')}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>
                  Messages from the contact form
                </CardDescription>
              </CardHeader>
              <CardContent>
                {contactLoading ? (
                  <div className="text-center py-8">Loading contact messages...</div>
                ) : filteredContacts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    {searchTerm ? 'No contact messages found matching your search.' : 'No contact messages yet.'}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredContacts.map((contact) => (
                      <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold text-lg">{contact.firstName} {contact.lastName}</h3>
                              <Badge variant="outline">Contact</Badge>
                            </div>
                            <p className="text-gray-600">{contact.email}</p>
                            <div className="bg-gray-100 rounded p-3 mt-3">
                              <p className="text-sm text-gray-700">{contact.message}</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {format(new Date(contact.createdAt), 'MMM dd, yyyy HH:mm')}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Website Image Manager */}
      <WebsiteImageManager
        isOpen={isImageManagerOpen}
        onClose={() => setIsImageManagerOpen(false)}
      />
      
      <Footer />
    </div>
  );
}