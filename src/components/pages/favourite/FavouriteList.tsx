import { useFavouriteContext } from "../../../context/favourite/FavouriteContext";
import { useColorContext } from "../../../context/ColorContext";
import { ProductProps } from "../home/product/ProductList";
import jsonData from "../../../libs/data/data.json";
import FavouriteCard from "./card/FavouriteCard";
import ContinueShopping from "../cart/header/BackButton";
import "./FavouriteList.css";
import HeaderSection from "../../HeaderSection";

const majorColor: Record<string, string> = {
  SIT: "blue",
  ENGINEER: "red",
  FiET: "orange",
};

export default function FavouriteList() {
  const { favourite } = useFavouriteContext();
  const { color } = useColorContext();

  const favoriteItems = jsonData
    .filter((item: ProductProps) => favourite.some((fav) => fav.id === item.id))
    .map(({ major, name, price, img, id }: ProductProps) => (
      <FavouriteCard
        key={id}
        id={id}
        color={majorColor[major]}
        textColor={majorColor[major]}
        product={name}
        price={price}
        imgPath={img}
      />
    ));

  return (
    <div className={`bg-linear-${color} w-full`}>
      <HeaderSection />
      <div className="flex flex-col items-center w-full h-fit gap-8 pt-8">
        <div className="flex w-[70%] font-margarine text-white">
          <div className="text-5xl mr-auto">MY LIKES</div>
          <ContinueShopping />
        </div>

        <div className="flex flex-wrap justify-center gap-12 px-12 mb-10">
          {favoriteItems}
        </div>
        <div
          className={`bg-cover bg-center banner-${color} h-screen mt-[-500px] w-full`}
        ></div>
      </div>
    </div>
  );
}
