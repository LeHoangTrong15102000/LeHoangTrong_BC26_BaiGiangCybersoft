import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import "./home.css";

class Home extends Component {
  render() {
    //React.createElement("div", null, "hellooo");
    return (
      <div>
        <Header />
        <div className="flex">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
