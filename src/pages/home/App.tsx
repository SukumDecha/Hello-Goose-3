// App.tsx
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/pages/home/banner/Banner";
import CardSection from "../../components/pages/home/coupon/CardSection";
import ProductList from "../../components/pages/home/product/ProductList";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/navbar/Sidebar";
import Login from "../../components/pages/login/Login";
import { useState } from "react";
import { useColorContext } from "../../context/ColorContext";
import "./App.css";

const AppContent = () => {
  const { color } = useColorContext();
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isLoginOpen, setLogin] = useState(false);

  return (
    <>
      <div className={`bg-transition bg-linear-${color}`}>
        <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
        <Login isOpen={isLoginOpen} setOpen={setLogin} />
        <Navbar setOpen={setSidebar} setLogin={setLogin}></Navbar>
        <Banner />
        <CardSection />
        <ProductList />
        <Footer />
      </div>
    </>
  );
};

export default AppContent;
