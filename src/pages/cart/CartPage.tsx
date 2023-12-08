import { useState } from "react";
import HeaderSection from "../../components/HeaderSection";
import CartList from "../../components/pages/cart/contents/cartList/CartList";
import SummaryCart from "../../components/pages/cart/footer/SummaryCart";
import CartHeader from "../../components/pages/cart/header/CartHeader";
import { useColorContext } from "../../context/ColorContext";

import "./CartPage.css";

export interface CartPageProps {
  selectedItem: number[];
  setSelectedItem: (n: number[]) => void;
}

export default function CartPage() {
  const { color } = useColorContext();
  const [selectedItem, setSelectedItem] = useState<number[]>([]);

  return (
    <div className={`bg-${color}`}>
      <div className="bg-white/20">
        <div className={`w-full`}>
          <HeaderSection />
          <CartHeader />
          <CartList
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <SummaryCart totalPrice={50} />
        </div>
        <div
          className={`bg-cover bg-center banner-${color} h-screen mt-[-500px] w-full`}
        ></div>
      </div>
    </div>
  );
}
