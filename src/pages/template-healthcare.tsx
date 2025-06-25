import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Activity, 
  Shield, 
  Phone,
  MapPin,
  Stethoscope,
  Pill,
  FileText,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Star,
  Video,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";

export default function HealthcareTemplate() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-05-30',
      time: '10:00 AM',
      type: 'Check-up',
      status: 'confirmed',
      avatar: '👩‍⚕️'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: '2024-06-02',
      time: '2:30 PM',
      type: 'Consultation',
      status: 'pending',
      avatar: '👨‍⚕️'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'General Medicine',
      date: '2024-06-05',
      time: '9:00 AM',
      type: 'Follow-up',
      status: 'confirmed',
      avatar: '👩‍⚕️'
    }
  ];

  const healthMetrics = [
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', icon: <Heart className="h-5 w-5" />, color: 'text-green-600' },
    { label: 'Blood Pressure', value: '120/80', status: 'normal', icon: <Activity className="h-5 w-5" />, color: 'text-green-600' },
    { label: 'Weight', value: '165 lbs', status: 'stable', icon: <User className="h-5 w-5" />, color: 'text-blue-600' },
    { label: 'Temperature', value: '98.6°F', status: 'normal', icon: <Activity className="h-5 w-5" />, color: 'text-green-600' }
  ];

  const medications = [
    {
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      nextDose: '8:00 AM',
      remaining: 28
    },
    {
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      nextDose: '6:00 PM',
      remaining: 45
    },
    {
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      nextDose: '8:00 AM',
      remaining: 12
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 156,
      experience: '15 years',
      avatar: '👩‍⚕️',
      available: true
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      rating: 4.8,
      reviews: 89,
      experience: '12 years',
      avatar: '👨‍⚕️',
      available: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'General Medicine',
      rating: 4.7,
      reviews: 203,
      experience: '10 years',
      avatar: '👩‍⚕️',
      available: false
    }
  ];

  const recentTests = [
    {
      test: 'Blood Panel',
      date: '2024-05-20',
      status: 'completed',
      result: 'Normal'
    },
    {
      test: 'ECG',
      date: '2024-05-15',
      status: 'completed',
      result: 'Normal'
    },
    {
      test: 'X-Ray Chest',
      date: '2024-05-10',
      status: 'completed',
      result: 'Clear'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">HealthCare Pro</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Appointments</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Doctors</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Records</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your health overview for today</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="doctors">Find Doctors</TabsTrigger>
            <TabsTrigger value="records">Health Records</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Health Metrics */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {healthMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg bg-gray-100 ${metric.color}`}>
                          {metric.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="mt-3">
                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
              <div className="grid gap-4">
                {appointments.slice(0, 2).map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{appointment.avatar}</div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {appointment.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {appointment.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline">
                              <Video className="h-4 w-4 mr-1" />
                              Join
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Chat
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Medications</h2>
              <div className="grid gap-4">
                {medications.map((medication, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Pill className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{medication.name}</h3>
                            <p className="text-sm text-gray-600">{medication.dosage} - {medication.frequency}</p>
                            <p className="text-xs text-gray-500">Next dose: {medication.nextDose}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{medication.remaining} pills left</p>
                          <Badge variant={medication.remaining < 15 ? 'destructive' : 'secondary'} className="mt-1">
                            {medication.remaining < 15 ? 'Refill Soon' : 'In Stock'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">My Appointments</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Book New Appointment
              </Button>
            </div>
            
            <div className="grid gap-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{appointment.avatar}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-gray-600">{appointment.specialty}</p>
                          <div className="flex items-center gap-6 mt-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {appointment.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {appointment.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              {appointment.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'} className="mb-3">
                          {appointment.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" variant="outline">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Doctors Tab */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">Find Doctors</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search doctors..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            
            <div className="grid gap-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{doctor.avatar}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                          <p className="text-gray-600">{doctor.specialty}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
                            </div>
                            <span className="text-sm text-gray-500">{doctor.experience} experience</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={doctor.available ? 'default' : 'secondary'} className="mb-3">
                          {doctor.available ? 'Available' : 'Busy'}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" disabled={!doctor.available}>
                            Book Appointment
                          </Button>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Health Records Tab */}
          <TabsContent value="records" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">Health Records</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Upload Record
              </Button>
            </div>
            
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Test Results</CardTitle>
                  <CardDescription>Your latest medical test results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTests.map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{test.test}</p>
                          <p className="text-sm text-gray-600">{test.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{test.result}</Badge>
                          <p className="text-xs text-gray-500 mt-1">{test.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                  <CardDescription>Your complete medical history and documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Annual Physical Report</p>
                          <p className="text-sm text-gray-600">2024-01-15</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Vaccination Records</p>
                          <p className="text-sm text-gray-600">2023-12-10</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Allergy Information</p>
                          <p className="text-sm text-gray-600">2023-11-05</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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