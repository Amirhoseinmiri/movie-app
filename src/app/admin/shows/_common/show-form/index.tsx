"use client";
import React, { useState } from "react";
import CastandCrew from "./cast-and-crew";
import Basic from "./basic";
import Media from "./media";
import { Form, Steps } from "antd";
const ShowForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showFormData, setShowFormData] = useState({});
  const commonProps = {
    activeStep,
    setActiveStep,
    showFormData,
    setShowFormData,
  };
  const stepsData = [
    { name: "Basic", component: <Basic {...commonProps} /> },
    { name: "Cast & Crew", component: <CastandCrew {...commonProps} /> },
    { name: "Media", component: <Media {...commonProps} /> },
  ];
  const onFinish = (value: any) => {
    console.log("Success", value);
  };
  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Steps current={activeStep}>
        {stepsData.map((step, index) => (
          <Steps.Step key={index} title={step.name} />
        ))}
      </Steps>
      <div className="mt-5">{stepsData[activeStep].component}</div>
    </Form>
  );
};

export default ShowForm;

export interface IShowFormStep {
  activeStep: number;
  showFormData: any;
  setActiveStep: (step: number) => void;
  setShowFormData: (data: any) => void;
}
