import React, { Component } from "react";

class DemoIf extends Component {
  state = {
    isLogin: false,
  };

  printWelcomeMessage = () => {
    if (this.state.isLogin) {
      return <h1>Welcome, Hiếu</h1>;
    }
    return null;
  };

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Đăng nhập</button>
        {/* {this.printWelcomeMessage()} */}
        {/* {this.state.isLogin ? <h1>Welcome, Hiếu</h1> : null} */}
        {this.state.isLogin && <h1>Welcome, Hieu</h1>}
      </div>
    );
  }
}

export default DemoIf;
