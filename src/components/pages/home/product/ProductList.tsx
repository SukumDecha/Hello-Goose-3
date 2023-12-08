import productData from "../../../../libs/data/data.json";
import { majorColor } from "../../../../libs/Library";
import FavouriteCard from "../../favourite/card/FavouriteCard";
import { SearchProps } from "../searchbar/SearchBar";
import { useColorContext } from "../../../../context/ColorContext";

export interface ProductProps {
  id: number;
  major: string;
  name: string;
  img: string;
  price: number;
}

export interface ProductListProps extends SearchProps{
  id: number;
  title: string;
}

const ProductList = (props: ProductListProps) => {
  const { color } = useColorContext();

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center flex-col w-[93%] mb-20">
        <span className={`text-${color} font-margarine text-5xl mb-10`} >{props.title}</span>
        <div className="flex items-center h-[350px] justify-between overflow-x-scroll gap-9 no-scrollbar px-3">
            {productData
            .filter((data) =>
              data.name.toLowerCase().includes(props.search.toLowerCase())
            )
            .map(
              ({ major, name, price, img, id }: ProductProps, index: number) => (
                <FavouriteCard
                  key={index}
                  id={id}
                  color={majorColor[major]}
                  textColor={majorColor[major]}
                  product={name}
                  price={price}
                  imgPath={img}
                />
              )
            )}
          </div>
      </div>
    </div>
  );
};

export default ProductList;
