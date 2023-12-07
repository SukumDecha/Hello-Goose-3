import { ProductProps } from "../../../components/pages/home/product/ProductList";
import { useProductContext } from "../../../context/details/ProductContext";
import { useState } from "react";
import ProductDetails from "../../../components/pages/products/ProductDetails";
import Login from "../../../components/pages/login/Login";
import Navbar from "../../../components/shared/navbar/Navbar";
import Sidebar from "../../../components/shared/navbar/Sidebar";
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
    <div className={`bg-${currentProduct.major} h-[100%] pb-20`}>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Login isOpen={isLoginOpen} setOpen={setLogin} />
      <Navbar setOpen={setSidebar} setLogin={setLogin}></Navbar>
      <ProductDetails {...currentProduct} />
      {/* <Footer /> */}
    </div>
  );
};
export default ProductDetailPage;
