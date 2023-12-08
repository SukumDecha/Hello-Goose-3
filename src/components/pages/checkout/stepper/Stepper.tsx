import { TiTick } from "react-icons/ti";
import "./stepper.css";

interface StepperProps {
  currentStep: number;
}
const Stepper = ({ currentStep }: StepperProps) => {
  const steps = ["Sign in ", "Order Summary ", "Complete"];
  const complete = currentStep === 3;
  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-white opacity-70">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
