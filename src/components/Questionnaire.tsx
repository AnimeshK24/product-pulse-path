
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface QuestionnaireProps {
  onComplete: (answers: Record<string, string>) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 1,
    question: "Hey Ibrahim, what brings you to Beamstack?",
    options: [
      "Collect product feedback",
      "Prioritise Roadmap", 
      "Share updates with users",
      "Internal team feedback"
    ]
  },
  {
    id: 2,
    question: "What best describes your company or team?",
    options: [
      "Solo Founder (1-2)",
      "Early-Stage Startup (3-10)",
      "Scaling SaaS Company (11-50+)",
      "Internal Product Team"
    ]
  },
  {
    id: 3,
    question: "How are you managing feedback as of now?",
    options: [
      "Google Forms / Spreadsheets",
      "Notion / Airtable / Trello",
      "Canny / Nolt / Upvoty",
      "We don't have a system yet"
    ]
  },
  {
    id: 4,
    question: "How did you hear about us?",
    options: [
      "Product Hunt",
      "Twitter/LinkedIn",
      "Friend/Referral",
      "Social Media",
      "Other"
    ]
  }
];

const Questionnaire = ({ onComplete, onBack }: QuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState("");

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
      setAnswers(newAnswers);
      
      if (isLastQuestion) {
        onComplete(newAnswers);
      } else {
        setCurrentStep(currentStep + 1);
        setSelectedOption("");
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      onBack();
    } else {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[questions[currentStep - 1].id] || "");
    }
  };

  const handleSkip = () => {
    if (isLastQuestion) {
      onComplete(answers);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 beamstack-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {currentQuestion.question}
            </h1>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-200 ${
                    selectedOption === option
                      ? "border-blue-500 bg-blue-50 text-blue-900"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            
            <div className="flex space-x-3">
              {isLastQuestion && (
                <Button
                  variant="outline"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!selectedOption}
                className="beamstack-gradient"
              >
                Continue
              </Button>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? "bg-blue-500" : "bg-gray-200"
                } ${index === currentStep ? "w-8" : "w-2"}`}
              />
            ))}
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

export default Questionnaire;
