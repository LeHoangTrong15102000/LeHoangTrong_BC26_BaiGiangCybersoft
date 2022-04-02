import React, { Component, PureComponent } from "react";

// Khi component cha render lại => comp cũng bị render lại
// PureComponent sẽ giúp tự động thực thi shouldComponentUpdate
// => Nó sẽ tự động kiểm tra props và state cũ so với props và state mới, nếu có thay đổi mới render lại component
// PureComponent sẽ so sánh theo kĩ thuật shallow compare (cơ bản là so sánh ===)
// Trường hợp so sánh function, array hoặc object là nó sẽ so sánh địa chỉ vùng nhớ
export default class ComponentB extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Giá trị hiện tại:', this.state, this.props);
  //   console.log('Giá trị mới:', nextState, nextProps);

  //   // Props message thay đổi => cho phép render lại
  //   if(this.props.message !== nextProps.message) {
  //     return true
  //   }

  //   // return về false trong shouldComponentUpdate sẽ ngăn comp render lại
  //   return false;
  // }

  render() {
    console.log('Component B - render');
    return <div>
      <h3>Component B</h3>
      <p>Message: {this.props.message}</p>
    </div>;
  }
}
