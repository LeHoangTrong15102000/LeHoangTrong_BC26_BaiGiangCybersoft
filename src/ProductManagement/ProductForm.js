import React, { Component } from "react";
import axios from "axios";

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: "",
        os: "",
        display: "",
        memory: "",
        camera: "",
        price: "",
        image: "",
      },
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    // Bởi vì react update state và props có thể bất đồng bộ
    // Nên setState dạng callback nếu bên trong có sử dụng lại giá trị hiện tại để tính toán cho giá trị tiếp theo để đảm bảo state luôn luôn là mới nhất
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (evt) => {
    // Ngăn hành vi reload lại page khi submit form
    evt.preventDefault();

    // Gọi API thêm/cập nhật sản phẩm
    let promise;
    const { id, ...values } = this.state.values;

    // Nếu có tồn tại id => cập nhật
    if (id) {
      promise = axios.put(
        `https://6221ffe4666291106a19e141.mockapi.io/api/products/${id}`,
        values
      );
    } else {
      promise = axios.post(
        `https://6221ffe4666291106a19e141.mockapi.io/api/products`,
        values
      );
    }

    await promise;
    // Sau khi thêm thành công, muốn sản phẩm được hiển thị ra giao diện liền, ta cần làm gì???
    // Bắn 1 tín hiệu cho component ProductManagement biết là đã thêm thành công
    this.props.onSubmitSuccess();
    // Reset lại form
    this.setState({
      values: {
        name: "",
        os: "",
        display: "",
        memory: "",
        camera: "",
        price: "",
        image: "",
      },
    });
  };

  componentDidUpdate(prevProps) {
    // Component cần biết khi nào props productID thay đổi để gọi API lấy chi tiết sản phẩm
    // Kiếm tra nếu có productID và giá trị productID cũ và mới khác nhau
    // => Gọi API lấy chi tiết sản phẩm
    const { productID } = this.props;
    if (productID && prevProps.productID !== productID) {
      this.getProductDetails();
    }
  }

  getProductDetails = async () => {
    const { productID } = this.props;
    const result = await axios.get(
      `https://6221ffe4666291106a19e141.mockapi.io/api/products/${productID}`
    );
    // Sau khi lấy chi tiết sản phẩm thành công, ta cần làm gì???
    // => setState lại biến values bằng giá trị của sản phẩm
    this.setState({
      values: {
        id: result.data.id,
        name: result.data.name,
        os: result.data.os,
        display: result.data.display,
        memory: result.data.memory,
        camera: result.data.camera,
        price: result.data.price,
        image: result.data.image,
      },
    });
  };

  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* OS */}
        <div className="form-group">
          <label htmlFor="os">OS</label>
          <input
            type="text"
            id="os"
            name="os"
            value={values.os}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Display */}
        <div className="form-group">
          <label htmlFor="display">Display</label>
          <input
            type="text"
            id="display"
            name="display"
            value={values.display}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Camera */}
        <div className="form-group">
          <label htmlFor="camera">Camera</label>
          <input
            type="text"
            id="camera"
            name="camera"
            value={values.camera}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Memory */}
        <div className="form-group">
          <label htmlFor="memory">Memory</label>
          <input
            type="text"
            id="memory"
            name="memory"
            value={values.memory}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={values.price}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Image */}
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={values.image}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Button Submit */}
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
