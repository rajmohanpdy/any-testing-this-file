import React, { Component } from "react";
import { useLocalStorage } from "react-use";
import "./styles.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div>This is footer</div>
    </React.Fragment>
  );
};

const Demo = ({ fname }) => {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");

  return (
    <div>
      <div>
        Value: {value} {fname}
      </div>
      <button onClick={() => setValue("bar")}>bar</button>
      <button onClick={() => setValue("baz")}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};

Demo.defaultProps = {
  fname: "Alan"
};

export { Footer, Demo };
