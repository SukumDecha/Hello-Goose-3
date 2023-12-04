import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App color="orange" major="Faculty of Engineering" />}
        />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
