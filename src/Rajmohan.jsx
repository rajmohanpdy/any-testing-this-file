import React, { Component } from "react";
import "./styles.css";
import classNames from "classnames"; // or classnames
import Aajish from "./Aajish";
import jwt_decode from "jwt-decode";

const Rajmohan = (props) => {
  const rajk = {
    fontSize: "20px",
    color: "red"
  };
  var token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImNLY0VSOEtJQm9zY2NFb2lfNC1kZGh3UEZ4dyJ9.eyJhdWQiOiJ1cm46YjJjc2wtd2FzOnJlc291cmNlOndlYi1xYTpxYSIsImlzcyI6Imh0dHBzOi8vY29ycHFhLnN0cy5mb3JkLmNvbS9hZGZzL3NlcnZpY2VzL3RydXN0IiwiaWF0IjoxNjI1NDk2NTk5LCJleHAiOjE2MjU1ODI5OTksIkNvbW1vbk5hbWUiOiJ0LWdiY2NwIiwic3ViIjoidC1nYmNjcCIsInVzZXJpZCI6InQtZ2JjY3AiLCJzaXRlY29kZSI6IkdCUjQ2Mzk2QUEiLCJjb3VudHJ5IjoiR0JSIiwiQUNJR1JPVVAiOiJEZWFsZXIiLCJzdWJqZWN0aWQiOiJ0LWdiY2NwQGZvcmQuY29tIiwiYXBwdHlwZSI6IlB1YmxpYyIsImFwcGlkIjoidXJuOmIyY3NsLXdhczpjbGllbnRpZDp3ZWItcWE6cWEiLCJhdXRobWV0aG9kIjoiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2F1dGhlbnRpY2F0aW9ubWV0aG9kL3Bhc3N3b3JkIiwiYXV0aF90aW1lIjoiMjAyMS0wNy0wNVQxNDo1NDo1OC42MDhaIiwidmVyIjoiMS4wIn0.OFjFxCXCMQiBth1sZ7AeeTQ6bsPF3_myGkiNt-bOkt02SlxYHLFi3Ee2mMhennnQfYBKS6xdGFPFAYFTWVlStRYtdeWQEhjyQdVYKKbXt1AK2fvKf00lmKCJoDoithSCC4pJS7R_Bbelz6E851BGaTsjGdzu999aHf4igLdJeW3aRns-dKnRXDVBH0GaudEEzofNmsFbCflnDnFxDAjtkSm-cdFcDzBA5FlB6NlL-mjcc-cD_rtzw4JTVnf_D8UQbqZMR6OHdp-gJmjwwMBbjx-YuDF3yeaxDBFr_7LlQYpkd9NpfaO5WxJWnKgjEV2qFWF8G-srIuD1_a2brvi4FQ";
  var decoded = jwt_decode(token);
  console.log(decoded.country);
  return (
    <React.Fragment>
      <div
        className={classNames("message rajk olk", {
          active: props.fname === "active",
          deactive: props.fname === "deactive"
        })}
      >
        Example Text {props.fname} Example Text {props.lname}
        <div style={rajk}>hi</div>
        <div className="active">hi</div>
        <Aajish {...props} />
      </div>

      {props.lname === "sel" && <div>test name</div>}
    </React.Fragment>
  );
};

export default Rajmohan;
