import ColorButton from "./button/ColorButton";
import { ProductProps } from "../home/product/ProductList";
import "./ProductDetails.css";
import { useCartContext } from "../../../context/cart/CartContext";
import { useNavigate } from "react-router-dom";
import {
  FavouriteProps,
  useFavouriteContext,
} from "../../../context/favourite/FavouriteContext";

const ProductDetails = ({ name, price, img, major, id }: ProductProps) => {
  const navigate = useNavigate();
  const { cart, setCart } = useCartContext();
  const { favourite, setFavourite } = useFavouriteContext();

  const isFavorite = favourite.some((item) => item.id === id);

  const handleAddToCart = () => {
    setCart((prev) => {
      return [...prev, { id, quantity: 1 }];
    });
    setTimeout(() => {
      /* Should route into cart page */
      navigate("/cart", { replace: true });
    }, 100);

    console.log(cart);
  };

  const handleToggleFavourite = () => {
    setFavourite((prev: FavouriteProps[]) => {
      const isAlreadyFavourite = prev.some((item) => item.id === id);

      if (isAlreadyFavourite) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id }];
      }
    });

    // setTimeout(() => {
    //   /* Should route into favourite page */
    //   navigate("/", { replace: true });
    // }, 100);

    console.log(favourite);
  };

  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={img} alt="bag" className="h-[500px]" />
        <div className="flex flex-row mb-10 gap-5">
          <img src={img} alt={img} className="h-[120px]  " />
          <img src={img} alt={img} className="h-[120px] " />
          <img src={img} alt={img} className="h-[120px] " />
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
              ฿ {price}
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
            onClick={handleAddToCart}
            className={`flex justify-around items-center btn-${major} w-52 h-16 rounded-2xl p-4 hover-big
            `}
          >
            <img src="/assets/products/Cart.png" alt="cart" className="w-9" />
            <span className="text-xl">Add to cart</span>
          </div>

          <div className="hover-btn" onClick={handleToggleFavourite}>
            {isFavorite ? (
              <img
                src="/assets/products/heartFill.png"
                alt="heart"
                className="w-14 h-12"
              />
            ) : (
              <img
                src="/assets/products/heartNotFill.png"
                alt="heart"
                className="w-14 h-12"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;