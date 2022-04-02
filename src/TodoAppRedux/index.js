import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import { getTodos } from "../redux/actions/todos";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { filter, search } = useSelector((state) => state.todos);

  useEffect(() => {
    // dispatch async action, trong action này sẽ gọi API lấy data và xử lý gửi data lên store
    // Component bây giờ chỉ cần dispatch action mà không cần tự xử lý logic
    dispatch(getTodos());
  }, [filter, search]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <h1 className="text-center">Todo App</h1>
          <AddTodo />
          <SearchTodo />
          <TodoList />
          <FilterTodo />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
