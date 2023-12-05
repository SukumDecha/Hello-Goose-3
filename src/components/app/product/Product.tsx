
type ProductProps = {
  color: string;
  textColor: string;
  product: string;
  imgPath: string;
  price: number;
};

const Product = (props: ProductProps) => {
  return (
    <div>
      <div className={`bg-${props.color} w-[250px] h-[280px] rounded-2xl`}>
        <div className="bg-gradient-to-t from-slate-50/40 to-slate-500/5 rounded-2xl w-[250px] h-[280px]">
          <img src={props.imgPath} alt="productImg" className="px-10 pt-8" />
          <div
            className={`text-${props.textColor} flex justify-around items-center mx-10 my-2 text-lg font-margarine`}
          >
            <span>{props.product}</span>
            <span className="w-[50px]">{props.price} ฿</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
