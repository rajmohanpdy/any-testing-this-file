import React, { Component, useState } from "react";
import Button from "./Button";
import "./styles.css";

const handleButton = (val) => {
  console.log(`button is clicked by ${val}`);
};

const Create = (props) => {
  const [rule, setRule] = useState(4);
  const str = { fname: "raj", lname: "sel" };
  return (
    <React.Fragment>
      {/* <button>Click this Button</button> */}
      <Button okButton={handleButton} someText="rajmohan" />
      <Rajmohan {...str} rule={rule} />
      <button onClick={() => setRule(rule + 1)}>ok</button>
    </React.Fragment>
  );
};

const Rajmohan = (props) => {
  return (
    <button>
      will make {props.fname} {props.rule}
    </button>
  );
};

export default Create;
