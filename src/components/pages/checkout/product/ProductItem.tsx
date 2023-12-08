interface ProductItemProps {
  title: string;
  major: string;
  quantity: number;
  price: number;
}
export default function ProductItem({
  title,
  major,
  quantity,
  price,
}: ProductItemProps) {
  const totalPrice = price * quantity;
  return (
    <>
      <div>
        <div className="flex justify-between text-2xl mb-5 px-4 font-margarine text-white">
          <div className="flex flex-col w-4/12 text-white">
            <span className=" text-lg">{title}</span>
            <span className=" text-gray-200 text-lg">major: {major}</span>
          </div>

          <div className="w-8/12 flex justify-between text-lg text-gray-200">
            <span className="flex justify-between ml-[100px] font-margarine">
              {quantity}
            </span>
            <span className="flex ml-[20px] font-margarine ">{price}</span>
            <span className="flex mx-5 font-margarine">{totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
}
