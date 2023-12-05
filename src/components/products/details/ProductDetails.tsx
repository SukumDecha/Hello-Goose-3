import ColorButton from "./ColorButton/ColorButton";

type ProductDetailsProps = {
  imgPath?: string;
  title: string;
  price: string;
  desc: string;
  addToCardColor: string;
};

const ProductDetails = (props: ProductDetailsProps) => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/assets/products/hermes-bag.png"
          alt="bag"
          className="h-[500px]"
        />
        <div className="flex flex-row mb-10 gap-5">
          <img
            src="/assets/products/hermes/hermes01.webp"
            alt="bag"
            className="h-[80px]"
          />
          <img
            src="/assets/products/hermes/hermes02.webp"
            alt="bag"
            className="h-[80px]"
          />
          <img
            src="/assets/products/hermes/hermes03.webp"
            alt="bag"
            className="h-[80px]"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/4 font-margarine text-white gap-5">
        <span className="text-5xl tracking-wide">{props.title}</span>
        <div className="flex flex-row gap-10 mx-2">
          <ColorButton color={"#C4B19D"}></ColorButton>
          <ColorButton color={"#DB292B"}></ColorButton>
          <ColorButton color={"#202020"}></ColorButton>
          <ColorButton color={"#686751"}></ColorButton>
        </div>
        <div className="flex flex-row gap-44">
          <div className="flex flex-col font-serif text-l tracking-wide gap-2">
            <span className="text-gray-300">PRICE</span>
            <span className={`text-[#0447A6] text-3xl font-medium`}>
              $ {props.price}
            </span>
          </div>
          <div className={`flex flex-col font-serif tracking-wide gap-2`}>
            <span className="text-gray-300">REVIEWS</span>
            <span className={`text-[#0447A6] text-3xl`}>★★★★☆</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-300">
          <span className="tracking-wide text-2xl">DESCRIPTION</span>
          <span className="w-[550px] font-serif">{props.desc}</span>
        </div>
        <div className="flex flex-row items-center gap-20">
          <div
            className={`flex justify-around items-center bg-[${props.addToCardColor}] w-52 h-16 rounded-2xl p-4`}
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
