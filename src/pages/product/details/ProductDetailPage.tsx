import { ProductProps } from "../../../components/app/product/ProductList";
import Navbar from "../../../components/navbar/Navbar";
import ProductDetails from "../../../components/products/details/ProductDetails";
import { useProductContext } from "../../../context/ProductContext";
import productData from "../../../data/data.json";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { product } = useProductContext();

  const currentProduct: ProductProps | undefined = productData.find(
    (data) => data.id === +product
  );

  if (!currentProduct) {
    return <div>Error 404</div>;
  }

  return (
    <div className={`bg-${currentProduct.major} w-full h-full`}>
      <Navbar></Navbar>
      <ProductDetails {...currentProduct} />
    </div>
  );
};
export default ProductDetailPage;
