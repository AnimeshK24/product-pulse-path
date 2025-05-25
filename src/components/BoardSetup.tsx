
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

interface BoardSetupProps {
  companyName: string;
  onSetup: (productName: string, isPrivate: boolean) => void;
  onBack: () => void;
}

const BoardSetup = ({ companyName, onSetup, onBack }: BoardSetupProps) => {
  const [productName, setProductName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productName) {
      onSetup(productName, isPrivate);
    }
  };

  const generateUrl = () => {
    const cleanCompanyName = companyName.toLowerCase().replace(/\s+/g, '');
    const cleanProductName = productName.toLowerCase().replace(/\s+/g, '_');
    return `${cleanCompanyName}.beamstack.io/${cleanProductName}`;
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
              Let's setup your first board
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="productName">Name</Label>
                <Input
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Product Name"
                  className="h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  value={generateUrl()}
                  readOnly
                  className="h-12 bg-gray-50 text-gray-600"
                />
              </div>
              
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Privacy Settings</Label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsPrivate(false)}
                    className={`flex-1 p-4 border-2 rounded-xl transition-all duration-200 ${
                      !isPrivate
                        ? "border-blue-500 bg-blue-50 text-blue-900"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    Public
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPrivate(true)}
                    className={`flex-1 p-4 border-2 rounded-xl transition-all duration-200 ${
                      isPrivate
                        ? "border-blue-500 bg-blue-50 text-blue-900"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    Private
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full h-12 beamstack-gradient text-lg"
              >
                Continue
              </Button>
            </form>
            
            <Button
              variant="outline"
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-48 h-16 bg-gray-300 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Dashboard Illustration</span>
                </div>
                <div className="w-56 h-16 bg-gray-200 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Dashboard Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSetup;
