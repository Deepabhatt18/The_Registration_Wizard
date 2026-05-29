export const validateEmail = (email) => {
  return email.includes("@");
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const matchPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const validateStepOne = (data) => {
  return (
    data.firstName.trim() !== "" &&
    data.lastName.trim() !== "" &&
    data.dob !== ""
  );
};