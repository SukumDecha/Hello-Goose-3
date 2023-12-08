import HeaderSection from "../../components/shared/HeaderSection";
import Footer from "../../components/shared/footer/Footer";
import Banner from "../../components/pages/home/banner/Banner";
import CardSection from "../../components/pages/home/coupon/CardSection";
import { useColorContext } from "../../context/ColorContext";
import "./HomePage.css";
import { useState } from "react";
import ProductList from "../../components/pages/home/product/ProductList";

const Home = () => {
  const { color } = useColorContext();
  const [search, setSearch] = useState("");
  return (
    <>
      <div className={`bg-transition bg-linear-${color}-banner`}>
        <HeaderSection />
        <Banner search={search} setSearch={setSearch} />
      </div>

      {!search ? (
        <div className={`bg-transition bg-linear-${color}`}>
          <CardSection />
          <ProductList
            search={search}
            setSearch={setSearch}
            title="New arrival"
            id={2}
          />
          <ProductList
            search={search}
            setSearch={setSearch}
            title="The most recomended"
            id={1}
          />
          <ProductList
            search={search}
            setSearch={setSearch}
            title="Products"
            id={0}
          />
        </div>
      ) : (
        <div className={`bg-cover bg-center banner-${color}`}>
          <ProductList
            search={search}
            setSearch={setSearch}
            title="New arrival"
            id={2}
          />
          <ProductList
            search={search}
            setSearch={setSearch}
            title="Products"
            id={0}
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
