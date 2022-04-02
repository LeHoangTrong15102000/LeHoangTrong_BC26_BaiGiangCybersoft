import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ onAddSuccess }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = async () => {
    const payload = {
      title,
      completed: false,
    };
    try {
      // Gọi API thêm todo
      await axios.post(
        "https://62260a012dfa524018fa3980.mockapi.io/api/todos",
        payload
      );
      onAddSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-group">
      <label>Title</label>
      <input
        type="text"
        className="form-control"
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTodo}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
