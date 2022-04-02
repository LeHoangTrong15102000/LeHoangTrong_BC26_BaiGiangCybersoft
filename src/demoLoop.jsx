import React, { Component } from "react";

class DemoLoop extends Component {
  studentArr = [
    { id: 1, name: "hieu", age: 20, class: "VLH1" },
    { id: 2, name: "Dung", age: 20, class: "VLH2" },
    { id: 3, name: "Hoang", age: 21, class: "VLH3" },
    { id: 4, name: "Nguyen", age: 22, class: "VLH4" },
  ];

  renderStudents = () => {
    // studentArr = [{}, {}, {}, {}] => [tr, tr, tr,tr ]
    const htmlArr = this.studentArr.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.class}</td>
        </tr>
      );
    });

    return htmlArr;
  };

  render() {
    return (
      <div>
        <h1>Demo render giao diện với mảng dữ liệu sử dụng vòng lặp</h1>
        <table border="1" cellSpacing={0} cellPadding={20}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Lớp</th>
            </tr>
          </thead>

          <tbody>{this.renderStudents()}</tbody>
        </table>
      </div>
    );
  }
}

export default DemoLoop;
