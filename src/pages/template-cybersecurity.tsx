import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Activity, 
  Users, 
  Globe, 
  Lock,
  Eye,
  EyeOff,
  Search,
  Filter,
  Download,
  RefreshCw,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Zap,
  Target,
  Wifi,
  Server,
  Database,
  Bug
} from "lucide-react";
import { Link } from "wouter";

export default function CybersecurityTemplate() {
  const [timeRange, setTimeRange] = useState("24h");
  const [selectedThreat, setSelectedThreat] = useState("all");

  const securityMetrics = [
    { 
      label: "Security Score", 
      value: "94%", 
      status: "excellent", 
      icon: <Shield className="h-5 w-5" />, 
      change: "+2%",
      color: "text-green-600" 
    },
    { 
      label: "Active Threats", 
      value: "3", 
      status: "medium", 
      icon: <AlertTriangle className="h-5 w-5" />, 
      change: "-5",
      color: "text-orange-600" 
    },
    { 
      label: "Blocked Attacks", 
      value: "247", 
      status: "good", 
      icon: <Target className="h-5 w-5" />, 
      change: "+12%",
      color: "text-blue-600" 
    },
    { 
      label: "System Uptime", 
      value: "99.9%", 
      status: "excellent", 
      icon: <Activity className="h-5 w-5" />, 
      change: "0.1%",
      color: "text-green-600" 
    }
  ];

  const threats = [
    {
      id: "THR-001",
      type: "Malware",
      severity: "High",
      source: "192.168.1.45",
      target: "Web Server",
      status: "Blocked",
      timestamp: "2024-05-27 14:23:15",
      description: "Attempted file upload with malicious payload",
      action: "Quarantined"
    },
    {
      id: "THR-002",
      type: "DDoS Attack",
      severity: "Critical",
      source: "Multiple IPs",
      target: "Main Gateway",
      status: "Mitigated",
      timestamp: "2024-05-27 13:45:22",
      description: "Coordinated flood attack detected",
      action: "Rate Limited"
    },
    {
      id: "THR-003",
      type: "Phishing",
      severity: "Medium",
      source: "external.email.com",
      target: "User Email",
      status: "Detected",
      timestamp: "2024-05-27 12:10:33",
      description: "Suspicious email with credential harvesting attempt",
      action: "Email Blocked"
    },
    {
      id: "THR-004",
      type: "Brute Force",
      severity: "Medium",
      source: "203.0.113.45",
      target: "SSH Service",
      status: "Blocked",
      timestamp: "2024-05-27 11:55:41",
      description: "Multiple failed login attempts detected",
      action: "IP Banned"
    },
    {
      id: "THR-005",
      type: "Data Exfiltration",
      severity: "High",
      source: "Internal Network",
      target: "Database Server",
      status: "Investigating",
      timestamp: "2024-05-27 10:30:17",
      description: "Unusual data access pattern detected",
      action: "User Suspended"
    }
  ];

  const vulnerabilities = [
    {
      id: "CVE-2024-001",
      title: "SQL Injection in User Authentication",
      severity: "Critical",
      cvss: 9.8,
      system: "Web Application",
      status: "Open",
      discoveredDate: "2024-05-25",
      description: "Authentication bypass vulnerability in login system"
    },
    {
      id: "CVE-2024-002",
      title: "Cross-Site Scripting (XSS)",
      severity: "High",
      cvss: 7.5,
      system: "User Portal",
      status: "Patched",
      discoveredDate: "2024-05-23",
      description: "Stored XSS vulnerability in user profile section"
    },
    {
      id: "CVE-2024-003",
      title: "Weak Encryption Implementation",
      severity: "Medium",
      cvss: 5.3,
      system: "Data Storage",
      status: "In Progress",
      discoveredDate: "2024-05-20",
      description: "Outdated encryption algorithm used for sensitive data"
    }
  ];

  const networkDevices = [
    { name: "Main Firewall", ip: "192.168.1.1", status: "Secure", lastScan: "5 min ago", threats: 0 },
    { name: "Web Server", ip: "192.168.1.10", status: "Monitored", lastScan: "2 min ago", threats: 2 },
    { name: "Database Server", ip: "192.168.1.20", status: "Alert", lastScan: "1 min ago", threats: 1 },
    { name: "Email Server", ip: "192.168.1.30", status: "Secure", lastScan: "3 min ago", threats: 0 },
    { name: "File Server", ip: "192.168.1.40", status: "Secure", lastScan: "4 min ago", threats: 0 }
  ];

  const recentLogs = [
    { time: "14:23:15", event: "Malware blocked", source: "192.168.1.45", severity: "High" },
    { time: "14:20:32", event: "User login success", source: "192.168.1.100", severity: "Info" },
    { time: "14:18:45", event: "Firewall rule updated", source: "Admin Console", severity: "Info" },
    { time: "14:15:20", event: "Suspicious file access", source: "192.168.1.75", severity: "Medium" },
    { time: "14:12:10", event: "VPN connection established", source: "203.0.113.25", severity: "Info" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "secure": return "text-green-600";
      case "alert": return "text-red-600";
      case "monitored": return "text-orange-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CyberGuard</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-red-400 font-medium">Dashboard</a>
                <a href="#" className="text-gray-300 hover:text-red-400">Threats</a>
                <a href="#" className="text-gray-300 hover:text-red-400">Vulnerabilities</a>
                <a href="#" className="text-gray-300 hover:text-red-400">Network</a>
                <a href="#" className="text-gray-300 hover:text-red-400">Reports</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="destructive" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Scan Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Security Operations Center</h1>
          <p className="text-gray-400">Real-time monitoring and threat detection dashboard</p>
        </div>

        {/* Alert Banner */}
        <div className="bg-red-900/50 border border-red-600 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <div>
              <h3 className="font-semibold text-red-400">Active Security Alert</h3>
              <p className="text-red-300 text-sm">DDoS attack detected on main gateway - Mitigation in progress</p>
            </div>
            <Button size="sm" variant="outline" className="ml-auto border-red-600 text-red-400 hover:bg-red-900">
              View Details
            </Button>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {securityMetrics.map((metric, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg bg-gray-700 ${metric.color}`}>
                    {metric.icon}
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                    {metric.change}
                  </Badge>
                </div>
                <div className="mt-3">
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="threats" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="threats" className="data-[state=active]:bg-gray-700">Active Threats</TabsTrigger>
            <TabsTrigger value="vulnerabilities" className="data-[state=active]:bg-gray-700">Vulnerabilities</TabsTrigger>
            <TabsTrigger value="network" className="data-[state=active]:bg-gray-700">Network Monitor</TabsTrigger>
            <TabsTrigger value="logs" className="data-[state=active]:bg-gray-700">Security Logs</TabsTrigger>
          </TabsList>

          {/* Threats Tab */}
          <TabsContent value="threats" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Threat Detection</h2>
              <div className="flex items-center gap-2">
                <select className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 text-sm text-white">
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                </select>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {threats.map((threat) => (
                <Card key={threat.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-900 rounded-lg flex items-center justify-center">
                          <Bug className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-white">{threat.type}</h3>
                            <Badge variant={getSeverityColor(threat.severity)}>
                              {threat.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400 mb-1">{threat.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Source: {threat.source}</span>
                            <span>Target: {threat.target}</span>
                            <span>{threat.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2 border-gray-600 text-gray-300">
                          {threat.status}
                        </Badge>
                        <p className="text-xs text-gray-500">{threat.action}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Vulnerabilities Tab */}
          <TabsContent value="vulnerabilities" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Vulnerability Assessment</h2>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Zap className="h-4 w-4 mr-2" />
                Run Scan
              </Button>
            </div>

            <div className="grid gap-4">
              {vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-orange-900 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="h-5 w-5 text-orange-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-white">{vuln.title}</h3>
                            <Badge variant={getSeverityColor(vuln.severity)}>
                              {vuln.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400 mb-1">{vuln.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>CVSS: {vuln.cvss}</span>
                            <span>System: {vuln.system}</span>
                            <span>Discovered: {vuln.discoveredDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={vuln.status === 'Patched' ? 'default' : 'destructive'} className="mb-2">
                          {vuln.status}
                        </Badge>
                        <p className="text-xs text-gray-500">{vuln.id}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Network Monitor Tab */}
          <TabsContent value="network" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Network Security Status</h2>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                <Wifi className="h-4 w-4 mr-2" />
                Refresh Network
              </Button>
            </div>

            <div className="grid gap-4">
              {networkDevices.map((device, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                          <Server className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{device.name}</h3>
                          <p className="text-sm text-gray-400">{device.ip}</p>
                          <p className="text-xs text-gray-500">Last scan: {device.lastScan}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-3 h-3 rounded-full ${
                            device.status === 'Secure' ? 'bg-green-500' :
                            device.status === 'Alert' ? 'bg-red-500' : 'bg-orange-500'
                          }`}></div>
                          <span className={`text-sm font-medium ${getStatusColor(device.status)}`}>
                            {device.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          {device.threats} active threats
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Security Logs Tab */}
          <TabsContent value="logs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Security Event Logs</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search logs..."
                    className="pl-10 bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700 border-b border-gray-600">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-200">Time</th>
                        <th className="text-left p-4 font-medium text-gray-200">Event</th>
                        <th className="text-left p-4 font-medium text-gray-200">Source</th>
                        <th className="text-left p-4 font-medium text-gray-200">Severity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {recentLogs.map((log, index) => (
                        <tr key={index} className="hover:bg-gray-700">
                          <td className="p-4 text-sm text-gray-300">{log.time}</td>
                          <td className="p-4 text-sm text-white">{log.event}</td>
                          <td className="p-4 text-sm text-gray-400">{log.source}</td>
                          <td className="p-4">
                            <Badge variant={getSeverityColor(log.severity)}>
                              {log.severity}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Back to Realizations */}
      <div className="fixed bottom-6 left-6">
        <Link href="/realizations">
          <Button variant="outline" className="shadow-lg bg-white text-black hover:bg-gray-100">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}