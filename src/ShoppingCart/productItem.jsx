import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { img, name } = this.props.item;
    return (
      <div className="card p-2">
        <img
          style={{
            width: "100%",
            height: 250,
          }}
          src={img}
        />
        <h1>{name}</h1>
        <button
          onClick={() => this.props.getProduct(this.props.item)}
          className="btn btn-success"
        >
          Xem chi tiết
        </button>
        <button
          onClick={() => this.props.addToCart(this.props.item)}
          className="btn btn-info"
        >
          Thêm giỏ hàng
        </button>
      </div>
    );
  }
}

export default ProductItem;
