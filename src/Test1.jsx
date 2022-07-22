import React, { Component } from "react";
import "./styles.css";
import { Test2 } from "./Test2";
import swal from "sweetalert";

const handleReset = () => {
  console.log("1");
  swal("Hello world!");
};
const handleReset2 = (val) => {
  swal("Hello world!");
  console.log(val);
};

const Test1 = () => {
  const Obj = { fname: "rajmohan", lname: "sel", clickText: "Click Heere" };
  return (
    <React.Fragment>
      <Test2 clickTest2={handleReset2} clickTest={handleReset} {...Obj} />
    </React.Fragment>
  );
};

export default Test1;
