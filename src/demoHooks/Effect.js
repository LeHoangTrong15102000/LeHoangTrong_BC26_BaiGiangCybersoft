// Để sử dụng lifecycle trong function component ta import useEffect từ react
import React, { useState, useEffect } from "react";

/**
 * MOUNTING (Khởi tạo):
 * - run render
 * - run useEffect()
 *
 * UPDATING (cập nhật state/props):
 * - run render
 * - run useEffect cleanup (nếu có) - nếu depedencies (danh sách lệ thuộc) thay đổi
 * - run useEffect nếu depedencies (danh sách lệ thuộc) thay đổi
 *
 * UNMOUNTING (huỷ bỏ):
 * - run useEffect cleanup (nếu có)
 */

const Effect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  // useEffect không có có tham số thứ 2
  // Callback trong useEffect này luôn luôn chạy lại sau mỗi lần render
  useEffect(() => {
    console.log("Run useEffect after render");

    // cleanup function
    return () => {
      // Sẽ được gọi trước lần chạy useEffect tiếp theo hoặc khi component unmount
      console.log("Run cleanup useEffect")
    }
  });

  // useEffect có có tham số thứ 2 là: []
  // Callback trong useEffect này chỉ chạy đúng 1 lần duy nhất sau lần render đầu tiên
  useEffect(() => {
    console.log("Run useEffect 1 times after render");

    // cleanup function
    return () => {
      console.log("Run cleanup when component unmount")
      // Sẽ được gọi trước khi component unmount
    }
  }, []);

  // useEffect có có tham số thứ 2 là: [state, prop,...]
  // Callback trong useEffect này chỉ chạy lại khi giá trị state/prop bên trong array bị thay đổi
  useEffect(() => {
    // Xử lý logic khi count thay đổi
    console.log("Run useEffect after render and count change");

    // cleanup function
    return () => {
      // Sẽ được gọi trước lần chạy useEffect tiếp theo hoặc khi component unmount
      console.log("Run cleanup useEffect when count change")
    }
  }, [count]);

  console.log("Run Render");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <p>Color: {color}</p>
      <button
        onClick={() => setColor(color === "red" ? "blue" : "red")}
      >
        Change Color
      </button>
    </div>
  );
};

export default Effect;
