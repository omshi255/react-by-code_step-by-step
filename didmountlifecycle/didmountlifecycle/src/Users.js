import React, { Component } from "react";

export default class Users extends Component {
  constructor() {
    super();
    this.state =
      {
        email: "swati@gmail.com",
      }
  }
  render() {
    console.log("render method ");
    return (
      <div>
        <h1>User Component</h1>
        <button onClick={() => this.setState({ email: "omii234@gmail.com" })}>
          Update Email Address
        </button>
      </div>
    );
  }
}
