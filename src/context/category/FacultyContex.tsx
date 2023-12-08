import React, { createContext, useContext, useState } from "react";

interface FacultyContextProps {
  faculty: string;
  setFaculty: React.Dispatch<React.SetStateAction<string>>;
}

const FacultyContext = createContext<FacultyContextProps | undefined>(undefined);

export const FacultyProvider: React.FC<any> = ({ children }) => {
  const [faculty, setFaculty] = useState<string>("ALL");

  const contextValue: FacultyContextProps = {
    faculty,
    setFaculty,
  };

  return (
    <FacultyContext.Provider value={contextValue}>
      {children}
    </FacultyContext.Provider>
  );
};

export const useFacultyContext = () => {
  const context = useContext(FacultyContext);
  if (!context) {
    throw new Error("use faculty Context must be used within a faculty Provider");
  }
  return context;
};
