/** @format */

// Mock data to replace backend API calls
export const mockData = {
  users: [
    {
      id: "1",
      username: "alex.johnson",
      role: "student",
      firstName: "Alex",
      lastName: "Johnson",
      email: "alex@college.edu",
    },
    {
      id: "2",
      username: "mike.wilson",
      role: "driver",
      firstName: "Mike",
      lastName: "Wilson",
      email: "mike@college.edu",
    },
    {
      id: "3",
      username: "sarah.johnson",
      role: "admin",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah@college.edu",
    },
  ],
  buses: [
    {
      id: "1",
      number: "BUS-101",
      driverId: "2",
      capacity: 30,
      currentLat: 40.7128,
      currentLng: -74.006,
      isActive: true,
    },
    {
      id: "2",
      number: "BUS-102",
      driverId: "2",
      capacity: 25,
      currentLat: 40.7589,
      currentLng: -73.9851,
      isActive: true,
    },
  ],
  trips: [
    {
      id: "1",
      busId: "1",
      routeId: "1",
      driverId: "2",
      startTime: "2024-01-15T08:00:00Z",
      endTime: null,
      status: "in_progress",
    },
  ],
  routes: [
    {
      id: "1",
      name: "Route A",
      description: "Main campus route",
      busId: "1",
    },
  ],
  stops: [
    {
      id: "1",
      name: "Campus Main Gate",
      latitude: 40.7128,
      longitude: -74.006,
      routeId: "1",
      orderIndex: 1,
    },
    {
      id: "2",
      name: "Library Stop",
      latitude: 40.7589,
      longitude: -73.9851,
      routeId: "1",
      orderIndex: 2,
    },
  ],
  attendance: [
    {
      id: "1",
      studentId: "1",
      tripId: "1",
      stopId: "1",
      boardedAt: "2024-01-15T08:00:00Z",
      status: "boarded",
    },
  ],
  notifications: [
    {
      id: "1",
      userId: "1",
      title: "Bus arriving soon",
      message: "Your bus will arrive at Library Stop in 8 minutes",
      type: "info",
      isRead: false,
    },
  ],
};

// Mock API functions
export const mockAPI = {
  getBuses: () => Promise.resolve(mockData.buses),
  getBus: (id: string) =>
    Promise.resolve(mockData.buses.find((b) => b.id === id)),
  getTrips: () => Promise.resolve(mockData.trips),
  getRoutes: () => Promise.resolve(mockData.routes),
  getStops: (routeId: string) =>
    Promise.resolve(mockData.stops.filter((s) => s.routeId === routeId)),
  getUsersByRole: (role: string) =>
    Promise.resolve(mockData.users.filter((u) => u.role === role)),
  getNotifications: (userId: string) =>
    Promise.resolve(mockData.notifications.filter((n) => n.userId === userId)),
  getAttendance: (tripId: string) =>
    Promise.resolve(mockData.attendance.filter((a) => a.tripId === tripId)),
};
