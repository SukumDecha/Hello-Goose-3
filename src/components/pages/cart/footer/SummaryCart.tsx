import { useColorContext } from "../../../../context/ColorContext";
import "./SummaryCart.css";

interface SummaryCartProps {
  totalPrice: number;
}
const SummaryCart = ({ totalPrice }: SummaryCartProps) => {
  const { color } = useColorContext();
  const ringColor = `ring-2 ring-${color}-300`;

  return (
    <div className="flex justify-center my-8">
      <div
        className={`flex flex-wrap justify-center font-margarine w-[80%] p-8 rounded-2xl cart-${color}`}
      >
        {/* Left Div */}
        <div className="left-div flex flex-col gap-4 w-[50%]">
          <span className={`text-${color}  text-3xl `}>
            Choose shiping mode
          </span>
          <div className="flex items-center gap-4">
            <input
              id="c1"
              type="checkbox"
              className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 ${ringColor} checked:bg-blue-500`}
            />
            <span className={`text-${color} text-sm`}>
              Store pickup (in 20 mins)
            </span>

            <span className={`text-${color} text-sm`}>FREE</span>
          </div>

          <div className="flex items-center gap-4">
            <input
              id="c1"
              type="checkbox"
              className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 ${ringColor} checked:bg-blue-500`}
            />
            <span className={`text-${color} text-sm`}>
              Delivery of home (Under 2-4 day)
            </span>

            <span className={`text-${color} text-sm`}>50 ฿</span>
          </div>
        </div>

        {/* Right Div */}

        <div className="right-div flex flex-col gap-4 w-[30%] ml-auto">
          <div className="flex justify-between">
            <span className={`light-${color} text-sm`}>subtotal</span>
            <span className={`text-${color} text-sm`}>{`฿ ${totalPrice}`}</span>
          </div>

          <div className="flex justify-between">
            <span className={`light-${color} text-sm`}>Shipping</span>
            <span className={`text-${color} text-sm`}>Free</span>
          </div>
          <div className="flex justify-between">
            <span className={`light-${color} text-sm`}>Total</span>
            <span className={`text-${color} text-sm`}>{`฿ ${totalPrice}`}</span>
          </div>

          <div
            className={`flex justify-between mt-2 p-2.5 rounded-2xl bg-${color} hover-big`}
          >
            <span className={`text-white text-sm`}>subtotal</span>
            <span className={`text-white text-sm`}>{`฿ ${totalPrice}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCart;
