import { Link } from "react-router-dom";
import { useCartContext } from "../../../../../context/cart/CartContext";

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
  selected: boolean;
  setSelect: (id: number) => void
};

const CartCard = (props: CartCardProps) => {
  const { setCart } = useCartContext();
  const updateQuantity = (increment: boolean) => {
    setCart((prev) => {
      const productIndex = prev.findIndex((data) => data.id === props.id);

      if (productIndex !== -1) {
        const updatedCart = [...prev];
        const newQuantity = increment
          ? updatedCart[productIndex].quantity + 1
          : Math.max(updatedCart[productIndex].quantity - 1, 1);

        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: newQuantity,
        };

        return updatedCart;
      }

      return [...prev];
    });
  };

  const increaseQuantity = () => {
    updateQuantity(true);
  };

  const decreaseQuantity = () => {
    updateQuantity(false);
  };

  return (
    <div className="flex items-center w-[75%] h-[150px] mb-0 border-b-2 border-white pb-6 font-margarine text-white">
      <div className="w-5/12 flex flex-row items-center">
        <div ><input type="checkbox" className="w-12 h-12 rounded border-none" checked={props.selected} onChange={()=>props.setSelect(props.id)}></input></div>
        <div className={`bg-${props.color} w-[120px] h-[120px] ml-8`}>
          <Link to={`/details/${props.id}`}>
            <div className="flex justify-center items-center bg-gradient-to-t from-slate-50/60 to-slate-500/5 w-[120px] h-[120px]">
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
          <span>{props.quantity}</span>
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
