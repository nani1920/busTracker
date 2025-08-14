import { useState } from "react";
import { ArrowLeft, Bell, User, Camera, CheckCircle, Clock, MapPin, Home, History, Route, Calendar, Star, MessageCircle, Phone, Wifi, Battery, Signal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BottomNavigation } from "@/components/bottom-navigation";
import { QRScannerModal } from "@/components/qr-scanner-modal";
import { NotificationToast } from "@/components/notification-toast";

interface StudentDashboardProps {
  onBack: () => void;
}

export function StudentDashboard({ onBack }: StudentDashboardProps) {
  const [isQRScannerOpen, setIsQRScannerOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleQRScan = () => {
    setShowNotification(true);
  };

  const studentData = {
    name: "Alex Johnson",
    id: "CS2024001",
    route: "Route A",
    stop: "Library Stop",
    year: "3rd Year",
    department: "Computer Science",
  };

  const busData = {
    number: "BUS-101",
    eta: "8 mins",
    nextStop: "Main Gate",
    status: "En Route",
    capacity: "24/30",
    driver: "Mike Wilson",
    speed: "35 km/h",
  };

  const notifications = [
    {
      id: 1,
      type: "info",
      title: "Bus arriving soon",
      message: "Your bus will arrive at Library Stop in 8 minutes",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      type: "success",
      title: "Attendance confirmed",
      message: "Successfully boarded Bus-101 this morning",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Route change",
      message: "Temporary route modification due to road maintenance",
      time: "1 day ago",
      unread: false,
    },
  ];

  const attendanceHistory = [
    { date: "Today", status: "Present", time: "8:30 AM", bus: "BUS-101" },
    { date: "Yesterday", status: "Present", time: "8:25 AM", bus: "BUS-101" },
    { date: "2 days ago", status: "Absent", time: "-", bus: "-" },
    { date: "3 days ago", status: "Present", time: "8:35 AM", bus: "BUS-101" },
    { date: "4 days ago", status: "Present", time: "8:20 AM", bus: "BUS-101" },
  ];

  const routeStops = [
    { name: "Campus Main Gate", time: "8:00 AM", status: "completed", order: 1 },
    { name: "Engineering Block", time: "8:05 AM", status: "completed", order: 2 },
    { name: "Library Stop", time: "8:10 AM", status: "current", order: 3 },
    { name: "Sports Complex", time: "8:15 AM", status: "upcoming", order: 4 },
    { name: "Hostel Area", time: "8:20 AM", status: "upcoming", order: 5 },
    { name: "City Center", time: "8:30 AM", status: "upcoming", order: 6 },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <div className="bg-student text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack} 
            className="text-white/80 hover:text-white"
            data-testid="button-back"
          >
            <ArrowLeft className="text-xl h-6 w-6" />
          </button>
          <h1 className="font-semibold text-lg">Student Dashboard</h1>
          <div className="relative">
            <Bell className="text-xl h-6 w-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </div>
        
        {/* Student Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <User className="text-xl h-6 w-6" />
            </div>
            <div>
              <h2 className="font-semibold" data-testid="student-name">{studentData.name}</h2>
              <p className="text-white/80 text-sm" data-testid="student-id">ID: {studentData.id}</p>
            </div>
          </div>
          <div className="text-right text-white/80 text-sm">
            <p>{studentData.year}</p>
            <p>{studentData.department}</p>
          </div>
        </div>
      </div>

      {/* Bus Status Card */}
      <div className="p-6 -mt-4">
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Bus Status</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot mr-1"></div>
                  {busData.status}
                </div>
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Bus Number</span>
                <span className="font-semibold" data-testid="bus-number">{busData.number}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">ETA to Your Stop</span>
                <span className="font-semibold text-student" data-testid="bus-eta">{busData.eta}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Driver</span>
                <span className="font-semibold" data-testid="bus-driver">{busData.driver}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Capacity</span>
                <span className="font-semibold" data-testid="bus-capacity">{busData.capacity}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Speed</span>
                <span className="font-semibold" data-testid="bus-speed">{busData.speed}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Calendar className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800">95%</h3>
              <p className="text-neutral-600 text-xs">Monthly Attendance</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Route className="text-green-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800">42</h3>
              <p className="text-neutral-600 text-xs">Trips This Month</p>
            </CardContent>
          </Card>
        </div>

        {/* Notifications Panel */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Notifications</h3>
              <Badge variant="destructive" className="text-xs">
                {notifications.filter(n => n.unread).length} new
              </Badge>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto hide-scrollbar">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-3 rounded-xl border-l-4 ${
                    notification.type === 'info' ? 'bg-blue-50 border-blue-500' :
                    notification.type === 'success' ? 'bg-green-50 border-green-500' :
                    'bg-orange-50 border-orange-500'
                  } ${notification.unread ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-neutral-800 text-sm" data-testid={`notification-title-${notification.id}`}>
                        {notification.title}
                      </p>
                      <p className="text-neutral-600 text-xs mt-1">{notification.message}</p>
                    </div>
                    <div className="flex items-center ml-2">
                      <span className="text-xs text-neutral-500">{notification.time}</span>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Route Progress */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-neutral-800 mb-4">Today's Route Progress</h3>
            <div className="space-y-4">
              {routeStops.map((stop, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs font-semibold ${
                    stop.status === 'completed' ? 'bg-green-100 text-green-700' :
                    stop.status === 'current' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {stop.order}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${
                        stop.status === 'current' ? 'text-blue-700' : 'text-neutral-800'
                      }`} data-testid={`stop-name-${index}`}>
                        {stop.name}
                      </p>
                      <span className="text-xs text-neutral-500">{stop.time}</span>
                    </div>
                    {stop.status === 'current' && (
                      <p className="text-xs text-blue-600 mt-1">Current stop - ETA {busData.eta}</p>
                    )}
                  </div>
                  {stop.status === 'completed' && (
                    <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                  )}
                  {stop.status === 'current' && (
                    <div className="h-4 w-4 bg-blue-600 rounded-full ml-2 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Map */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-neutral-800 mb-4">Live Location</h3>
            <div className="relative bg-blue-50 rounded-xl h-48 overflow-hidden">
              {/* Map simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
              
              {/* Bus icon */}
              <div className="absolute top-12 left-16 w-8 h-8 bg-driver text-white rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              
              {/* Student location */}
              <div className="absolute bottom-16 right-12 w-6 h-6 bg-student text-white rounded-full flex items-center justify-center shadow-lg">
                <User className="text-xs h-3 w-3" />
              </div>
              
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full">
                <path d="M 70 50 Q 120 80 200 120" stroke="#3B82F6" strokeWidth="3" strokeDasharray="5,5" fill="none" opacity="0.7"/>
              </svg>
              
              {/* Controls */}
              <div className="absolute top-4 right-4">
                <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <MapPin className="text-neutral-600 text-sm h-4 w-4" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Section */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-neutral-800 mb-4">Board Bus</h3>
            <div className="text-center">
              <div className="w-32 h-32 border-4 border-dashed border-neutral-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Camera className="text-4xl text-neutral-400 h-12 w-12" />
              </div>
              <p className="text-neutral-600 mb-4">Scan QR code or tap to mark attendance</p>
              <Button 
                onClick={() => setIsQRScannerOpen(true)} 
                className="w-full bg-student text-white hover:bg-blue-700"
                data-testid="button-scan-qr"
              >
                <Camera className="mr-2 h-4 w-4" />
                Scan QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Attendance History */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-neutral-800 mb-4">Attendance History</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto hide-scrollbar">
              {attendanceHistory.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      record.status === 'Present' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {record.status === 'Present' ? (
                        <CheckCircle className="text-green-600 h-4 w-4" />
                      ) : (
                        <Clock className="text-red-600 h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800 text-sm" data-testid={`attendance-date-${index}`}>
                        {record.date}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {record.time !== '-' ? `${record.time} • ${record.bus}` : 'No boarding record'}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant={record.status === 'Present' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {record.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 text-center">
              <MessageCircle className="text-blue-500 text-2xl mb-2 mx-auto h-8 w-8" />
              <p className="font-medium text-neutral-800 text-sm">Contact Driver</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 text-center">
              <Star className="text-orange-500 text-2xl mb-2 mx-auto h-8 w-8" />
              <p className="font-medium text-neutral-800 text-sm">Rate Trip</p>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-neutral-800 mb-3 text-sm">System Status</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Wifi className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-neutral-600">GPS</span>
                </div>
                <div className="flex items-center">
                  <Signal className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-neutral-600">Signal</span>
                </div>
                <div className="flex items-center">
                  <Battery className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-neutral-600">85%</span>
                </div>
              </div>
              <div className="text-xs text-neutral-500">Last updated: 2 min ago</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        role="student" 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      {/* QR Scanner Modal */}
      <QRScannerModal
        isOpen={isQRScannerOpen}
        onClose={() => setIsQRScannerOpen(false)}
        onScan={handleQRScan}
      />

      {/* Notification Toast */}
      <NotificationToast
        title="Attendance Marked"
        message="You have successfully boarded the bus"
        type="success"
        isVisible={showNotification}
        onHide={() => setShowNotification(false)}
      />
    </div>
  );
}
