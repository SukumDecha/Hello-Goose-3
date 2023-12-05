// ColorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface SearchContextProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<any> = ({ children }) => {
  const [search, setSearch] = useState<string>("");

  const contextValue: SearchContextProps = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
