import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <>
      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <StepThree
          formData={formData}
          step={step}
          setStep={setStep}
        />
      )}

      {step === 4 && <Success />}
    </>
  );
}

export default App;