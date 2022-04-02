import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/actions/todos";

const TodoList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.todos);

  const handleComplete = async (todo) => {
    const { id, ...data } = todo;
    const payload = {
      ...data,
      completed: !data.completed,
    };

    dispatch(updateTodo(id, payload));
  };

  if (isLoading) {
    return (
      <div class="spinner-border text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul style={{ listStyle: "none" }} className="p-0">
      {data.map((item) => (
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
