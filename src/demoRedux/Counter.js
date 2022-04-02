import React from "react";
// Để component có thể kết nối lên store lấy data sử dụng useSelector
// Để component có thể gửi yêu cầu cập nhật state lên store ta sử dụng useDispatch
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // Sử dụng useSelector để kết nối tới redux store và lấy state về component, nó sẽ theo dõi khi state trong store thay đổi, nó sẽ lấy state mới và trả ra cho component, khi state mới được trả ra component sẽ render lại
  const count = useSelector((state) => state.counter);
  // Sử dụng useDispatch để gửi action cập nhật state lên redux store
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // Để update state trên store cần tạo ra 1 action
    // Action là 1 object chứa 1 key bắt buộc là type
    const action = {
      type: "INCREASE", // *bắt buộc phải có
      data: count + 1,
    };
    // Thao tác gửi action lên redux store
    dispatch(action);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
