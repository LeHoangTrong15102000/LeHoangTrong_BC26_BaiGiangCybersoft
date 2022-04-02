import React, { Component } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import ProductForm from "./ProductForm";
// import data from "./data.json";

export default class ProductManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProduct: null,
      updatedID: null,
    };
  }

  // Muốn gọi API lấy products, ta cần làm như thế nào???
  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const result = await axios.get(
        "https://6221ffe4666291106a19e141.mockapi.io/api/products"
      );
      // Nhận được kết quả từ API => gọi setState để set kết quả vào biến products
      this.setState({ products: result.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  handleSelect = async (productID) => {
    try {
      const result = await axios.get(
        `https://6221ffe4666291106a19e141.mockapi.io/api/products/${productID}`
      );
      this.setState({ selectedProduct: result.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  handleSubmitSuccess = () => {
    // Khi hàm này này được gọi đồng nghĩa sản phẩm đã được thêm mới thành công
    // => Gọi lại API lấy danh sách sản phẩm
    this.getProducts();
    // Trường hợp sau khi update thành công, ta nên set lại giá trị updatedID thành rỗng
    this.setState({ updatedID: null });
  };

  handleUpdate = (productID) => {
    // Lấy đc productID, truyền trực tiếp productID này xuống comp ProductForm để nó tự xử lý
    this.setState({ updatedID: productID });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Product Management</h1>
        <ProductForm
          productID={this.state.updatedID}
          onSubmitSuccess={this.handleSubmitSuccess}
        />

        <ProductList
          products={this.state.products}
          onSelect={this.handleSelect}
          onUpdate={this.handleUpdate}
        />

        <ProductDetails product={this.state.selectedProduct} />
      </div>
    );
  }
}
