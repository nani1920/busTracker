import { useState, useCallback } from "react";

export type UserRole = "student" | "driver" | "admin" | null;

export function useRole() {
  const [currentRole, setCurrentRole] = useState<UserRole>(null);

  const selectRole = useCallback((role: UserRole) => {
    setCurrentRole(role);
  }, []);

  const clearRole = useCallback(() => {
    setCurrentRole(null);
  }, []);

  return {
    currentRole,
    selectRole,
    clearRole,
  };
}
