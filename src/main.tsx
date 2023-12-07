import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/details/ProductContext.tsx";
import { SearchProvider } from "./context/SearchContext";
import { MajorProvider } from "./context/MajorContext";
import { ColorProvider } from "./context/ColorContext";
import { CartProvider } from "./context/cart/CartContext.tsx";
import { FavourteProvider } from "./context/favourite/FavouriteContext.tsx";
import AppContent from "./pages/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavourteProvider>
        <CartProvider>
          <ColorProvider>
            <MajorProvider>
              <SearchProvider>
                <ProductProvider>
                  <AppContent />
                </ProductProvider>
              </SearchProvider>
            </MajorProvider>
          </ColorProvider>
        </CartProvider>
      </FavourteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
