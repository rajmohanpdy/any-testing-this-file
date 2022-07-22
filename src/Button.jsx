import React, { Component } from "react";
import "./styles.css";

const Input = (props) => {
  return (
    <React.Fragment>
      <button onDoubleClick={props.okButton(props.someText)}>
        Click this Button
      </button>
    </React.Fragment>
  );
};

export default Input;
