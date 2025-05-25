
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignupPageProps {
  onSignup: (email: string, password: string) => void;
}

const SignupPage = ({ onSignup }: SignupPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSignup(email, password);
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
              Sign Up to Beamstack
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full h-12 beamstack-gradient text-lg"
              >
                Register
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-12"
                onClick={() => {/* Handle login without password */}}
              >
                Login without password
              </Button>
              
              <Button
                variant="outline"
                className="w-full h-12"
                onClick={() => {/* Handle Google login */}}
              >
                Continue with Google
              </Button>
              
              <Button
                variant="outline"
                className="w-full h-12"
                onClick={() => {/* Handle Github login */}}
              >
                Continue with Github
              </Button>
            </div>
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

export default SignupPage;
