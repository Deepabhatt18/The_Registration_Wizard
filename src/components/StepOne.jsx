import ProgressBar from "./ProgressBar.jsx";
import Navigation from "./Navigation.jsx";
import useFormValidation from "../hooks/useFormValidation.js";

const StepOne = ({ formData, setFormData, step, setStep }) => {
  const { stepOneValid } = useFormValidation(formData);
  return (
    <div className="container">

      <ProgressBar step={step} />

      <h1>Registration Wizard</h1>
      <p>Enter your personal details</p>

      <div className="input-group">
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />

        <input
          type="date"
          value={formData.dob}
          onChange={(e) =>
            setFormData({ ...formData, dob: e.target.value })
          }
        />
      </div>

       <Navigation
        step={step}
        setStep={setStep}
        totalSteps={3}
        isNextDisabled={!stepOneValid}
      />

    </div>
  );
};

export default StepOne;