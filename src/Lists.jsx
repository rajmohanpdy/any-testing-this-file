// import React, { Component } from "react";
// import "./styles.css";

// const Lists = (props) => {
//   const items = props.list;
//   console.log(items);
//   return <ul>
//     {items.map(i => {
//       return (
//         <li key={i.lname}>{i.fname}</li>
//       )
//     })}
//   </ul>;
// };

// export default Lists;

import React, { Component } from "react";
import "./styles.css";

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maximum: props.list
    };
  }

  render() {
    return (
      <ul>
        {this.state.maximum.map((i) => (
          <li>{i.fname}</li>
        ))}
      </ul>
    );
  }
}
