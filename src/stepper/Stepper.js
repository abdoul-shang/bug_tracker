// Stepper.js

import React, { useState } from "react";
import "./stepper.css";
import Project from "./StepperComp/Project";
import Contributors from "./StepperComp/Contributors";
import Issues from "./StepperComp/Issues";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [createProjectSuccess, setCreateProjectSuccess] = useState(false);

  const createNewProject = useSelector((state) => state.createNewProject);
  const { success: createNewProjectSuccess, error: createProjectError } =
    createNewProject;

  const handleNext = () => {
    setCreateProjectSuccess(true);
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  console.log("conteeeeeeent", steps[currentStep].content);
  return (
    <div className="stepper-container">
      <div className="step-progress">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="step-content">
        {steps[currentStep].content === "Create project" && (
          <Project
            success={createNewProjectSuccess}
            error={createProjectError}
          />
        )}
        {steps[currentStep].content === "Add contributors" && <Contributors />}
        {steps[currentStep].content === "Add an issue" && <Issues />}
      </div>
      <div className="step-buttons">
        {currentStep > 0 && (
          <Button variant="outline-primary" size="sm" onClick={handlePrev}>
            Previous
          </Button>
        )}
        {currentStep === 0 && !createProjectSuccess && (
          <Button variant="outline-primary" size="sm" onClick={handleNext}>
            Next
          </Button>
        )}
        {currentStep === 0 && createProjectSuccess && (
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handleNext}
            disabled
          >
            Next
          </Button>
        )}
        {currentStep > 0 && (
          <Button variant="outline-primary" size="sm" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
