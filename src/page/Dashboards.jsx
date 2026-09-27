import React, {useContext, useState, createContext } from "react";

export const UserContext = createContext();

export function Dashboard({ children }) {
  const [items, setItems] = useState([
    { title: "PCS", value: 12, unit: "kWh" },
    { title: "BMS", value: 22, unit: "kWh" },
    { title: "TMS", value: 32, unit: "kWh" },
  ]);

  return (
      <UserContext.Provider value={{ items}}>
        {children}
      </UserContext.Provider>
  );
}

