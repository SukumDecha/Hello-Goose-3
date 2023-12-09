import React, { createContext, useContext, useState } from "react";

interface LoginModalContextProps {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModalContext = createContext<LoginModalContextProps | undefined>(undefined);

export const LoginModalProvider: React.FC<any> = ({ children }) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);

  const contextValue: LoginModalContextProps = {
    loginModal,
    setLoginModal,
  };

  return (
    <LoginModalContext.Provider value={contextValue}>
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModalContext = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error("useLoginModal Context must be used within a LoginModalProvider");
  }
  return context;
};
