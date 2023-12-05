// ColorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface ProductContextProps {
  product: string;
  setProduct: React.Dispatch<React.SetStateAction<string>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<any> = ({ children }) => {
  const [product, setProduct] = useState<string>("");

  const contextValue: ProductContextProps = {
    product,
    setProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
