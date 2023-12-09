// App.tsx

import ProductCategory from "./product/categories/ProductCategoryPage";
import ProductDetailPage from "./product/details/ProductDetailPage";
import CartPage from "./cart/CartPage";
import FavouritePage from "./favourite/FavouritePage";
import HomePage from "./home/HomePage";
import CheckoutPage from "./checkout/CheckoutPage";
import { useColorContext } from "../context/ColorContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category",
    element: <ProductCategory />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/favourite",
    element: <FavouritePage />,
  },
  {
    path: "/details/:id",
    element: <ProductDetailPage />,
  },
]);

const AppContent = () => {
  const { color } = useColorContext();

  return (
    <>
      <div className={`bg-transition bg-linear-${color}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default AppContent;
