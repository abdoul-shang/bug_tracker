import React from "react";
import Stepper from "../../stepper/Stepper";

const Management = () => {
  const steps = [
    { content: "Create project", name: "project" },
    { content: "Add contributors", name: "contributors" },
    { content: "Add an issue", name: "issues" },
  ];

  console.log("content", steps);
  return (
    <div>
      <Stepper steps={steps} />
    </div>
  );
};

export default Management;
