// import { CHANGE_FILTER, CHANGE_SEARCH, SET_TODOS } from "../constants/todos";
import axios from "axios";
import * as actionTypes from "../constants/todos";

const FILTER = {
  completed: true,
  uncompleted: false,
  all: undefined,
};

// Khi sử dụng redux-thunk, action lúc này có thể return về 1 middleware function gồm 2 params là dispatch và getState
// dispatch: gửi 1 action đồng bộ lên store
// getState: 1 function return về rootState
export const getTodos = () => {
  // middleware
  return async (dispatch, getState) => {
    try {
      const { todos } = getState();
      const { filter, search } = todos;

      // dispatch action request set Loading thành true
      dispatch({ type: actionTypes.GET_TODO_REQUEST });

      // Call API lấy danh sách todos
      const result = await axios.get(
        "https://62260a012dfa524018fa3980.mockapi.io/api/todos",
        {
          params: {
            completed: FILTER[filter],
            title: search || undefined,
          },
        }
      );

      // dispatch action success set data từ api và set loading thành false
      dispatch({ type: actionTypes.GET_TODO_SUCCESS, data: result.data });
    } catch (error) {
      console.log(error.response.data);
      // dispatch action failure set loading thành false, và set error
      dispatch({
        type: actionTypes.GET_TODO_FAILURE,
        error: error.response.data,
      });
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch, getState) => {
    try {
      // Gọi API thêm todo
      await axios.post(
        "https://62260a012dfa524018fa3980.mockapi.io/api/todos",
        todo
      );

      // dispatch tới action getTodos để call lại API get todos và gửi data vào store
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodo = (id, todo) => {
  return async (dispatch) => {
    try {
      // Call API update todo
      await axios.put(
        `https://62260a012dfa524018fa3980.mockapi.io/api/todos/${id}`,
        todo
      );
      // Update thành công, gọi action getTodos để call API get todos
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const setTodos = (todos) => {
  return {
    type: actionTypes.SET_TODOS,
    data: todos,
  };
};

export const changeFilter = (value) => {
  return {
    type: actionTypes.CHANGE_FILTER,
    data: value,
  };
};

export const changeSearch = (value) => {
  return {
    type: actionTypes.CHANGE_SEARCH,
    data: value,
  };
};
