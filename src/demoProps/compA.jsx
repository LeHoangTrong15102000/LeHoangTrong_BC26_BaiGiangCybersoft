import React, { Component } from "react";
import CompB from "./compB";

class CompA extends Component {
  fullName = "Trung Hieu";
  age = 15;
  render() {
    return (
      <div>
        <h1>Component A</h1>
        <CompB name={this.fullName} a={this.age} b={123} />
      </div>
    );
  }
}

export default CompA;
