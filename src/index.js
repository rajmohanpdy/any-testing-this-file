import * as React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
// import Create from "./Create";
import Test1 from "./Test1";
import MapsArray from "./MapsArray";
import { Footer, Demo } from "./Footer";
import CRender from "./CRender";
// import TabViewDemo from "./PrimeTab";
// import Footer from "./Footer";
// import FullCalendarDemo from "./Calendar";
// // import Effect from "./Effect";
// import App from "./App";
import Rajmohan from "./Rajmohan";
import HideKey from "./HideKey";

// import Datepickers from "./DatePickers";
// import ContextExample from "./ContextExample";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//     {/* <Effect /> */}
//   </StrictMode>,
//   rootElement
// );
// const OtherComponent = lazy(() => import("./Footer"));
const fname = "rajmohandd";
const testObj = { fnamef: "raj", lnamef: "seljjj", test1: false };
const lname = "selv";
const rootElement = document.getElementById("root");
console.log(process.env.PATH);
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      {/* <Rajmohan fname="deactive" primary="black" />
    <Datepickers /> */}
      {/* <Test1 />
    <MapsArray /> */}
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense> */}
        <Demo fname="rajmohan" />
        <Rajmohan {...{ fname, lname, ...testObj }} />
      </div>
      );
      {/* <Button createBox={this.create} /> */}
      {/* <CRender /> */}
      {/* <TabViewDemo /> */}
      <HideKey />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
