import React, { Component } from "react";
import Product1 from "../assets/img/product1.png";
import "./productItem.scss";

class ProductItem extends Component {
  render() {
    return (
      <div className="product-item">
        <img src={Product1} alt="" />
        <div className="heading">
          <h1>CyberBeats</h1>
          <p>$99.99</p>
        </div>
        <p className="category">Accessories</p>
        <div className="action">
          <p className="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </p>
          <button className="btn-buy">
            <i class="fa fa-shopping-cart"></i> Buy now
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
