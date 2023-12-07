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
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },

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
