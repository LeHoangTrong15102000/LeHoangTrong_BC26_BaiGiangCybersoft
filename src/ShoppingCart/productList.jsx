import React, { Component } from "react";
import ProductItem from "./productItem";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <ProductItem
            addToCart={this.props.addToCart}
            getProduct={this.props.getProduct}
            item={item}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderProducts()}</div>;
  }
}

export default ProductList;
