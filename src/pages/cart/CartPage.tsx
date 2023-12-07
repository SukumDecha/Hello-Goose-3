import HeaderSection from "../../components/HeaderSection";
import CartList from "../../components/pages/cart/contents/cartList/CartList";
import SummaryCart from "../../components/pages/cart/footer/SummaryCart";
import CartHeader from "../../components/pages/cart/header/CartHeader";
import { useColorContext } from "../../context/ColorContext";

import "./CartPage.css";
export default function CartPage() {
  const { color } = useColorContext();
  return (
    <div>
      <HeaderSection />
      <div className={`bg-cover bg-center h-screen banner-${color}`}>
        <CartHeader />
        <CartList/>
        <SummaryCart totalPrice={50} />
      </div>
    </div>
  );
}
