import React, { createContext, useContext, useState } from "react";

interface LoginContextProps {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider: React.FC<any> = ({ children }) => {
  const [login, setLogin] = useState<boolean>(
    window.localStorage.getItem("token") ? true : false
  );

  const contextValue: LoginContextProps = {
    login,
    setLogin,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin Context must be used within a LoginProvider");
  }
  return context;
};
