import {
  validateEmail,
  validatePassword,
  matchPassword,
  validateStepOne
} from "../utils/Validators.js";

const useFormValidation = (formData) => {

  const stepOneValid = validateStepOne(formData);

  const emailValid = validateEmail(formData.email);
  const passwordValid = validatePassword(formData.password);
  const confirmValid = matchPassword(
    formData.password,
    formData.confirmPassword
  );

  const stepTwoValid = emailValid && passwordValid && confirmValid;

  return {
    stepOneValid,
    stepTwoValid,
    emailValid,
    passwordValid,
    confirmValid
  };
};

export default useFormValidation;