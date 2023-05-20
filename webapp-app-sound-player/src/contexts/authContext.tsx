import React, { ReactNode, createContext } from 'react';

type IChildren = {
  children: ReactNode;
};

export const AuthContext = createContext({});

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
