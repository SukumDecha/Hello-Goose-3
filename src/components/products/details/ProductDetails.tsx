import ColorButton from "./ColorButton/ColorButton";
import { ProductProps } from "../../app/product/ProductList";
import "./ProductDetails.css";

const ProductDetails = ({ name, price, img, major }: ProductProps) => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={img} alt="bag" className="h-[500px]" />
        <div className="flex flex-row mb-10 gap-5">
          <img src={img} alt={img} className="h-[80px]" />
          <img src={img} alt={img} className="h-[80px]" />
          <img src={img} alt={img} className="h-[80px]" />
        </div>
      </div>
      <div className="flex flex-col w-2/4 font-margarine text-white gap-5">
        <span className="text-5xl tracking-wide">{name}</span>
        <div className="flex flex-row gap-10 mx-2">
          <ColorButton color={"1"}></ColorButton>
          <ColorButton color={"2"}></ColorButton>
          <ColorButton color={"3"}></ColorButton>
          <ColorButton color={"4"}></ColorButton>
        </div>
        <div className="flex flex-row gap-44">
          <div className="flex flex-col font-serif text-l tracking-wide gap-2">
            <span className="text-gray-300">PRICE</span>
            <span className={`text-[#0447A6] text-3xl font-medium`}>
              $ {price}
            </span>
          </div>
          <div className={`flex flex-col font-serif tracking-wide gap-2`}>
            <span className="text-gray-300">REVIEWS</span>
            <span className={`text-[#0447A6] text-3xl`}>★★★★☆</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-300">
          <span className="tracking-wide text-2xl">DESCRIPTION</span>
          <span className="w-[550px] font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            nihil quasi alias adipisci maxime totam minus soluta, eos vel atque
            facere qui quibusdam minima incidunt doloribus tempora quos nisi
            vero!
          </span>
        </div>
        <div className="flex flex-row items-center gap-20">
          <div
            className={`flex justify-around items-center btn-${major} w-52 h-16 rounded-2xl p-4`}
          >
            <img src="/assets/products/Cart.png" alt="cart" className="w-9" />
            <span className="text-xl">Add to cart</span>
          </div>
          <img
            src="/assets/products/heartNotFill.png"
            alt="heart"
            className="w-14 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
