import { AddressSection } from "../../components/pages/checkout/AddressSection";
import { PaymentSection } from "../../components/pages/checkout/PaymentSection";
import ProductSection from "../../components/pages/checkout/ProductSection";
import Stepper from "../../components/pages/checkout/Stepper";

export default function CheckoutPage() {
  return (
    <div className="bg-[#86AEE8] flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper></Stepper>
      <div className="bg-[#528FE9] w-[850px] h-[500px] flex flex-col justify-center  rounded-3xl   ">
        <ProductSection />
        <AddressSection />
        <PaymentSection />
        {/* <Summary /> */}
      </div>
    </div>
  );
}
