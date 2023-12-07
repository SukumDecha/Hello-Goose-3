import { useCartContext } from "../../../../../context/cart/CartContext";
import { ProductProps } from "../../../home/product/ProductList";
import jsonData from "../../../../../data/data.json";
import CartCard from "../cart/CartCard";

const majorColor: Record<string, string> = {
  SIT: "blue",
  ENGINEER: "red",
  FiET: "orange",
};

export default function CartList() {
  const { cart } = useCartContext();

  const cartItems = jsonData
    .filter((item: ProductProps) => cart.some((ca) => ca.id === item.id))
    .map(({ major, name, price, img, id }: ProductProps) => (
      <CartCard
        key={id}
        id={id}
        color={majorColor[major]}
        textColor={majorColor[major]}
        product={name}
        price={price}
        imgPath={img}
        checkbox={false}
        total={0}
        quantity={0}
      />
    ));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 px-12 mb-10">
        {cartItems}
      </div>
    </div>
  );
}
