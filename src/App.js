// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React, { Component } from "react";
// import List from "./List";
import styled from "styled-components";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          fname: "rajmohan",
          lname: "sel"
        },
        {
          fname: "rajeev",
          lname: "sel"
        }
      ],
      age: "seven"
    };
  }

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    const Spantag = styled.span`
      font-size: 20px;
    `;

    const Heading = styled.h2`
      color: ${(props) => (this.props.primary === "red" ? "red" : "white")};
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 15px;
    `;

    return (
      <Wrapper>
        <Title>Hello World! {this.props.fname}</Title>
        <Heading>Hello World!</Heading>
        <Spantag>Hello World!1</Spantag>
      </Wrapper>
    );
  }
}
