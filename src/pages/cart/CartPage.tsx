import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/navbar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useColorContext } from "../../context/ColorContext";
import { useState } from "react";
import MyCart from "../../components/pages/cart/header/MyCart";

export default function CartPage() {
  const { color } = useColorContext();
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <div>
      <div className={`bg-transition bg-linear-${color}`}>
        <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
        <Navbar setOpen={setSidebar}></Navbar>
        <MyCart></MyCart>
        <Footer />
      </div>
    </div>
  );
}
