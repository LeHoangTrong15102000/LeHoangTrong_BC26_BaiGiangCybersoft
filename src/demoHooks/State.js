// rafce

// Để tạo state trong function component ta import useState từ react
import React, { useState } from "react";

const COLORS = ["red", "green", "blue", "yellow", "pink"];

const State = () => {
  // Khai báo 1 biến state và đặt tên là count
  // useState sẽ trả về 1 cặp giá trị,
  // giá trị đầu là trạng thái hiện tại của state
  // giá trị thứ 2 là một hàm dùng để thay đổi giá trị của state
  const [count, setCount] = useState(0);
  // Khi muốn khai báo nhiều state ta chỉ cần khai báo useState nhiều lần
  const [color, setColor] = useState("red");
  // Khai báo state là 1 array
  const [todos, setTodos] = useState(["homework", "housework"]);
  // Khai báo state là 1 object
  const [user, setUser] = useState({ name: "John", age: 25 });

  const handleChangeColor = () => {
    const idx = Math.floor(Math.random() * COLORS.length);
    setColor(COLORS[idx]);
  };

  const removeTodo = (index) => {
    // Khi thay đổi state là array/object luôn nhớ phải clone ra 1 array/object mới
    // C1:
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
    // C2:
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // Nếu chỉ muốn thay đổi 1 giá trị trong object, luôn nhớ phải sao chép lại những giá trị khác trước khi thay đổi
    // biến state chứa giá trị hiện tại của user
    setUser(state => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click count</button>

      <p>Random color: {color}</p>
      <button onClick={handleChangeColor}>Change color</button>

      <p>Todo List</p>
      <ul>
        {todos.map((item, index) => (
          <li key={index} onClick={() => removeTodo(index)}>
            {item}
          </li>
        ))}
      </ul>

      <p>User Information</p>
      <p>
        Name: {user.name} - Age: {user.age}
      </p>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default State;


