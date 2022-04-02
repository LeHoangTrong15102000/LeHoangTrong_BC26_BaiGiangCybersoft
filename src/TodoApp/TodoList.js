import React from "react";
import axios from "axios";

const TodoList = ({ todos, onUpdateSuccess }) => {
  // const { todos } = props;
  const handleComplete = async (todo) => {
    const { id, ...data } = todo;
    const payload = {
      ...data,
      completed: !data.completed,
    };
    // Call API update todo
    await axios.put(
      `https://62260a012dfa524018fa3980.mockapi.io/api/todos/${id}`,
      payload
    );
    // Bắn tín hiệu lên component cha để call lại API lấy danh sách todo
    onUpdateSuccess();
  };

  return (
    <ul style={{ listStyle: "none" }} className="p-0">
      {todos.map((item) => (
        <li className="d-flex justify-content-between" key={item.id}>
          <span
            style={{
              textDecoration: item.completed ? "line-through" : "unset",
            }}
          >
            {item.title}
          </span>
          <div>
            <button
              className="btn btn-success"
              onClick={() => handleComplete(item)}
            >
              {item.completed ? "Uncomplete" : "Complete"}
            </button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
