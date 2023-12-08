import { ProductProps } from "../../../components/pages/home/product/ProductList";
import ProductDetails from "../../../components/pages/products/details/ProductDetails";
import productData from "../../../libs/data/data.json";
import HeaderSection from "../../../components/shared/HeaderSection";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import { majorColor } from "../../../libs/Library";

const ProductDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Slug not found...</div>;
  }

  const productId = +id; // Convert id to a number

  const currentProduct: ProductProps | undefined = productData.find(
    (data) => data.id === productId
  );

  if (!currentProduct) {
    return <div>Product not found...</div>;
  }

  return (
    <div className={`bg-${currentProduct.major} h-[1000px] pb-20`}>
      <HeaderSection />
      <div className="w-full flex justify-center items-center">
        <ProductDetails {...currentProduct} />
      </div>
      <div
        className={`bg-cover bg-center banner-${
          majorColor[currentProduct.major]
        } h-screen mt-[-500px] w-full`}
      ></div>
    </div>
  );
};
export default ProductDetailPage;
