import { createContext } from "react";
import React, { useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [mode, setMode] = useState(false);
  return (
    <UserContext.Provider value={{ mode, setMode }}>
      {children}
    </UserContext.Provider>
  );
}
