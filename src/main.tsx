import React from "react";
import ReactDOM from "react-dom/client";
import AppContent from "./pages/App.tsx";
import { MajorProvider } from "./context/MajorContext";
import { ColorProvider } from "./context/ColorContext";
import { CartProvider } from "./context/cart/CartContext.tsx";
import { FavourteProvider } from "./context/favourite/FavouriteContext.tsx";
import { FacultyProvider } from "./context/category/FacultyContex.tsx";
import { CategoryMajorProvider } from "./context/category/CategoryMajorContext.tsx";
import { CategoryProvider } from "./context/category/CategoryContext.tsx";



import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavourteProvider>
      <CartProvider>
        <ColorProvider>
          <MajorProvider>
            <FacultyProvider>
              <CategoryMajorProvider>
                <CategoryProvider >
                  <AppContent />
                </CategoryProvider>
              </CategoryMajorProvider>
            </FacultyProvider>
          </MajorProvider>
        </ColorProvider>
      </CartProvider>
    </FavourteProvider>
  </React.StrictMode>
);
