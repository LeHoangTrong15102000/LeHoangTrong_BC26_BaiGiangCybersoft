import * as actionTypes from "../constants/todos";

// Khai báo default state cho reducer
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  filter: "all",
  search: "",
};

// Nếu default state là 1 object hay array.
// Khi cập nhật state bắt buộc phải return về array hoặc object mới
// Bởi vì redux sẽ thực hiện shallow compare (===) để kiểm tra state có thay đổi hay không => đối với object hoặc array sẽ kiểm tra địa chỉ vùng nhớ của biến => cần return về array hoặc object mới nếu thay đổi state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODO_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case actionTypes.GET_TODO_SUCCESS: {
      return { ...state, data: action.data, isLoading: false };
    }
    case actionTypes.GET_TODO_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }
    case actionTypes.CHANGE_FILTER: {
      return { ...state, filter: action.data };
    }
    case actionTypes.CHANGE_SEARCH: {
      return { ...state, search: action.data };
    }
    default:
      return state;
  }
};

export default todoReducer;
