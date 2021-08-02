import React, { createContext, useState } from "react";
import { getWebsiteName } from '../utils';
export const WebsiteContext = createContext();
// This context provider is passed to any component requiring the context
export const WebsiteProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [initialLoad, setLoad] = useState(1);
  return (
    <WebsiteContext.Provider
      value={{
        data,
        setData,
        initialLoad, setLoad
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};