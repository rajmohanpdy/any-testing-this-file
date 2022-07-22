import React, { Component } from "react";
import "./styles.css";
import MapsArray2 from "./MapsArray2";

export default class MapsArray extends Component {
  state = {
    counters: [
      { id: 1, fname: "rajmohan", lname: "sel" },
      { id: 2, fname: "rajeev", lname: "selvaraj" }
    ]
  };

  handleClick = (item) => {
    this.setState({ counters: [] });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((item) => {
          return (
            <button
              key={item.id}
              className="mapsArray"
              onClick={() => this.handleClick(item.id)}
            >
              {item.fname} {item.lname}
            </button>
          );
        })}
        <MapsArray2 yut={this.state.counters} />
      </React.Fragment>
    );
  }
}
