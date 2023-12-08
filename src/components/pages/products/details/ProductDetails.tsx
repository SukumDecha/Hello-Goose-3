import ColorButton from "./button/ColorButton";
import { ProductProps } from "../../home/product/ProductList";
import { useCartContext } from "../../../../context/cart/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import {
  FavouriteProps,
  useFavouriteContext,
} from "../../../../context/favourite/FavouriteContext";

import "react-toastify/dist/ReactToastify.css";

import "./ProductDetails.css";

const ProductDetails = ({ name, price, img, major, id }: ProductProps) => {
  const { cart, setCart } = useCartContext();
  const { favourite, setFavourite } = useFavouriteContext();
  const [isAdded, setAdded] = useState(cart.some((item) => item.id === id));

  const isFavorite = favourite.some((item) => item.id === id);

  const handleAddToCart = () => {
    setAdded(!isAdded);
    if (isAdded) {
      setCart((prev) => {
        return [...prev.filter((item) => item.id != id)];
      });

      toast.error(`Removed ${name}`);
      return;
    }
    
    setCart((prev) => {
      return [...prev, { id, quantity: 1 }];
    });

    toast.success(`Added ${name}`);
    console.log(cart);
  };

  const handleToggleFavourite = () => {
    setFavourite((prev: FavouriteProps[]) => {
      const isAlreadyFavourite = prev.some((item) => item.id === id);

      if (isAlreadyFavourite) {
        toast.error(`Removed from favourite`);
        return prev.filter((item) => item.id !== id);
      } else {
        toast.success(`Added to favourite`);
        return [...prev, { id }];
      }
    });
  };
  

  return (
    <div className="flex justify-around items-center font-margarine">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col items-center justify-center gap-4 mr-40">
        <img src={img} alt="bag" className="h-[500px]" />
        <div className="flex flex-row mb-10 gap-5">
          <img src={img} alt={img} className="h-[120px]  " />
          <img src={img} alt={img} className="h-[120px] " />
          <img src={img} alt={img} className="h-[120px] " />
        </div>
      </div>
      <div className="flex flex-col w-2/4 text-white gap-8 pb-24">
        <span className="text-5xl tracking-wide">{name}</span>
        <div className="flex flex-row gap-10 mx-2">
          <ColorButton color={"1"}></ColorButton>
          <ColorButton color={"2"}></ColorButton>
          <ColorButton color={"3"}></ColorButton>
          <ColorButton color={"4"}></ColorButton>
        </div>
        <div className="flex flex-row gap-44">
          <div className="flex flex-col text-l tracking-wide gap-2">
            <span>PRICE</span>
            <span className={`text-[#0447A6] text-3xl font-medium`}>
              ฿ {price}
            </span>
          </div>
          <div className={`flex flex-col tracking-wide gap-2`}>
            <span>REVIEWS</span>
            <span className={`text-[#0447A6] text-3xl`}>★★★★☆</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="tracking-wide text-2xl">DESCRIPTION</span>
          <span className="w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            nihil quasi alias adipisci maxime totam minus soluta, eos vel atque
            facere qui quibusdam minima incidunt doloribus tempora quos nisi
            vero!
          </span>
        </div>
        <div className="flex flex-row items-center gap-20">
          <div
            onClick={handleAddToCart}
            className={`flex justify-around items-center btn-${major} w-64 h-16 rounded-2xl p-4 hover-big
            `}
          >
            <img src="/assets/products/Cart.png" alt="cart" className="w-9" />
            <span className="text-xl">
              {!isAdded ? "Add to cart" : "Remove from cart"}
            </span>
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
