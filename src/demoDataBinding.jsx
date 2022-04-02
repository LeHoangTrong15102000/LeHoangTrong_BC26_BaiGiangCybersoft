import React, { Component } from "react";

class DemoDataBinding extends Component {
  fullName = "hiếu";
  age = 12;

  addDescription() {
    const description = "Hi everyone!!";
    return description;
  }

  showMessage() {
    alert("Hello");
  }

  showMessage2(text) {
    alert(text);
  }

  render() {
    // synthentic event
    return (
      <div>
        <button onClick={this.showMessage}>show message</button>
        <button
          onClick={() => {
            console.log(this); //undefined
            this.showMessage2("hello");
          }}
        >
          show message 2
        </button>

        <h1>Demo data binding</h1>
        <p>Hello: {this.fullName} </p>
        <p>Age: {this.age} </p>
        <p>Description: {this.addDescription()} </p>
      </div>
    );
  }
}

export default DemoDataBinding;

// var student = {
//     name: "hieu",
//     age: 12,
//     showName: function () {
//       // this
//       console.log(this); // student
//       const a = () => {
//         console.log(this); //student
//       };
//       a();
//     },
//   };

//   student.showName();

//   function test() {
//     console.log(this); // window
//     function a() {
//       console.log("a", this); //window
//     }
//     a();
//   }

//   var fullName = "trung hieu";

//   window.test();
