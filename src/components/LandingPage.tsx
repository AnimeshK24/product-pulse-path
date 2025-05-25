
import { Button } from "@/components/ui/button";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 beamstack-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Beamstack</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Turn Customer
              <span className="block text-transparent bg-clip-text beamstack-gradient">
                Feedback
              </span>
              Into Product Gold
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Collect, analyze, and act on customer feedback to build products your users truly love. 
              Simple setup, powerful insights.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={onGetStarted}
              className="beamstack-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg px-8 py-6 rounded-xl"
            >
              Get Started
            </Button>
            <p className="text-sm text-gray-500">
              No credit card required • Set up in 2 minutes
            </p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center animate-float">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 beamstack-gradient rounded-2xl mx-auto flex items-center justify-center animate-pulse-soft">
                  <span className="text-white font-bold text-3xl">B</span>
                </div>
                <p className="text-gray-600 font-medium">Landing Page</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
