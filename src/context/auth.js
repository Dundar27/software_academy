"use client";
import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState({});

  const addUser = (newUser) => {
    setUser([...user, newUser]);
  };

  return (
    <AuthContext.Provider value={{ user, addUser }}>
      {children}
    </AuthContext.Provider>
  );
};
