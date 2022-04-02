import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    const { img, name, screen, backCamera, frontCamera, desc } =
      this.props.selectedProduct;
    return (
      <div className="row">
        <div className="col-4">
          <h1>{name}</h1>
          <img src={img} />
        </div>
        <div className="col-8">
          <h1>Thông số kĩ thuật</h1>
          <table className="table">
            <tr>
              <td>Màn hình</td>
              <td>{screen}</td>
            </tr>
            <tr>
              <td>Camera trước</td>
              <td>{frontCamera}</td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td>{backCamera}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{desc}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
