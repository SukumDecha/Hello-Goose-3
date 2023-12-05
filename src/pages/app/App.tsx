// App.tsx
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/app/banner/Banner";
import CardSection from "../../components/app/coupon/CardSection";
import ProductList from "../../components/app/product/ProductList";
import Footer from "../../components/footer/Footer";
import { ColorProvider, useColorContext } from "../../context/ColorContext";
import { MajorProvider } from "../../context/MajorContext";
import { SearchProvider } from "../../context/SearchContext";

import "./App.css";
import Sidebar from "../../components/navbar/Sidebar";
import { useState } from "react";

const App = () => {
  return (
    <ColorProvider>
      <MajorProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </MajorProvider>
    </ColorProvider>
  );
};

const AppContent = () => {
  const { color } = useColorContext();
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <div className={`bg-transition bg-linear-${color}`}>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Navbar setOpen={setSidebar}></Navbar>
      <Banner />
      <CardSection />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
