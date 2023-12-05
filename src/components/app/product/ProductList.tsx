import Product from "./Product";
import productData from "../../../data/data.json";
import { useSearchContext } from "../../../context/SearchContext";

const textColor: Record<string, string> = {
  SIT: "blue",
  ENGINEER: "red",
  FiET: "orange",
};

const majorColor: Record<string, string> = {
  SIT: "blue",
  ENGINEER: "red",
  FiET: "orange",
};

// interface ProductListProps {
//   searchFilter: string;
// }

interface DataProps {
  major: string;
  name: string;
  img: string;
  price: number;
}
const ProductList = () => {
  const { search } = useSearchContext();

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center flex-wrap w-[90%] gap-8 my-8 p-12 ">
        {productData
          .filter((data) => data.name.includes(search))
          .map(({ major, name, price, img }: DataProps, index: number) => (
            <Product
              key={index}
              color={majorColor[major]}
              textColor={textColor[major]}
              product={name}
              price={price}
              imgPath={img}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
