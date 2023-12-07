import { ProductProps } from "../../../components/pages/app/product/ProductList";
import Navbar from "../../../components/navbar/Navbar";
import ProductDetails from "../../../components/pages/products/details/ProductDetails";
import { useProductContext } from "../../../context/details/ProductContext";
import productData from "../../../data/data.json";
import "./ProductDetailPage.css";
import { useState } from "react";
import Sidebar from "../../../components/navbar/Sidebar";

const ProductDetailPage = () => {
  const { product } = useProductContext();
  const [isSidebarOpen, setSidebar] = useState(false);

  const currentProduct: ProductProps | undefined = productData.find(
    (data) => data.id === +product
  );

  if (!currentProduct) {
    return <div>Error 404</div>;
  }

  return (
    <div className={`bg-${currentProduct.major} w-full h-full`}>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Navbar setOpen={setSidebar}></Navbar>
      <ProductDetails {...currentProduct} />
    </div>
  );
};
export default ProductDetailPage;
