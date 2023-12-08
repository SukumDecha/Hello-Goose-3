import { useState } from "react";
import HeaderSection from "../../components/HeaderSection";
import CartList from "../../components/pages/cart/contents/cartList/CartList";
import SummaryCart from "../../components/pages/cart/footer/SummaryCart";
import CartHeader from "../../components/pages/cart/header/CartHeader";
import { useColorContext } from "../../context/ColorContext";
import jsonData from "../../libs/data/data.json";


import "./CartPage.css";
import { CartProps, useCartContext } from "../../context/cart/CartContext";

export interface CartPageProps {
  cart: CartProps[]
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>
  selectedItem: number[];
  setSelectedItem: (n: number[]) => void;
}

export default function CartPage() {
  const { color } = useColorContext();
  const [selectedItem, setSelectedItem] = useState<number[]>([]);
  const { cart, setCart } = useCartContext();

  const getTotalPrice = () => {
    let totalPrice = 0
    for (let id of selectedItem) {
      let item = jsonData.find(item => item.id === id)
      totalPrice +=   (item?.price || 0) * (cart.find(item => item.id === id)?.quantity || 1)
    }
    return totalPrice
  }
  return (
    <div className={`bg-${color}`}>
      <div className="bg-white/20">
        <div className={`w-full`}>
          <HeaderSection />
          <CartHeader />
          <CartList
            cart={cart}
            setCart={setCart}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />

          <SummaryCart totalPrice={getTotalPrice()} />
        </div>
        <div
          className={`bg-cover bg-center banner-${color} h-screen mt-[-500px] w-full`}
        ></div>
      </div>
    </div>
  );
}
