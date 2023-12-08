import productData from "../../../../libs/data/data.json";
import { majorColor } from "../../../../libs/Library";
import FavouriteCard from "../../favourite/card/FavouriteCard";
import { SearchProps } from "../searchbar/SearchBar";

export interface ProductProps {
  id: number;
  major: string;
  name: string;
  img: string;
  price: number;
}

const ProductList = (props: SearchProps) => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center flex-wrap w-[90%] gap-8 my-8 p-12 ">
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
  );
};

export default ProductList;
