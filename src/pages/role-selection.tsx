import { Card } from "@/components/ui/card";
import { Bus, GraduationCap, Shield, Truck } from "lucide-react";
import { UserRole } from "@/hooks/use-role";

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
}

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  const roles = [
    {
      id: "student" as UserRole,
      title: "Student",
      description: "Track your bus & attendance",
      icon: GraduationCap,
      color: "hover:border-student",
      iconBg: "bg-blue-100",
      iconColor: "text-student",
      hoverIconBg: "group-hover:bg-student",
    },
    {
      id: "driver" as UserRole,
      title: "Driver",
      description: "Manage trips & routes",
      icon: Truck,
      color: "hover:border-driver",
      iconBg: "bg-green-100",
      iconColor: "text-driver",
      hoverIconBg: "group-hover:bg-driver",
    },
    {
      id: "admin" as UserRole,
      title: "Admin",
      description: "Monitor & manage system",
      icon: Shield,
      color: "hover:border-admin",
      iconBg: "bg-purple-100",
      iconColor: "text-admin",
      hoverIconBg: "group-hover:bg-admin",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bus className="text-3xl text-white h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Smart Bus</h1>
          <p className="text-neutral-600">College Transportation System</p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                data-testid={`role-${role.id}`}
                onClick={() => onRoleSelect(role.id)}
                className={`w-full p-6 bg-white rounded-2xl shadow-md border-2 border-transparent ${role.color} transition-all duration-200 text-left group`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${role.iconBg} rounded-xl flex items-center justify-center mr-4 ${role.hoverIconBg} group-hover:text-white transition-colors`}>
                    <Icon className={`text-xl ${role.iconColor} group-hover:text-white h-6 w-6`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">{role.title}</h3>
                    <p className="text-neutral-600 text-sm">{role.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-neutral-500">Secure • Real-time • Reliable</p>
        </div>
      </div>
    </div>
  );
}
