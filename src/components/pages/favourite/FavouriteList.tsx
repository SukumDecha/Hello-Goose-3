import { useFavouriteContext } from "../../../context/favourite/FavouriteContext";
import { useColorContext } from "../../../context/ColorContext";
import { ProductProps } from "../home/product/ProductList";
import jsonData from "../../../data/data.json";
import FavouriteCard from "./card/FavouriteCard";
import ContinueShopping from "../cart/header/ContinueShopping";
import "./FavouriteList.css";
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
    <div
      className={`bg-cover bg-center h-screen banner-${color}  px-[3em] h-fit`}
    >
      <div className="flex flex-col items-center w-full gap-8">
        <div className="flex w-[70%] font-margarine text-white">
          <div className="text-5xl mr-auto">MY LIKES</div>
          <ContinueShopping />
        </div>

        <div className="flex flex-wrap justify-center gap-12 px-12 mb-10">
          {favoriteItems}
        </div>
      </div>
    </div>
  );
}
