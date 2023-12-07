import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProductContext } from "../../../../context/details/ProductContext";
import "./FavouriteCard.css";
import { useFavouriteContext } from "../../../../context/favourite/FavouriteContext";

type FavouriteCardProps = {
  id: number;
  color: string;
  textColor: string;
  product: string;
  imgPath: string;
  price: number;
};

const FavouriteCard = (props: FavouriteCardProps) => {
  const { setProduct } = useProductContext();
  const { favourite } = useFavouriteContext();

  const isFavorite = favourite.some((item) => item.id === props.id);

  const handleClick = () => {
    setProduct("" + props.id);
  };

  return (
    <Link to={"/details"}>
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div onClick={handleClick}>
          <div className={`bg-${props.color} w-full h-[300px] rounded-2xl`}>
            <div className="flex flex-col justify-center bg-gradient-to-t from-slate-50/60 to-slate-500/5 rounded-2xl w-[250px] h-[300px]">
              <div className="flex justify-end px-[5%] pt-[5%]">
                <div>
                  {isFavorite && (
                    <img
                      src="/public/assets/products/heartFill.png"
                      alt={props.product}
                      width={30}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center h-[65%]">
                <img src={props.imgPath} alt="productImg" className="px-10 " />
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
      </motion.div>
    </Link>
  );
};

export default FavouriteCard;
