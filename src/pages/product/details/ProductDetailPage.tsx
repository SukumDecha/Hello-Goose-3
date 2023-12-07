import { ProductProps } from "../../../components/pages/home/product/ProductList";
import { useProductContext } from "../../../context/details/ProductContext";
import ProductDetails from "../../../components/pages/products/ProductDetails";
import productData from "../../../data/data.json";
import HeaderSection from "../../../components/HeaderSection";
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
    <div className={`bg-${currentProduct.major} h-[100%] pb-20`}>
      <HeaderSection />
      <ProductDetails {...currentProduct} />
      {/* <Footer /> */}
    </div>
  );
};
export default ProductDetailPage;
