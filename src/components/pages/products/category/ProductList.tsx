import productData from "../../../../libs/data/data.json";
import { majorColor } from "../../../../libs/Library";
import FavouriteCard from "../../favourite/card/FavouriteCard";
import { SearchProps } from "../../home/searchbar/SearchBar";
import { useColorContext } from "../../../../context/ColorContext";
import { ProductProps } from "../../home/product/ProductList";
import "./ProductList.css";
export interface ProductListProps extends SearchProps {
  faculty: string;
  major: string;
  category: string;
  filter: string;
  id: number;
  title: string;
}

const ProductList = (props: ProductListProps) => {
  const { color } = useColorContext();
  const products = productData
    .filter((data) =>
      data.name.toLowerCase().includes(props.search.toLowerCase())
    )
    .filter(
      (data) =>
        data.display === props.id &&
        (props.faculty === "ALL" ? true : data.major === props.faculty) &&
        (props.major === "ALL" ? true : data.submajor === props.major) &&
        (props.category === "ALL" ? true : data.type === props.category)
    )
    .sort((a, b) => {
      if (props.filter === "Highest Price") {
        return a.price > b.price ? -1 : 1;
      }
      if (props.filter === "Lowest Price") {
        return a.price > b.price ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

  if (products.length <= 0) {
    return <div></div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center flex-col w-[93%] mb-20">
        <span className={`textt-${color} font-margarine text-5xl mb-10`}>
          {props.title}
        </span>
        <div className="flex items-center h-[350px] justify-start overflow-x-scroll gap-9 no-scrollbar px-3">
          {products.map(
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
