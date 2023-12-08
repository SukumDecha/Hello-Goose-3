import { useCartContext } from "../../../../../context/cart/CartContext";
import { ProductProps } from "../../../home/product/ProductList";
import { majorColor } from "../../../../../libs/Library";
import { CartPageProps } from "../../../../../pages/cart/CartPage";
import jsonData from "../../../../../libs/data/data.json";
import CartCard from "../cart/CartCard";

export default function CartList({
  selectedItem,
  setSelectedItem,
}: CartPageProps) {
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
        selected={selectedItem.some((item) => item === id)}
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
