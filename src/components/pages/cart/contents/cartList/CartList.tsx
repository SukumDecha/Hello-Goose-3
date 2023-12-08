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
  const { cart, setCart } = useCartContext();
  const removeItemHandler = () => {
    setCart((items) => {
      for (let id of selectedItem) {
        items = items.filter((item) => item.id !== id);
      }
      return items;
    });

    setSelectedItem([]);
  };

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
        quantity={0}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    ));

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center gap-6 px-12 mb-10">
          {cartItems}
        </div>
        <div className="ml-auto mr-[15%]">
          <button onClick={removeItemHandler} className="hover">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
