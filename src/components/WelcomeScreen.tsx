
import { useEffect } from "react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="relative inline-block">
          <div className="flex space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 beamstack-gradient rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-white font-bold text-sm">B</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Beamstack
          </h1>
          <p className="text-xl text-gray-600">
            You will be redirected to your feedback board soon
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-full p-4 shadow-lg border">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-700 font-medium">Getting things ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
