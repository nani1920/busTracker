import { useState } from "react";
import { ArrowLeft, Settings, UserCheck, Play, Square, Phone, AlertTriangle, Navigation, Clock, Fuel, MapPin, MessageSquare, Users, CheckCircle, X, Calendar, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BottomNavigation } from "@/components/bottom-navigation";
import { NotificationToast } from "@/components/notification-toast";

interface DriverDashboardProps {
  onBack: () => void;
}

export function DriverDashboard({ onBack }: DriverDashboardProps) {
  const [tripStarted, setTripStarted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({ title: "", message: "" });
  const [activeTab, setActiveTab] = useState("home");

  const handleTripToggle = () => {
    const newTripStatus = !tripStarted;
    setTripStarted(newTripStatus);
    setNotificationData({
      title: newTripStatus ? "Trip Started" : "Trip Ended",
      message: newTripStatus ? "GPS tracking is now active" : "Trip has been completed"
    });
    setShowNotification(true);
  };

  const driverData = {
    name: "Mike Wilson",
    busNumber: "Bus-101",
    license: "DL123456",
    experience: "5 years",
    rating: 4.8,
    totalTrips: 1247,
  };

  const tripData = {
    route: "Campus → Downtown",
    studentCount: 24,
    boardedCount: 12,
    distance: "12.5 km",
    estimatedTime: "35 mins",
    fuelLevel: 75,
    nextStop: "Library Stop",
    completedStops: 2,
    totalStops: 6,
  };

  const students = [
    { name: "Emma Davis", id: "CS2024002", stop: "Stop 2", boarded: true, boardingTime: "8:15 AM" },
    { name: "John Smith", id: "CS2024003", stop: "Stop 3", boarded: false, expectedTime: "8:25 AM" },
    { name: "Sarah Wilson", id: "CS2024004", stop: "Stop 1", boarded: true, boardingTime: "8:10 AM" },
    { name: "David Brown", id: "CS2024005", stop: "Stop 2", boarded: false, expectedTime: "8:20 AM" },
    { name: "Lisa Chen", id: "CS2024006", stop: "Stop 4", boarded: false, expectedTime: "8:30 AM" },
    { name: "Alex Kumar", id: "CS2024007", stop: "Stop 3", boarded: false, expectedTime: "8:25 AM" },
  ];

  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Student not found at stop",
      message: "John Smith missed pickup at Stop 3",
      time: "5 mins ago",
      unread: true,
    },
    {
      id: 2,
      type: "info",
      title: "Route update",
      message: "Traffic detected on Main Street, alternate route suggested",
      time: "10 mins ago",
      unread: true,
    },
    {
      id: 3,
      type: "success",
      title: "Fuel reminder",
      message: "Fuel level at 75%, next refill due after this trip",
      time: "1 hour ago",
      unread: false,
    },
  ];

  const todayStats = {
    tripsCompleted: 3,
    studentsTransported: 67,
    onTimePerformance: 95,
    fuelEfficiency: 8.2,
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <div className="bg-driver text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack} 
            className="text-white/80 hover:text-white"
            data-testid="button-back"
          >
            <ArrowLeft className="text-xl h-6 w-6" />
          </button>
          <h1 className="font-semibold text-lg">Driver Dashboard</h1>
          <div className="relative">
            <Settings className="text-xl h-6 w-6" />
          </div>
        </div>
        
        {/* Driver Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <UserCheck className="text-xl h-6 w-6" />
            </div>
            <div>
              <h2 className="font-semibold" data-testid="driver-name">{driverData.name}</h2>
              <p className="text-white/80 text-sm" data-testid="driver-info">
                {driverData.busNumber} • License: {driverData.license}
              </p>
            </div>
          </div>
          <div className="text-right text-white/80 text-sm">
            <p className="flex items-center">
              ⭐ {driverData.rating} rating
            </p>
            <p>{driverData.totalTrips} trips</p>
          </div>
        </div>
      </div>

      {/* Today's Performance Stats */}
      <div className="p-6 -mt-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="text-green-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800">{todayStats.tripsCompleted}</h3>
              <p className="text-neutral-600 text-xs">Trips Today</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800">{todayStats.studentsTransported}</h3>
              <p className="text-neutral-600 text-xs">Students Transported</p>
            </CardContent>
          </Card>
        </div>

        {/* Trip Status */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Current Trip</h3>
              <span 
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tripStarted 
                    ? "bg-green-100 text-green-700" 
                    : "bg-gray-100 text-gray-600"
                }`}
                data-testid="trip-status"
              >
                {tripStarted ? "In Progress" : "Not Started"}
              </span>
            </div>
            
            {/* Trip Control Button */}
            <Button 
              onClick={handleTripToggle}
              className={`w-full py-4 mb-4 font-semibold ${
                tripStarted 
                  ? "bg-red-500 hover:bg-red-600" 
                  : "bg-driver hover:bg-green-700"
              }`}
              data-testid="button-trip-control"
            >
              {tripStarted ? (
                <>
                  <Square className="mr-2 h-4 w-4" />
                  End Trip
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start Trip
                </>
              )}
            </Button>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <p className="text-neutral-600 text-sm">Route</p>
                <p className="font-semibold" data-testid="trip-route">{tripData.route}</p>
              </div>
              <div className="text-center">
                <p className="text-neutral-600 text-sm">Distance</p>
                <p className="font-semibold" data-testid="trip-distance">{tripData.distance}</p>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-600">Route Progress</span>
                  <span className="font-medium">{tripData.completedStops}/{tripData.totalStops} stops</span>
                </div>
                <Progress value={(tripData.completedStops / tripData.totalStops) * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-600">Fuel Level</span>
                  <span className="font-medium">{tripData.fuelLevel}%</span>
                </div>
                <Progress value={tripData.fuelLevel} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Driver Notifications */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Notifications</h3>
              <Badge variant="destructive" className="text-xs">
                {notifications.filter(n => n.unread).length} new
              </Badge>
            </div>
            
            <div className="space-y-3 max-h-48 overflow-y-auto hide-scrollbar">
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Route Map */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-neutral-800 mb-4">Route Overview</h3>
            <div className="relative bg-green-50 rounded-xl h-48 overflow-hidden">
              {/* Map simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
              
              {/* Route stops */}
              <div className="absolute top-8 left-8 w-6 h-6 bg-driver text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold">1</span>
              </div>
              <div className="absolute top-16 right-16 w-6 h-6 bg-driver text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold">2</span>
              </div>
              <div className="absolute bottom-12 left-12 w-6 h-6 bg-driver text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold">3</span>
              </div>
              
              {/* Route path */}
              <svg className="absolute inset-0 w-full h-full">
                <path d="M 40 40 Q 80 60 220 80 Q 180 100 60 160" stroke="#10B981" strokeWidth="4" fill="none"/>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Student List */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-800">Students on Route</h3>
              <span className="text-sm text-neutral-600" data-testid="boarding-status">
                {tripData.boardedCount}/{tripData.studentCount} Boarded
              </span>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto hide-scrollbar">
              {students.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      student.boarded ? "bg-green-100" : "bg-gray-100"
                    }`}>
                      <UserCheck className={`text-sm h-4 w-4 ${
                        student.boarded ? "text-green-600" : "text-gray-600"
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800" data-testid={`student-name-${index}`}>
                        {student.name}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {student.stop} • {student.id}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {student.boarded ? `Boarded: ${student.boardingTime}` : `Expected: ${student.expectedTime}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {student.boarded ? (
                      <Badge variant="default" className="text-xs">Boarded</Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">Waiting</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-neutral-800 mb-4">Today's Performance</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-600">On-Time Performance</span>
                  <span className="font-medium">{todayStats.onTimePerformance}%</span>
                </div>
                <Progress value={todayStats.onTimePerformance} className="h-2 mb-3" />
                
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-600">Fuel Efficiency</span>
                  <span className="font-medium">{todayStats.fuelEfficiency} km/l</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 text-sm">Students Transported</span>
                  <span className="font-semibold">{todayStats.studentsTransported}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 text-sm">Average Rating</span>
                  <span className="font-semibold">⭐ {driverData.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 text-sm">Experience</span>
                  <span className="font-semibold">{driverData.experience}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 text-center">
              <Navigation className="text-blue-500 text-xl mb-1 mx-auto h-6 w-6" />
              <p className="font-medium text-neutral-800 text-xs">Navigation</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 text-center">
              <MessageSquare className="text-green-500 text-xl mb-1 mx-auto h-6 w-6" />
              <p className="font-medium text-neutral-800 text-xs">Message Students</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-3 text-center">
              <AlertTriangle className="text-orange-500 text-xl mb-1 mx-auto h-6 w-6" />
              <p className="font-medium text-neutral-800 text-xs">Report Issue</p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-neutral-800 mb-3 text-sm">Emergency Contacts</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Control Room</span>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Emergency Services</span>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <Phone className="h-3 w-3 mr-1" />
                  911
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        role="driver" 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      {/* Notification Toast */}
      <NotificationToast
        title={notificationData.title}
        message={notificationData.message}
        type="success"
        isVisible={showNotification}
        onHide={() => setShowNotification(false)}
      />
    </div>
  );
}
