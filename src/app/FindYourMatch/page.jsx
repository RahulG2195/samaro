"use client";
import React, { useState } from "react";
import "@/components/FindYourMatch/findmatch.css";
import StepPoints from "@/components/FindYourMatch/StepPoints";
import StepOne from "@/components/FindYourMatch/StepOne";
import StepTwo from "@/components/FindYourMatch/StepTwo";
import StepThree from "@/components/FindYourMatch/StepThree";
import StepFour from "@/components/FindYourMatch/StepFour";
import { useRouter } from "next/navigation";

const steps = [
  // Define steps here, e.g.,
  { title: "Get Started", Page: <StepPoints /> },
  { title: "Continue", Page: <StepOne /> },
  { title: "Continue", Page: <StepTwo /> },
  { title: "Continue", Page: <StepThree /> },
  { title: "Submit", Page: <StepFour /> },
];
const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const nextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = (data) => {
    data.preventDefault();
    router.push("/StepOutput");
  };
  return (
    <>
      <section className="finyourMatch_sec my-md-5 my-3">
        <div className="container">
          <div className="row">
            <form onSubmit={handleFormSubmit} className="step_form">
              {currentStep > 0 && (
                <i
                  onClick={prevStep}
                  className="fa-solid fa-chevron-left prev_step"
                ></i>
              )}
              {steps[currentStep].Page}
              {currentStep < steps.length - 1 && (
                <div className="step_next_button">
                  <button
                    className="btn border-3 border-danger rounded-pill step_button"
                    onClick={nextStep}
                  >
                    {" "}
                    {steps[currentStep].title}{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              )}
              {/* {currentStep > 0 && <button onClick={prevStep}>Previous</button>} */}
              {currentStep === steps.length - 1 && (
                <div className="step_next_button">
                  <button
                    className="btn border-3 submit_btn_match border-danger rounded-pill"
                    onClick={() => handleFormSubmit(/* form data */)}
                  >
                    {" "}
                    Submit <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
