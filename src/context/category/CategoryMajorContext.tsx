import React, { createContext, useContext, useState } from "react";

interface CategoryMajorContextProps {
  categoryMajor: string;
  setCategoryMajor: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryMajorContext = createContext<CategoryMajorContextProps | undefined>(undefined);

export const CategoryMajorProvider: React.FC<any> = ({ children }) => {
  const [categoryMajor, setCategoryMajor] = useState<string>("ALL");

  const contextValue: CategoryMajorContextProps = {
    categoryMajor,
    setCategoryMajor,
  };

  return (
    <CategoryMajorContext.Provider value={contextValue}>
      {children}
    </CategoryMajorContext.Provider>
  );
};

export const useCategoryMajorContext = () => {
  const context = useContext(CategoryMajorContext);
  if (!context) {
    throw new Error("use majorContext must be used within a majorProvider");
  }
  return context;
};
