// App.tsx

import ProductCategory from "./product/categories/ProductCategoryPage";
import ProductDetailPage from "./product/details/ProductDetailPage";
import CheckoutPage from "./checkout/CheckoutPage";
import CartPage from "./cart/CartPage";
import FavouritePage from "./favourite/FavouritePage";
import HomePage from "./home/HomePage";

import { useColorContext } from "../context/ColorContext";
import { Route, Routes } from "react-router-dom";

const AppContent = () => {
  const { color } = useColorContext();

  return (
    <>
      <div className={`bg-transition bg-linear-${color}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<ProductCategory />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/details/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </>
  );
};

export default AppContent;
