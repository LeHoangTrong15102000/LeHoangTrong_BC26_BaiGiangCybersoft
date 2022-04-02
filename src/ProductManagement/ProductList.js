import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  handleSelect = (productID) => {
    const { onSelect } = this.props;
    onSelect(productID);
  };

  render() {
    const { products, onUpdate } = this.props;
    return (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-4">
            <ProductItem
              product={product}
              onSelect={this.handleSelect}
              onUpdate={(productID) => onUpdate(productID)}
            />
          </div>
        ))}
      </div>
    );
  }
}
