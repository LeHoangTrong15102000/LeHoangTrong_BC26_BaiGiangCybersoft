import React, { Component } from "react";
import ProductList from "./productList";
import ProductDetail from "./productDetail";
import Cart from "./cart";

class Home extends Component {
  products = [
    {
      id: "sp_1",
      name: "iphoneX",
      price: 3000,
      screen: "screen_1",
      backCamera: "backCamera_1",
      frontCamera: "frontCamera_1",
      img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
      desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      id: "sp_2",
      name: "Note 7",
      price: 2000,
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img: "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
      desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: 1100,
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
      desc: "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: 1300,
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img: "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
      desc: "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];

  state = {
    selectedProduct: null,
    cart: [],
  };

  getProduct = (prod) => {
    this.setState({
      selectedProduct: prod,
    });
  };

  addToCart = (prod) => {
    const cloneCart = [...this.state.cart];

    const cartItem = {
      product: prod,
      quantity: 1,
    };

    // kiểm tra sp có trong giỏ hàng chưa
    // nếu chưa thì push vào
    // nếu có => tăng quantity

    const foundItem = cloneCart.find((item) => {
      return item.product.id === prod.id;
    });

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }

    this.setState({
      cart: cloneCart,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Bài tập giỏ hàng</h1>
        <div className="text-right">
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-info"
          >
            Giỏ hàng
          </button>
        </div>
        <ProductList
          addToCart={this.addToCart}
          getProduct={this.getProduct}
          products={this.products}
        />

        {this.state.selectedProduct && (
          <ProductDetail selectedProduct={this.state.selectedProduct} />
        )}
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}

export default Home;
