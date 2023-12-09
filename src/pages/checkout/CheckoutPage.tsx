import { useState } from "react";
import { AddressSection } from "../../components/pages/checkout/summary/AddressSection";
import { PaymentSection } from "../../components/pages/checkout/summary/PaymentSection";
import { useCartContext } from "../../context/cart/CartContext";
import ProductSection from "../../components/pages/checkout/summary/ProductSection";
import Stepper from "../../components/pages/checkout/summary/stepper/Stepper";
import jsonData from "../../libs/data/data.json";
import { ProductProps } from "../../components/shared/product/ProductList";
import SummarySection from "../../components/pages/checkout/complete/CompleteSection";

export interface ProductSectionProps extends ProductProps {
  quantity: number;
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(2);
  const { cart } = useCartContext();

  const getSelectedProduct: ProductSectionProps[] = jsonData
    .filter((item: ProductProps) => cart.some((ca) => ca.id === item.id))
    .map((product) => ({
      ...product,
      quantity: cart.find((ca) => ca.id === product.id)?.quantity || 0,
    }));

  const totalPrice = getSelectedProduct.reduce((acc, product) => {
    const quantity =
      cart.find((cartItem) => cartItem.id === product.id)?.quantity ?? 0;
    return acc + product.price * quantity;
  }, 0);

  return (
    <div className="bg-[#86AEE8] flex flex-col gap-10 h-auto items-center justify-center p-8 ">
      <Stepper currentStep={currentStep} />
      <div className="bg-[#528FE9] w-[80%] h-fit flex flex-col justify-center  rounded-3xl p-8">
        {currentStep === 2 ? (
          <div>
            <ProductSection selectedItems={getSelectedProduct} />
            <AddressSection totalPrice={totalPrice} />
            <PaymentSection
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />{" "}
          </div>
        ) : (
          <SummarySection />
        )}
      </div>
    </div>
  );
}
