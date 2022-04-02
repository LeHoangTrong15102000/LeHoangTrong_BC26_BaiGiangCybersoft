import React, { Component } from "react";

export default class ProductDetails extends Component {
  render() {
    const { product } = this.props;

    if (!product) {
      return null;
    }

    return (
      <div className="row mt-4">
        <div className="col-sm-6">
          <img src={product.image} alt="product" width="100%" height="300px" />
        </div>
        <div className="col-sm-6">
          <h3>{product.name}</h3>
          <p>Display: {product.display}</p>
          <p>Camera: {product.camera}</p>
          <p>Memory: {product.memory}</p>
          <p>OS: {product.os}</p>
        </div>
      </div>
    );
  }
}
