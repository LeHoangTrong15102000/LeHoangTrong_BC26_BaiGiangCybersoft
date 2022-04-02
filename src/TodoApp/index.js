import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";

const TodoApp = () => {
  // Tạo state lưu trữ danh sách todo
  const [todos, setTodos] = useState([]);
  // Tạo state lưu trữ trạng thái filter
  const [type, setType] = useState("all");
  // Tạo state lưu trữ trạng thái search
  const [search, setSearch] = useState("")

  const fetchTodos = async () => {
    const typeMapping = {
      completed: true,
      uncompleted: false,
      all: undefined,
    };

    try {
      const result = await axios.get(
        "https://62260a012dfa524018fa3980.mockapi.io/api/todos",
        {
          params: {
            completed: typeMapping[type],
            title: search || undefined
          },
        }
      );
      setTodos(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChangeFilter = (type) => {
    setType(type);
  };

  const handleSearch = (value) => {
    setSearch(value);
  }

  // Call API lấy danh sách todo từ server
  // useEffect này sẽ chạy sau lần render đầu tiên, và sau mỗi lần render khi type thay đổi
  useEffect(() => {
    fetchTodos();
  }, [type, search]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <h1 className="text-center">Todo App</h1>
          <AddTodo onAddSuccess={fetchTodos} />
          <SearchTodo value={search} onSearch={handleSearch} />
          <TodoList todos={todos} onUpdateSuccess={fetchTodos} />
          <FilterTodo onFilter={handleChangeFilter} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
