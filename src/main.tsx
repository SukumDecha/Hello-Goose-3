import React from "react";
import ReactDOM from "react-dom/client";
import AppContent from "./pages/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MajorProvider } from "./context/MajorContext";
import { ColorProvider } from "./context/ColorContext";
import { CartProvider } from "./context/cart/CartContext.tsx";
import { FavourteProvider } from "./context/favourite/FavouriteContext.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavourteProvider>
        <CartProvider>
          <ColorProvider>
            <MajorProvider>
              <AppContent />
            </MajorProvider>
          </ColorProvider>
        </CartProvider>
      </FavourteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
