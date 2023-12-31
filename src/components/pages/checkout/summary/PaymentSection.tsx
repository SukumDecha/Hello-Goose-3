import { useState } from "react";

interface PaymentProps {
  currentStep: number;
  setCurrentStep: (n: number) => void;
}

export const PaymentSection = ({
  currentStep,
  setCurrentStep,
}: PaymentProps) => {
  const [err, setErr] = useState("");
  const [payment, setPayment] = useState("");

  const handleClick = () => {
    if (!payment) {
      setErr("*please select payment method");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      <div className=" items-center flex mx-3 mt-3">
        <div className="text-white text-lg font-margarine ">
          {" "}
          PAYMENT <br /> WITH{" "}
        </div>
        <form
          className="flex"
          onClick={(e: any) => {
            setPayment(e.target.value);
          }}
        >
          <div className="flex flex-row gap-4 items-center ml-8">
            <input
              id="c1"
              name="c1"
              type="radio"
              value="paypal"
              className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 checked:bg-white`}
            />
            <span className="text-[rga(255,255,255,0.70)  text-white font-[24px] font-margarine">
              {" "}
              PAYPAL
            </span>
          </div>

          <div className="flex flex-row gap-4 items-center ml-8">
            <input
              id="c2"
              name="c1"
              type="radio"
              value="create_card"
              className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 checked:bg-white`}
            />
            <span className="text-[rga(255,255,255,0.70)  text-white font-[24px] font-margarine">
              {" "}
              CREDIT CARD
            </span>
          </div>

          <div className="flex flex-row gap-4 items-center ml-8">
            <input
              id="c3"
              name="c1"
              type="radio"
              value="cash_on_delivery"
              className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 checked:bg-white`}
            />
            <span className="text-[rga(255,255,255,0.70)  text-white font-[24px] font-margarine ">
              {" "}
              Cash on delivery{" "}
            </span>
          </div>
        </form>
        <button
          className="btn h-[50px] w-[100px] text-[#fff]   border  border-[#FFF] font-margarine bg-[#0547A6] rounded-3xl ml-auto"
          onClick={handleClick}
        >
          {" "}
          Pay{" "}
        </button>
      </div>
      <div className="flex">
        <p className="text-sm text-rose-600 ml-auto">{err}</p>
      </div>
    </div>
  );
};
