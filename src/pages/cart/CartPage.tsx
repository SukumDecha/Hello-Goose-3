import { useState } from "react";
import HeaderSection from "../../components/shared/HeaderSection";
import CartList from "../../components/pages/cart/contents/cartList/CartList";
import SummaryCart from "../../components/pages/cart/footer/SummaryCart";
import CartHeader from "../../components/pages/cart/header/CartHeader";
import { useColorContext } from "../../context/ColorContext";
import productData from "../../libs/data/data.json";
import "./CartPage.css";
import { ProductProps } from "../../components/pages/home/product/ProductList";
import { useCartContext } from "../../context/cart/CartContext";

export interface CartPageProps {
  selectedItem: number[];
  setSelectedItem: (n: number[]) => void;
}

export default function CartPage() {
  const { color } = useColorContext();
  const { cart } = useCartContext();
  const [selectedItem, setSelectedItem] = useState<number[]>([]);

  const getSelectedProduct = () =>
    productData.filter((item: ProductProps) => selectedItem.includes(item.id));

  const totalPrice = getSelectedProduct().reduce((acc, product) => {
    const quantity =
      cart.find((cartItem) => cartItem.id === product.id)?.quantity ?? 0;
    return acc + product.price * quantity;
  }, 0);

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
          <SummaryCart totalPrice={totalPrice} />
        </div>
        <div
          className={`bg-cover bg-center banner-${color} h-screen mt-[-500px] w-full`}
        ></div>
      </div>
    </div>
  );
}
