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
    <div className="flex justify-between border-4 font-margarine">
      <div className="flex flex-col text-white">
        <span className=" text-3xl">{title}</span>
        <span className=" text-gray-200 text-md">major: {major}</span>
      </div>

      <div className="flex justify-between text-gray-200">
        <span>{quantity}</span>
        <span>{price}</span>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
}
