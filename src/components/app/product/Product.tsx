import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/ProductContext";
import "./Product.css";

type ProductProps = {
  id: number;
  color: string;
  textColor: string;
  product: string;
  imgPath: string;
  price: number;
};

const Product = (props: ProductProps) => {
  const { setProduct } = useProductContext();

  const handleClick = () => {
    setProduct("" + props.id);
  };

  return (
    <Link to={"/details"}>
      <div onClick={handleClick}>
        <div className={`bg-${props.color} w-full h-[260px] rounded-2xl`}>
          <div className="flex flex-col bg-gradient-to-t from-slate-50/60 to-slate-500/5 rounded-2xl w-[250px] h-[260px]">
            <div className="flex justify-center h-[65%]">
              <img
                src={props.imgPath}
                alt="productImg"
                className="px-10 pt-4"
              />
            </div>
            <div
              className={`text-${props.textColor} flex justify-between items-center mx-10 my-2 text-lg font-margarine`}
            >
              <span className="w-[60px]">{props.product}</span>
              <span className="w-[60px]">{props.price} ฿</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
