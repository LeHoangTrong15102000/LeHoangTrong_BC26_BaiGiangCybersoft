import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ hàng
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((item) => {
                    const { product, quantity } = item;
                    const { id, name, img, price } = product;
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>
                          <img style={{ width: 80 }} src={img} alt="" />
                        </td>
                        <td>
                          <button className="btn btn-info">-</button>
                          <span className="mx-3">{quantity}</span>
                          <button className="btn btn-info">+</button>
                        </td>
                        <td>{price}</td>
                        <td>{price * quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
