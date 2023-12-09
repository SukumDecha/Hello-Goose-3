// ColorContext.tsx
import React, { createContext, useContext, useState } from "react";

export interface FavouriteProps {
  id: number;
}

interface FavouriteContextProps {
  favourite: FavouriteProps[];
  setFavourite: React.Dispatch<React.SetStateAction<FavouriteProps[]>>;
}

const FavouriteContext = createContext<FavouriteContextProps | undefined>(
  undefined
);

export const FavourteProvider: React.FC<any> = ({ children }) => {
  const [favourite, setFavourite] = useState<FavouriteProps[]>([
    { id: 1 },
    { id: 2 },
    { id: 5 },
    { id: 12 },
    { id: 13 },
    { id: 9 },
    { id: 20 },
    { id: 17 },
    { id: 24 },
  ]);

  const contextValue: FavouriteContextProps = {
    favourite,
    setFavourite,
  };

  return (
    <FavouriteContext.Provider value={contextValue}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavouriteContext = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
