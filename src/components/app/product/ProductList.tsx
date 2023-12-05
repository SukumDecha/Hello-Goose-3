import Product from "./Product";
import productData from "../../../data/data.json";

const textColor: Record<string, string> = {
    SIT: "blue",
    engineer: "red",
    FiET: "orange",
};

const majorColor: Record<string, string> = {
    SIT: "blue-500",
    engineer: "red-500",
    FiET: "orange-500",
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
  return (
    <div className="flex flex-wrap w-[90%] border-1">
      {productData.map(({ major, name, price, img }: DataProps, index: number) => (
        <Product key={index} color={majorColor[major]} textColor={textColor[major]}
        product={name} price={price} imgPath={img}/>
      ))}
    </div>
  );
};

export default ProductList;
