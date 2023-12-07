// App.tsx
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/pages/app/banner/Banner";
import CardSection from "../../components/pages/app/coupon/CardSection";
import ProductList from "../../components/pages/app/product/ProductList";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/navbar/Sidebar";
import { useState } from "react";
import { useColorContext } from "../../context/ColorContext";
import "./App.css";

const AppContent = () => {
  const { color } = useColorContext();
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <>
      <div className={`bg-transition bg-linear-${color}`}>
        <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
        <Navbar setOpen={setSidebar}></Navbar>
        <Banner />
        <CardSection />
        <ProductList />
        <Footer />
      </div>
    </>
  );
};

export default AppContent;
