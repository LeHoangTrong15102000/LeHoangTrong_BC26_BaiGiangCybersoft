import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/actions/todos";

const FilterTodo = ({ onFilter }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = (type) => {
    // dispatch action change filter
    // dispatch({ type: "CHANGE_FILTER", data: type });
    dispatch(changeFilter(type));
  };

  return (
    <div>
      <button
        className="btn btn-primary mr-2"
        onClick={() => handleChangeFilter("all")}
      >
        All
      </button>
      <button
        className="btn btn-success mr-2"
        onClick={() => handleChangeFilter("completed")}
      >
        Completed
      </button>
      <button
        className="btn btn-danger"
        onClick={() => handleChangeFilter("uncompleted")}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default FilterTodo;
