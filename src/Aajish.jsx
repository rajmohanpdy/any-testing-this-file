import React, { Component } from "react";
import "./styles.css";

// const Aajish = (props) => {
//   return (
//     <div>
//       Aajish Rajmohan {props.fname} {props.lname}
//     </div>
//   );
// };

// export default Aajish;
export default class Aajish extends React.Component {
  render() {
    return this.props.test1 ? (
      <div>
        Aajish Rajmohan {this.props.fname} {this.props.lname}
      </div>
    ) : (
      <div>testting team</div>
    );
  }
}
