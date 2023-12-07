import { useFavouriteContext } from "../../../context/favourite/FavouriteContext";
import { useColorContext } from "../../../context/ColorContext";
import { ProductProps } from "../app/product/ProductList";
import jsonData from "../../../data/data.json";
import "./FavouriteList.css";
import FavouriteCard from "./FavouriteCard";
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
      className={`bg-cover bg-center h-screen banner-${color}  px-[3em] h-full`}
    >
      <div className="flex flex-col items-center w-full border-4 gap-8">
        <div className="flex w-[70%] ">
          <div className="font-mansalva text-5xl mr-auto">My Likes</div>
          <div className="border-2 border-blue-300"> Continue Shopping</div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 px-12 border-4 border-red-500 mb-8">
          {favoriteItems}
        </div>
      </div>
    </div>
  );
}
