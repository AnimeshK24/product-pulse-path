
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CompanySetupProps {
  onSetup: (companyName: string, subdomain: string) => void;
}

const CompanySetup = ({ onSetup }: CompanySetupProps) => {
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState("");

  // Auto-fill subdomain based on company name
  useEffect(() => {
    if (companyName) {
      const urlFriendlyName = companyName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      setSubdomain(urlFriendlyName);
    } else {
      setSubdomain("");
    }
  }, [companyName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName && subdomain) {
      onSetup(companyName, subdomain);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-md mx-auto space-y-8">
          <div className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 beamstack-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Get Started
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Parallel Connect"
                  className="h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subdomain">Subdomain</Label>
                <div className="flex">
                  <Input
                    id="subdomain"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    placeholder="parallel-connect"
                    className="h-12 rounded-r-none"
                    required
                  />
                  <div className="px-3 h-12 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md flex items-center text-sm text-gray-600">
                    .beamstack.io
                  </div>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full h-12 beamstack-gradient text-lg"
              >
                Create Company
              </Button>
            </form>
            
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => onSetup(companyName || "Demo Company", subdomain || "demo")}
            >
              Continue
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-20 bg-gray-300 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Illustration</span>
                </div>
                <div className="w-48 h-20 bg-gray-200 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;
