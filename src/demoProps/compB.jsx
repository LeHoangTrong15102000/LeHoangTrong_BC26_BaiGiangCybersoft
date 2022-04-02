import React, { Component } from "react";

class CompB extends Component {
  //  props
  render() {
    console.log("readonly", this.props.name);
    return (
      <div>
        <p>Component B</p>
        <p>FullName: {this.props.name} </p>
        <p>Age: {this.props.a}</p>
      </div>
    );
  }
}

export default CompB;
