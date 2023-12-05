// ColorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface ColorContextProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<any> = ({ children }) => {
  const [color, setColor] = useState<string>("blue");

  const contextValue: ColorContextProps = {
    color,
    setColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
