import React, { Component } from "react";
import "./styles.css";

const Test2 = ({ lname, clickTest, clickTest2, fname }) => {
  const tiscon = {
    color: "blue"
  };
  return (
    <React.Fragment>
      <button
        style={{ color: "blue" }}
        className={handleClass()}
        onClick={clickTest}
      >
        {lname}
      </button>
      <br />
      <h1 style={{ color: "red" }}>h6</h1>
      <button style={tiscon} onClick={() => clickTest2(lname)}>
        {fname}
      </button>
      <Test3 />
    </React.Fragment>
  );
};

const handleClass = () => {
  return "raj";
};

const Test3 = () => {
  return <div>homeWork Assignment ok </div>;
};

export { Test2 };
