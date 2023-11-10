"use client";
import React from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [notification, setNotification] = useState(0);

    return (
        <AppContext.Provider value={{ notification }}>{children}</AppContext.Provider>
    );
};
