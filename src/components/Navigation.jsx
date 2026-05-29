const Navigation = ({ step, setStep, totalSteps, isNextDisabled ,onSubmit}) => {
  return (
    <div className="nav-buttons">

      <button
        onClick={() => setStep(step - 1)}
        disabled={step === 1}
      >
        Back
      </button>

      <button
        onClick={() =>{
          if (step === totalSteps) {
            onSubmit && onSubmit();
          } else {
            setStep(step + 1);
          }
        }}
        disabled={isNextDisabled}
      >
        {step === totalSteps ? "Submit" : "Next"}
      </button>

    </div>
  );
};

export default Navigation;
