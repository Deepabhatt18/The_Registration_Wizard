import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";

const StepThree = ({ formData, step, setStep }) => {
   const handleSubmit = () => {
    console.log(formData);
    setStep(4);
  };
  return (
    <div className="container">

      <ProgressBar step={step} />

      <h1>Review Details</h1>

      <div className="review">
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>DOB:</strong> {formData.dob}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <Navigation
        step={step}
        setStep={setStep}
        totalSteps={3}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default StepThree;