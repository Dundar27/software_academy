"use client";
import React from "react";
import { createContext, useState } from "react";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  let [state, setState] = useState(3);

  return (
    <PostContext.Provider value={{ state, setState }}>
      {children}
    </PostContext.Provider>
  );
};
