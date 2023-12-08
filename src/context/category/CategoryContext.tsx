import React, { createContext, useContext, useState } from "react";

interface CategoryContextProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

export const CategoryProvider: React.FC<any> = ({ children }) => {
  const [category, setCategory] = useState<string>("ALL");

  const contextValue: CategoryContextProps = {
    category,
    setCategory,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("use category Context must be used within a category Provider");
  }
  return context;
};
