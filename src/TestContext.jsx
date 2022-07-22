import React, { useContext } from "react";
import "./styles.css";
import { RajmohanS } from "./ContextExample";

const TestContext = () => {
  //const user = useContext(MessageContext);
  const user1 = useContext(RajmohanS);
  return <h4>Hello {user1}</h4>;
};

export default TestContext;
