import { useEffect, useState } from "react";
import { useColorContext } from "../../../context/ColorContext";
import Category from "../../../components/pages/products/category/Category";
import HeaderSection from "../../../components/shared/HeaderSection";
import SearchBar from "../../../components/pages/home/searchbar/SearchBar";
import ProductList from "../../../components/shared/product/ProductList";
import { useFacultyContext } from "../../../context/category/FacultyContex";
import { useCategoryMajorContext } from "../../../context/category/CategoryMajorContext";
import { useCategoryContext } from "../../../context/category/CategoryContext";

const ProductCategoryPage = () => {
  const { color } = useColorContext();
  const [search, setSearch] = useState("");
  const { faculty, setFaculty } = useFacultyContext();
  const { categoryMajor, setCategoryMajor } = useCategoryMajorContext();
  const { category, setCategory } = useCategoryContext();
  const [filter, setFilter] = useState("id");

  useEffect(() => {
    setCategoryMajor("ALL");
  }, [faculty]);

  return (
    <div className={`bg-${color} h-full pb-20`}>
      <div className="bg-white/30 h-full">
        <HeaderSection />
        <br />
        <SearchBar search={search} setSearch={setSearch} />
        <br />
        <Category
          faculty={faculty}
          setFaculty={setFaculty}
          major={categoryMajor}
          setMajor={setCategoryMajor}
          category={category}
          setCategory={setCategory}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="mt-8">
          <ProductList
            search={search}
            setSearch={setSearch}
            title="New arrival"
            id={2}
            faculty={faculty}
            major={categoryMajor}
            category={category}
            filter={filter}
          />
          <ProductList
            search={search}
            setSearch={setSearch}
            title="The most recomended"
            id={1}
            faculty={faculty}
            major={categoryMajor}
            category={category}
            filter={filter}
          />
          <ProductList
            search={search}
            setSearch={setSearch}
            title="Products"
            id={0}
            faculty={faculty}
            major={categoryMajor}
            category={category}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductCategoryPage;
