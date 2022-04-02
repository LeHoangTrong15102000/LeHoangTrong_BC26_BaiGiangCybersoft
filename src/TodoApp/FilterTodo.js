import React from "react";

const FilterTodo = ({ onFilter }) => {
  const handleChangeFilter = (type) => {
    onFilter(type);
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
