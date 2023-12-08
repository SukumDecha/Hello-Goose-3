// ColorContext.tsx
import React, { createContext, useContext, useState } from "react";

export interface CartProps {
  id: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartProps[];
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  const contextValue: CartContextProps = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
