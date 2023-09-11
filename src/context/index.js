"use client"
import { createContext } from "react";

const AppContext = createContext();

export default function AppContextProvider({children}) {
  const state = {user:{}};

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
