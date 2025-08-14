import { useState } from "react";
import { ArrowLeft, Bell, Shield, Bus, Users, Percent, AlertTriangle, BarChart3, Plus, MapPin, Clock, TrendingUp, TrendingDown, Calendar, Settings, MessageSquare, FileText, Download, Eye, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BottomNavigation } from "@/components/bottom-navigation";

interface AdminDashboardProps {
  onBack: () => void;
}

export function AdminDashboard({ onBack }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("home");

  const adminData = {
    name: "Sarah Johnson",
    title: "Transport Administrator",
    department: "Operations",
    experience: "8 years",
    permissions: "Full Access",
  };

  const stats = {
    activeBuses: 8,
    totalStudents: 245,
    attendanceRate: 92,
    alerts: 3,
    totalDrivers: 12,
    totalRoutes: 15,
    onTimePerformance: 94,
    fuelEfficiency: 8.5,
  };

  const weeklyStats = {
    tripsCompleted: 156,
    studentsTransported: 3420,
    fuelConsumed: 480,
    incidentsReported: 2,
  };

  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Student missed bus",
      message: "Alex Johnson missed pickup at Stop 3 on Route 1",
      time: "2 mins ago",
      priority: "high",
      unread: true,
    },
    {
      id: 2,
      type: "warning",
      title: "Bus running late",
      message: "Bus-102 is running 5 minutes behind schedule",
      time: "15 mins ago",
      priority: "medium",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      title: "Route optimization complete",
      message: "New route suggestions available for Route 3",
      time: "1 hour ago",
      priority: "low",
      unread: false,
    },
    {
      id: 4,
      type: "success",
      title: "Maintenance completed",
      message: "Bus-105 has completed scheduled maintenance",
      time: "2 hours ago",
      priority: "low",
      unread: false,
    },
  ];

  const buses = [
    {
      number: "Bus-101",
      driver: "Mike Wilson",
      route: "Route 1 - Campus to Downtown",
      status: "Active",
      students: "24/30",
      location: "Library Stop",
      speed: "45 km/h",
      fuel: "75%",
      statusColor: "bg-green-100 text-green-700",
      lastUpdate: "1 min ago",
    },
    {
      number: "Bus-102",
      driver: "Jane Smith",
      route: "Route 2 - Residential Area",
      status: "En Route",
      students: "18/25",
      location: "Mall Junction",
      speed: "38 km/h",
      fuel: "65%",
      statusColor: "bg-blue-100 text-blue-700",
      lastUpdate: "2 mins ago",
    },
    {
      number: "Bus-103",
      driver: "Robert Brown",
      route: "Route 3 - North Campus",
      status: "Maintenance",
      students: "0/28",
      location: "Depot",
      speed: "0 km/h",
      fuel: "90%",
      statusColor: "bg-orange-100 text-orange-700",
      lastUpdate: "30 mins ago",
    },
  ];

  const recentDrivers = [
    { name: "Mike Wilson", rating: 4.8, trips: 45, status: "Active" },
    { name: "Jane Smith", rating: 4.9, trips: 52, status: "Active" },
    { name: "Robert Brown", rating: 4.7, trips: 38, status: "Off Duty" },
    { name: "Lisa Davis", rating: 4.6, trips: 41, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <div className="bg-admin text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack} 
            className="text-white/80 hover:text-white"
            data-testid="button-back"
          >
            <ArrowLeft className="text-xl h-6 w-6" />
          </button>
          <h1 className="font-semibold text-lg">Admin Dashboard</h1>
          <div className="relative">
            <Bell className="text-xl h-6 w-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </div>
        
        {/* Admin Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <Shield className="text-xl h-6 w-6" />
            </div>
            <div>
              <h2 className="font-semibold" data-testid="admin-name">{adminData.name}</h2>
              <p className="text-white/80 text-sm">{adminData.title} • {adminData.department}</p>
            </div>
          </div>
          <div className="text-right text-white/80 text-sm">
            <p>{adminData.experience}</p>
            <p>{adminData.permissions}</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="p-6 -mt-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Bus className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800" data-testid="stat-buses">
                {stats.activeBuses}
              </h3>
              <p className="text-neutral-600 text-xs">Active Buses</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="text-green-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800" data-testid="stat-students">
                {stats.totalStudents}
              </h3>
              <p className="text-neutral-600 text-xs">Students</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Percent className="text-purple-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800" data-testid="stat-attendance">
                {stats.attendanceRate}%
              </h3>
              <p className="text-neutral-600 text-xs">Attendance</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <AlertTriangle className="text-orange-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800" data-testid="stat-alerts">
                {stats.alerts}
              </h3>
              <p className="text-neutral-600 text-xs">Active Alerts</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Performance Overview */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Weekly Overview</h3>
              <Badge variant="outline" className="text-xs">This Week</Badge>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-600">On-Time Performance</span>
                  <span className="font-medium">{stats.onTimePerformance}%</span>
                </div>
                <Progress value={stats.onTimePerformance} className="h-2 mb-3" />
                
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-600">Fuel Efficiency</span>
                  <span className="font-medium">{stats.fuelEfficiency} km/l</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 text-sm">Trips Completed</span>
                  <span className="font-semibold flex items-center">
                    {weeklyStats.tripsCompleted}
                    <TrendingUp className="h-3 w-3 text-green-600 ml-1" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 text-sm">Students Transported</span>
                  <span className="font-semibold">{weeklyStats.studentsTransported}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 text-sm">Incidents Reported</span>
                  <span className="font-semibold flex items-center">
                    {weeklyStats.incidentsReported}
                    <TrendingDown className="h-3 w-3 text-green-600 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">System Alerts</h3>
              <Badge variant="destructive" className="text-xs">
                {alerts.filter(a => a.unread).length} new
              </Badge>
            </div>
            
            <div className="space-y-3 max-h-48 overflow-y-auto hide-scrollbar">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-3 rounded-xl border-l-4 ${
                    alert.type === 'critical' ? 'bg-red-50 border-red-500' :
                    alert.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                    alert.type === 'info' ? 'bg-blue-50 border-blue-500' :
                    'bg-green-50 border-green-500'
                  } ${alert.unread ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-neutral-800 text-sm" data-testid={`alert-title-${alert.id}`}>
                        {alert.title}
                      </p>
                      <p className="text-neutral-600 text-xs mt-1">{alert.message}</p>
                    </div>
                    <div className="flex items-center ml-2">
                      <Badge 
                        variant={alert.priority === 'high' ? 'destructive' : alert.priority === 'medium' ? 'default' : 'secondary'} 
                        className="text-xs mr-2"
                      >
                        {alert.priority}
                      </Badge>
                      <span className="text-xs text-neutral-500">{alert.time}</span>
                      {alert.unread && (
                        <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Fleet Map */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Live Fleet Map</h3>
              <Badge variant="outline" className="text-xs">Real-time</Badge>
            </div>
            
            {/* Mock Map Display */}
            <div className="relative bg-neutral-100 h-40 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
              
              {/* Bus markers */}
              <div className="absolute top-8 left-12 w-6 h-6 bg-green-500 text-white rounded-lg flex items-center justify-center shadow-lg">
                <Bus className="text-xs h-3 w-3" />
              </div>
              <div className="absolute top-20 right-16 w-6 h-6 bg-blue-500 text-white rounded-lg flex items-center justify-center shadow-lg">
                <Bus className="text-xs h-3 w-3" />
              </div>
              <div className="absolute bottom-16 left-20 w-6 h-6 bg-orange-500 text-white rounded-lg flex items-center justify-center shadow-lg">
                <Bus className="text-xs h-3 w-3" />
              </div>
              
              {/* Route indicators */}
              <div className="absolute top-10 left-16 text-xs bg-white px-2 py-1 rounded shadow">Bus-101</div>
              <div className="absolute top-24 right-20 text-xs bg-white px-2 py-1 rounded shadow">Bus-102</div>
              <div className="absolute bottom-20 left-24 text-xs bg-white px-2 py-1 rounded shadow">Bus-103</div>
            </div>
          </CardContent>
        </Card>

        {/* Bus Fleet Status */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Fleet Status</h3>
              <Button size="sm" variant="outline" className="text-xs">
                <Eye className="h-3 w-3 mr-1" />
                View All
              </Button>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto hide-scrollbar">
              {buses.map((bus, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      bus.status === 'Active' ? 'bg-green-100' :
                      bus.status === 'En Route' ? 'bg-blue-100' :
                      'bg-orange-100'
                    }`}>
                      <Bus className={`text-sm h-4 w-4 ${
                        bus.status === 'Active' ? 'text-green-600' :
                        bus.status === 'En Route' ? 'text-blue-600' :
                        'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800" data-testid={`bus-number-${index}`}>
                        {bus.number}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {bus.driver} • {bus.location}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {bus.speed} • Fuel: {bus.fuel} • Updated: {bus.lastUpdate}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-xs ${bus.statusColor} mb-1`}>
                      {bus.status}
                    </Badge>
                    <p className="text-xs text-neutral-500">{bus.students} students</p>
                    <div className="flex space-x-1 mt-1">
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Driver Management */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Active Drivers</h3>
              <Badge variant="outline" className="text-xs">{recentDrivers.filter(d => d.status === 'Active').length} Online</Badge>
            </div>
            <div className="space-y-3">
              {recentDrivers.map((driver, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      driver.status === 'Active' ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <Users className={`text-sm h-4 w-4 ${
                        driver.status === 'Active' ? 'text-green-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800" data-testid={`driver-name-${index}`}>
                        {driver.name}
                      </p>
                      <p className="text-sm text-neutral-600">
                        ⭐ {driver.rating} • {driver.trips} trips
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-xs ${
                      driver.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {driver.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Management Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 text-center">
              <BarChart3 className="text-admin text-xl mb-1 mx-auto h-6 w-6" />
              <p className="font-medium text-neutral-800 text-xs">Analytics</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 text-center">
              <Settings className="text-admin text-xl mb-1 mx-auto h-6 w-6" />
              <p className="font-medium text-neutral-800 text-xs">Settings</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 text-center">
              <FileText className="text-admin text-xl mb-1 mx-auto h-6 w-6" />
              <p className="font-medium text-neutral-800 text-xs">Reports</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick System Actions */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-neutral-800 mb-3 text-sm">System Actions</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Generate Reports</span>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <Download className="h-3 w-3 mr-1" />
                  Export
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Send Announcements</span>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Send
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Schedule Maintenance</span>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <Calendar className="h-3 w-3 mr-1" />
                  Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        role="admin" 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}