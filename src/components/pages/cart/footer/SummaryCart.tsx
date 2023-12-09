
import { useColorContext } from "../../../../context/ColorContext";
import { useCartContext } from "../../../../context/cart/CartContext";
import { useLoginContext } from "../../../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useLoginModalContext } from "../../../../context/LoginModalContext";
import "./SummaryCart.css";
import { useState } from "react";
interface SummaryCartProps {
  totalPrice: number;
  selectedItem: number[];
}
const SummaryCart = ({ totalPrice, selectedItem }: SummaryCartProps) => {
  const { color } = useColorContext();
  const { setCart } = useCartContext();
  const { login } = useLoginContext();
  const { setLoginModal } = useLoginModalContext();
  const ringColor = `ring-2 ring-${color}-300`;
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleClick = () => {
    if (selectedItem.length <= 0 ){
      setErr("*please select product")
      return
    }
    if (!login) {
      setLoginModal(true);
      return;
    }

    setCart((prev) => {
      return [
        ...prev.filter((item) => selectedItem.some((s) => s === item.id)),
      ];
    });

    navigate("/checkout");
  };

  return (
    <div className="flex justify-center my-8">
      <div
        className={`flex flex-wrap justify-center font-margarine w-[80%] p-8 rounded-2xl bg-${color}`}
      >
        {/* Left Div */}
        <div className="left-div flex flex-col gap-4 w-[50%] text-white">
          <span className={`text-3xl`}>Choose shiping mode</span>
          <form>
            <div className="flex items-center gap-4">
              <input
                id="c1"
                name="c1"
                type="radio"
                checked={true}
                className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 ${ringColor} checked:bg-white`}
              />
              <span className={`text-md`}>Store pickup (in 20 mins)</span>

              <span className={`text-md`}>FREE</span>
            </div>

            <div className="flex items-center gap-4">
              <input
                id="c2"
                name="c1"
                type="radio"
                className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 ${ringColor} checked:bg-white`}
              />
              <span className={`text-md`}>
                Delivery of home (Under 2-4 day)
              </span>

              <span className={`text-md`}>50 ฿</span>
            </div>
          </form>
        </div>

        {/* Right Div */}

        <div className="right-div flex flex-col gap-4 w-[30%] ml-auto text-white">
          <div className="flex justify-between">
            <span className={`text-md`}>subtotal</span>
            <span className={`text-md`}>{`฿ ${totalPrice}`}</span>
          </div>

          <div className="flex justify-between">
            <span className={`text-md`}>Shipping</span>
            <span className={`text-md`}>Free</span>
          </div>
          <div className="flex justify-between">
            <span className={`text-md`}>Total</span>
            <span className={`text-md`}>{`฿ ${totalPrice}`}</span>
          </div>

          <button onClick={handleClick}>
            {" "}
            <div
              className={`flex justify-between mt-2 p-2.5 rounded-2xl bg-white/20 hover-big`}
            >
              <span className={`text-white text-md`}>Check out</span>
              <span className={`text-white text-md`}>{`฿ ${totalPrice}`}</span>
            </div>
          </button>
          <p className="text-sm text-rose-600">{err}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCart;
