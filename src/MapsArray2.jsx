import React, { Component } from "react";
import "./styles.css";
import { Constants, itemNumber } from "./Test3";

export default class MapsArray2 extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const tae = this.props.yut;
    return (
      <React.Fragment>
        {tae.map((item) => {
          return (
            <button key={item.id} className="mapsArray">
              {item.fname} {item.lname} {Constants.HEADER_MAX_HEIGHT}
              {itemNumber}
            </button>
          );
        })}
      </React.Fragment>
    );
  }
}
