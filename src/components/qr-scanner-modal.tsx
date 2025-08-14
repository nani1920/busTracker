import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QrCode, X } from "lucide-react";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: () => void;
}

export function QRScannerModal({ isOpen, onClose, onScan }: QRScannerModalProps) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onScan();
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="font-semibold text-neutral-800 mb-4 text-center">Scan QR Code</DialogTitle>
        <DialogDescription className="text-center text-neutral-600 mb-4">
          Position the QR code within the frame to mark your attendance
        </DialogDescription>
        <div className="text-center">
          
          {/* Scanner simulation */}
          <div className="relative bg-neutral-100 rounded-xl h-64 mb-4 overflow-hidden">
            <div className="absolute inset-4 border-2 border-student rounded-xl">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-student"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-student"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-student"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-student"></div>
            </div>
            
            {/* Scanning line animation */}
            <div className={`absolute inset-x-4 top-1/2 h-0.5 bg-student ${isScanning ? 'animate-pulse' : ''}`}></div>
            
            {/* Mock QR code */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-black rounded grid grid-cols-6 gap-0.5 p-2">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          

          
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={onClose}
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button 
              className="flex-1 bg-student hover:bg-blue-700" 
              onClick={handleScan}
              disabled={isScanning}
              data-testid="button-scan"
            >
              {isScanning ? "Scanning..." : "Mark Present"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
