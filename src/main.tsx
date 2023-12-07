import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/details/ProductContext.tsx";
import { SearchProvider } from "./context/SearchContext";
import { MajorProvider } from "./context/MajorContext";
import { ColorProvider } from "./context/ColorContext";
import { CartProvider } from "./context/cart/CartContext.tsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.tsx";
import ProductDetailPage from "./pages/product/details/ProductDetailPage.tsx";
import CartPage from "./pages/cart/CartPage.tsx";
import ProductCategory from "./pages/product/categories/ProductCategory.tsx";
import { FavourteProvider } from "./context/favourite/FavouriteContext.tsx";
import FavouritePage from "./pages/favourite/FavouritePage.tsx";
import AppContent from "./pages/app/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavourteProvider>
        <CartProvider>
          <ColorProvider>
            <MajorProvider>
              <SearchProvider>
                <ProductProvider>
                  <Routes>
                    <Route path="/" element={<AppContent />} />
                    <Route path="/category" element={<ProductCategory />} />
                    <Route path="/details" element={<ProductDetailPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/favourites" element={<FavouritePage />} />
                  </Routes>
                </ProductProvider>
              </SearchProvider>
            </MajorProvider>
          </ColorProvider>
        </CartProvider>
      </FavourteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
