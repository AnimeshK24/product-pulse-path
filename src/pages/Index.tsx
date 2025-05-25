
import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import Questionnaire from "@/components/Questionnaire";
import SignupPage from "@/components/SignupPage";
import CompanySetup from "@/components/CompanySetup";
import BoardSetup from "@/components/BoardSetup";
import WelcomeScreen from "@/components/WelcomeScreen";
import Dashboard from "@/components/Dashboard";

type Step = 
  | "landing" 
  | "questionnaire" 
  | "signup" 
  | "company-setup" 
  | "board-setup" 
  | "welcome" 
  | "dashboard";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("landing");
  const [userData, setUserData] = useState({
    answers: {},
    email: "",
    password: "",
    companyName: "",
    subdomain: "",
    productName: "",
    isPrivate: false
  });

  const handleGetStarted = () => {
    setCurrentStep("questionnaire");
  };

  const handleQuestionnaireComplete = (answers: Record<string, string>) => {
    setUserData(prev => ({ ...prev, answers }));
    setCurrentStep("signup");
  };

  const handleSignup = (email: string, password: string) => {
    setUserData(prev => ({ ...prev, email, password }));
    setCurrentStep("company-setup");
  };

  const handleCompanySetup = (companyName: string, subdomain: string) => {
    setUserData(prev => ({ ...prev, companyName, subdomain }));
    setCurrentStep("board-setup");
  };

  const handleBoardSetup = (productName: string, isPrivate: boolean) => {
    setUserData(prev => ({ ...prev, productName, isPrivate }));
    setCurrentStep("welcome");
  };

  const handleWelcomeComplete = () => {
    setCurrentStep("dashboard");
  };

  const handleBackToLanding = () => {
    setCurrentStep("landing");
  };

  const handleBackToCompanySetup = () => {
    setCurrentStep("company-setup");
  };

  return (
    <div className="min-h-screen">
      {currentStep === "landing" && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      
      {currentStep === "questionnaire" && (
        <Questionnaire 
          onComplete={handleQuestionnaireComplete}
          onBack={handleBackToLanding}
        />
      )}
      
      {currentStep === "signup" && (
        <SignupPage onSignup={handleSignup} />
      )}
      
      {currentStep === "company-setup" && (
        <CompanySetup onSetup={handleCompanySetup} />
      )}
      
      {currentStep === "board-setup" && (
        <BoardSetup 
          companyName={userData.companyName}
          onSetup={handleBoardSetup}
          onBack={handleBackToCompanySetup}
        />
      )}
      
      {currentStep === "welcome" && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
      
      {currentStep === "dashboard" && (
        <Dashboard 
          companyName={userData.companyName}
          productName={userData.productName}
        />
      )}
    </div>
  );
};

export default Index;
