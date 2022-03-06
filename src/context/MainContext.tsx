import React, { createContext, useContext } from "react";

interface MainContextProps {
  children: React.ReactNode;
}

interface DefaultState {}

const defaultState = {};

export const mainContext = createContext(defaultState as DefaultState);

export const MainContext = ({ children }: MainContextProps) => {

  return (
    <mainContext.Provider
      value={{}}
    >
      {children}
    </mainContext.Provider>
  );
};

export function useMainContext() {
  return useContext(mainContext);
}