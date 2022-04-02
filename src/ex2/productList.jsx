import React, { Component } from "react";
import ProductItem from "./productItem";
import "./productList.scss";

class ProductList extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">
          <h1>- Feature Products -</h1>
          <div className="list">
            <div className="product-1">
              <ProductItem />
            </div>
            <div className="product-2">
              <ProductItem />
            </div>
            <div className="product-3">
              <ProductItem />
            </div>
            <div className="product-4">
              <ProductItem />
            </div>
            <div className="product-5">
              <ProductItem />
            </div>
            <div className="product-6">
              <ProductItem />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductList;
