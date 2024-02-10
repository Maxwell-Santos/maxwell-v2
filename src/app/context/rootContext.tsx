"use client";
import React, { createContext } from "react";

export const context = createContext({});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return <context.Provider value={{ opa: "oi" }}>{children}</context.Provider>;
}
