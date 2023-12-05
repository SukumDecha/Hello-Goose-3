import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category.tsx";
import ProductCategory from "./pages/product/categories/ProductCategory.tsx";
import ProductDetail from "./pages/product/details/ProductDetail.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App color="orange" major="Faculty of Engineering" />}
        />
        <Route path="/category" element={<ProductCategory />} />
        <Route path="/details" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
