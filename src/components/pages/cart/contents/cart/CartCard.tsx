import { Link } from "react-router-dom";
import { useProductContext } from "../../../../../context/details/ProductContext";
import { useState } from "react";

type CartCardProps = {
  id: number;
  color: string;
  textColor: string;
  product: string;
  imgPath: string;
  price: number;
  checkbox: boolean;
  total: number;
  quantity: number;
};

const CartCard = (props: CartCardProps) => {
  const { setProduct } = useProductContext();

  // const [quantity, setQuantity] = useState(props.quantity);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    setProduct("" + props.id);
  };

  return (
    <div className="flex items-center w-[75%] h-[150px] mb-0 border-b-2 border-white pb-6 font-margarine text-white">
      <div className="w-5/12 flex flex-row items-center">
        <div>
          {props.checkbox ? (
            <img
              src="/assets/cart/checkbox.png"
              alt="checkbox"
              className="w-10 h-10 bg-black"
            />
          ) : (
            <img
              src="/assets/cart/checkbox.png"
              alt="checkbox"
              className="w-10 h-10"
            />
          )}
        </div>
        <div className={`bg-${props.color} w-[120px] h-[120px] ml-8`}>
          <Link to={"/details"}>
            <div
              onClick={handleClick}
              className="flex justify-center items-center bg-gradient-to-t from-slate-50/60 to-slate-500/5 w-[120px] h-[120px]"
            >
              <img
                src={props.imgPath}
                alt={props.product}
                className="h-[100px]"
              />
            </div>
          </Link>
        </div>
        <div className="text-2xl mx-6">{props.product}</div>
      </div>
      <div className="w-7/12 flex justify-between text-2xl">
        <span className="w-1/6">{props.price} ฿</span>
        <div className="flex justify-between items-center w-20">
          <button title="Decrease" onClick={decreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button title="Increase" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <span>{props.total} ฿</span>
      </div>
    </div>
  );
};

export default CartCard;
