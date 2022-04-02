import React, { Component } from "react";
import Carousel from "./carousel";
import Footer from "./footer";
import Header from "./header";
import ProductList from "./productList";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default Home;
