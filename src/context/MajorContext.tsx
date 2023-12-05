// MajorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface MajorContextProps {
  major: string;
  setMajor: React.Dispatch<React.SetStateAction<string>>;
}

const MajorContext = createContext<MajorContextProps | undefined>(undefined);

export const MajorProvider: React.FC<any> = ({ children }) => {
  const [major, setMajor] = useState<string>("SIT");

  const contextValue: MajorContextProps = {
    major,
    setMajor,
  };

  return (
    <MajorContext.Provider value={contextValue}>
      {children}
    </MajorContext.Provider>
  );
};

export const useMajorContext = () => {
  const context = useContext(MajorContext);
  if (!context) {
    throw new Error("useMajorContext must be used within a MajorProvider");
  }
  return context;
};
