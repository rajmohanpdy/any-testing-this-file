import React, { Component, createContext, useContext } from "react";
import "./styles.css";
import TestContext from "./TestContext";
export const MessageContext = createContext();
export const RajmohanS = createContext();
const ContextExample = () => {
  return (
    <MessageContext.Provider value="rajmohan">
      <RajmohanS.Provider value="9999">
        <TestContext />
      </RajmohanS.Provider>
    </MessageContext.Provider>
  );
};

export default ContextExample;
