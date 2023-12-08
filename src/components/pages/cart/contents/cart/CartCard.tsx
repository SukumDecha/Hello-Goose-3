import { Link } from "react-router-dom";
import { useCartContext } from "../../../../../context/cart/CartContext";
import productData from "../../../../../libs/data/data.json";

type CartCardProps = {
  id: number;
  color: string;
  textColor: string;
  product: string;
  imgPath: string;
  price: number;
  quantity: number;
  selectedItem: number[];
  setSelectedItem: (n: number[]) => void;
};

const CartCard = (props: CartCardProps) => {
  const { cart, setCart } = useCartContext();
  const { selectedItem, setSelectedItem } = props;

  const handleCheckBox = () => {
    setSelectedItem((prev) =>
      prev.includes(props.id)
        ? prev.filter((id) => id !== props.id)
        : [...prev, props.id]
    );
  };

  const updateQuantity = (increment: boolean) => {
    setCart((prev) => {
      const cartIndex = prev.findIndex((data) => data.id === props.id);

      if (cartIndex !== -1) {
        const updatedCart = [...prev];
        const newQuantity = increment
          ? updatedCart[cartIndex].quantity + 1
          : Math.max(updatedCart[cartIndex].quantity - 1, 1);

        updatedCart[cartIndex] = {
          ...updatedCart[cartIndex],
          quantity: newQuantity,
        };

        return updatedCart;
      }

      return [...prev];
    });
  };

  const getProduct = () => productData.find((data) => data.id === props.id);

  const product = getProduct();

  if (product == null || cart == null) {
    return null;
  }

  const cartProduct = cart.find((data) => data.id === props.id);
  const cartQuantity = cartProduct ? cartProduct.quantity : 0;
  const totalPrice = cartProduct ? product.price * cartQuantity : 0;

  const isChecked = selectedItem.includes(product.id);

  return (
    <div className="flex items-center w-[75%] h-[150px] mb-0 border-b-2 border-white pb-6 font-margarine text-white">
      <div className="w-5/12 flex flex-row items-center">
        <div onClick={handleCheckBox}>
        <div className={`w-7 h-7 mx-1 rounded-sm bg-white ${isChecked ? "hidden" : "block"}`}></div>
          <img
            src="/assets/cart/checkbox.png"
            alt="checkbox"
            className={`w-9 h-9 ${isChecked ? "block" : "hidden"}`}
          />
        </div>
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
          <button title="Decrease" onClick={() => updateQuantity(false)}>
            -
          </button>
          <span>{cartQuantity}</span>
          <button title="Increase" onClick={() => updateQuantity(true)}>
            +
          </button>
        </div>
        <span>{totalPrice} ฿</span>
      </div>
    </div>
  );
};

export default CartCard;
