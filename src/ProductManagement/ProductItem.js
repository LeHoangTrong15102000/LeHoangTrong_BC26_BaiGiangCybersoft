import React, { Component } from "react";

export default class ProductItem extends Component {
  handleSelect = () => {
    // Làm sao để truyền data lên component cha
    const { product, onSelect } = this.props;
    onSelect(product.id);
  };

  handleUpdate = () => {
    const { product, onUpdate } = this.props;
    onUpdate(product.id);
  };

  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={product.image}
          alt="product"
          height="300px"
        />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price}</p>
          <button className="btn btn-success" onClick={this.handleSelect}>
            Details
          </button>
          <button className="btn btn-primary" onClick={this.handleUpdate}>
            Update
          </button>
        </div>
      </div>
    );
  }
}
