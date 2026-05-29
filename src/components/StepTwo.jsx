import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";
import useFormValidation from "../hooks/useFormValidation";

const StepTwo = ({ formData, setFormData, step, setStep }) => {

  const [show, setShow] = useState(false);

  const {
    stepTwoValid,
    emailValid,
    passwordValid,
    confirmValid
  } = useFormValidation(formData);

  return (
    <div className="container">

      <ProgressBar step={step} />

      <h1>Account Details</h1>

      <div className="input-group">

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {!emailValid && formData.email && (
          <span className="error">Invalid Email</span>
        )}

        {/* Password */}
        <div className="password-box">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
          >
            👁
          </button>
        </div>
        {!passwordValid && formData.password && (
          <span className="error">Min 8 characters required</span>
        )}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value
            })
          }
        />
        {!confirmValid && formData.confirmPassword && (
          <span className="error">Passwords do not match</span>
        )}

      </div>

      <Navigation
        step={step}
        setStep={setStep}
        totalSteps={3}
        isNextDisabled={!stepTwoValid}
      />

    </div>
  );
};

export default StepTwo;