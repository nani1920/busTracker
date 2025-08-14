import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRole, type UserRole } from "@/hooks/use-role";
import { RoleSelection } from "@/pages/role-selection";
import { StudentDashboard } from "@/pages/student-dashboard";
import { DriverDashboard } from "@/pages/driver-dashboard";
import { AdminDashboard } from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  const { currentRole, selectRole, clearRole } = useRole();

  const handleRoleSelect = (role: UserRole) => {
    selectRole(role);
  };

  const handleBack = () => {
    clearRole();
  };

  if (!currentRole) {
    return <RoleSelection onRoleSelect={handleRoleSelect} />;
  }

  return (
    <Switch>
      <Route path="/">
        {currentRole === "student" && <StudentDashboard onBack={handleBack} />}
        {currentRole === "driver" && <DriverDashboard onBack={handleBack} />}
        {currentRole === "admin" && <AdminDashboard onBack={handleBack} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
