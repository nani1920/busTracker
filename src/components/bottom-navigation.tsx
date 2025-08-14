import { Home, MapPin, History, User, Route, Users, Settings, BarChart3 } from "lucide-react";

interface BottomNavigationProps {
  role: "student" | "driver" | "admin";
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function BottomNavigation({ role, activeTab = "home", onTabChange }: BottomNavigationProps) {
  const getNavItems = () => {
    switch (role) {
      case "student":
        return [
          { id: "home", icon: Home, label: "Home", color: "text-student" },
          { id: "track", icon: MapPin, label: "Track", color: "text-neutral-400" },
          { id: "history", icon: History, label: "History", color: "text-neutral-400" },
          { id: "profile", icon: User, label: "Profile", color: "text-neutral-400" },
        ];
      case "driver":
        return [
          { id: "home", icon: Home, label: "Home", color: "text-driver" },
          { id: "route", icon: Route, label: "Route", color: "text-neutral-400" },
          { id: "students", icon: Users, label: "Students", color: "text-neutral-400" },
          { id: "profile", icon: User, label: "Profile", color: "text-neutral-400" },
        ];
      case "admin":
        return [
          { id: "home", icon: Home, label: "Home", color: "text-admin" },
          { id: "analytics", icon: BarChart3, label: "Analytics", color: "text-neutral-400" },
          { id: "fleet", icon: Users, label: "Fleet", color: "text-neutral-400" },
          { id: "settings", icon: Settings, label: "Settings", color: "text-neutral-400" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 md:hidden">
      <div className="flex">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              className="flex-1 py-3 text-center"
              onClick={() => onTabChange?.(item.id)}
            >
              <Icon 
                className={`text-xl mb-1 block mx-auto h-6 w-6 ${
                  isActive ? item.color : "text-neutral-400"
                }`} 
              />
              <span 
                className={`text-xs ${
                  isActive ? `${item.color} font-medium` : "text-neutral-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
