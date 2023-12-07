import HeaderSection from "../../../components/HeaderSection";
import { useColorContext } from "../../../context/ColorContext";

const ProductCategoryPage = () => {
  const { color } = useColorContext();
  return (
    <div className={`bg-${color} h-[100%] pb-20`}>
      <HeaderSection />
    </div>
  );
};
export default ProductCategoryPage;
