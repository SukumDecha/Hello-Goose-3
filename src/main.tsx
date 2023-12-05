import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { SearchProvider } from "./context/SearchContext";
import { MajorProvider } from "./context/MajorContext";
import { ColorProvider } from "./context/ColorContext";
import CheckoutPage from "./pages/checkout/CheckoutPage.tsx";
import ProductDetailPage from "./pages/product/details/ProductDetailPage.tsx";
import CartPage from "./pages/cart/CartPage.tsx";
import ProductCategory from "./pages/product/categories/ProductCategory.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <MajorProvider>
          <SearchProvider>
            <ProductProvider>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/category" element={<ProductCategory />} />
                <Route path="/details" element={<ProductDetailPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </ProductProvider>
          </SearchProvider>
        </MajorProvider>
      </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
