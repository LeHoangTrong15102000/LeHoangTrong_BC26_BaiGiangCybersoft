import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todos";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAddTodo = async () => {
    const payload = {
      title,
      completed: false,
    };

    dispatch(addTodo(payload));
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
