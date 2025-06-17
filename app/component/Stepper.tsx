import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Stepper = ({text}:{text:string}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="w-[100%]  p-4 bg-[#1a1a1a] shadow-lg rounded-lg">
        {/* Step Indicator with Lines */}
        <div className="flex items-center justify-center mb-6 ">
          {[...Array(totalSteps)].map((_, index) => (
            <React.Fragment key={index}>
              {/* Step Circle */}
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out text-sm ${
                  index + 1 <= currentStep
                    ? 'bg-emerald-600 text-black'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {index + 1}
              </div>

              {/* Horizontal Line */}
              {index < totalSteps - 1 && (
                <div
                  className={`h-0.5 w-56 transition-all duration-300 ease-in-out ${
                    index + 1 < currentStep ? 'bg-emerald-600' : 'bg-gray-300'
                  } `}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-6 text-white">
          <h2 className="text-base font-sans font-semibold mb-2">Step {currentStep}</h2>
          <p className='text-sm font-sans font-semibold'>Step {currentStep} {text}</p>
        </div>

        {/* Stepper Controls */}
        <div className="flex justify-between">
          <button
            onClick={goToPrevStep}
            className="p-2 bg-gray-300 text-black rounded-full disabled:opacity-50"
            disabled={currentStep === 1}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={goToNextStep}
            className="p-2 bg-emerald-600 text-black rounded-full disabled:opacity-50"
            disabled={currentStep === totalSteps}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
