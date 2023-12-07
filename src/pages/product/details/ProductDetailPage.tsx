import { ProductProps } from "../../../components/pages/home/product/ProductList";
import { useProductContext } from "../../../context/details/ProductContext";
import { useState } from "react";

import Navbar from "../../../components/navbar/Navbar";
import ProductDetails from "../../../components/pages/products/ProductDetails";
import Sidebar from "../../../components/navbar/Sidebar";
import Login from "../../../components/pages/login/Login";
import productData from "../../../data/data.json";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { product } = useProductContext();
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isLoginOpen, setLogin] = useState(false);

  const currentProduct: ProductProps | undefined = productData.find(
    (data) => data.id === +product
  );

  if (!currentProduct) {
    return <div>Error 404</div>;
  }

  return (
    <div className={`bg-${currentProduct.major} w-full h-full`}>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Navbar setOpen={setSidebar} setLogin={setLogin}></Navbar>
      <Login isOpen={isLoginOpen} setOpen={setLogin} />
      <ProductDetails {...currentProduct} />
    </div>
  );
};
export default ProductDetailPage;
