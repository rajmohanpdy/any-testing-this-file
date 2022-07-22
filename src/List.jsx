import React, { Component } from "react";
import Lists from "./Lists";
import "./styles.css";

const List = (props) => {
  return <Lists list={props.info} />;
};

export default List;
