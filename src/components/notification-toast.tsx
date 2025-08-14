import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

interface NotificationToastProps {
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  isVisible: boolean;
  onHide: () => void;
}

export function NotificationToast({ 
  title, 
  message, 
  type = "success", 
  isVisible, 
  onHide 
}: NotificationToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-xl" />;
      case "error":
        return <AlertCircle className="text-xl" />;
      case "warning":
        return <AlertTriangle className="text-xl" />;
      default:
        return <Info className="text-xl" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-orange-500";
      default:
        return "bg-blue-500";
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50 animate-slide-up" data-testid="notification-toast">
      <div className={`${getBackgroundColor()} text-white p-4 rounded-xl shadow-lg`}>
        <div className="flex items-center">
          {getIcon()}
          <div className="ml-3">
            <p className="font-semibold" data-testid="toast-title">{title}</p>
            <p className="text-sm opacity-90" data-testid="toast-message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
