import { useState } from "react";
import { useColorContext } from "../../../context/ColorContext";
import Category from "../../../components/pages/products/category/header/Category";
import HeaderSection from "../../../components/shared/HeaderSection";
import SearchBar from "../../../components/pages/home/searchbar/SearchBar";

const ProductCategoryPage = () => {
  const { color } = useColorContext();
  const [search, setSearch] = useState("");

  return (
    <div className={`bg-${color} h-screen pb-20`}>
      <div className="bg-white/30 h-screen">
        <HeaderSection />
        <br />
        <SearchBar search={search} setSearch={setSearch} />
        <br />
        <Category />
      </div>
    </div>
  );
};
export default ProductCategoryPage;
