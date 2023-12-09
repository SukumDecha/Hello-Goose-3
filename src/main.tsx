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
import { LoginModalProvider } from "./context/LoginModalContext.tsx";
import { LoginProvider } from "./context/LoginContext.tsx";




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
                  <LoginModalProvider >
                  <LoginProvider >

                    <AppContent />
                  </LoginProvider >

                  </LoginModalProvider>
                </CategoryProvider>
              </CategoryMajorProvider>
            </FacultyProvider>
          </MajorProvider>
        </ColorProvider>
      </CartProvider>
    </FavourteProvider>
  </React.StrictMode>
);
