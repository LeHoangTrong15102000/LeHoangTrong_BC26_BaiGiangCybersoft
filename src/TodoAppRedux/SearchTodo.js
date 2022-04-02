import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../redux/actions/todos";

// 1. handleChange setTimeout 1s
// 2. handleChange clearTimeout => setTimeout 1s

const SearchTodo = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.todos);

  const [internalValue, setInternalValue] = useState(search);
  // Dùng để lưu trữ data, tuy nhiên điểm khác biệt so với useState đó chính là component không bị render lại khi useRef thay đổi
  const timeoutSearch = useRef(null);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setInternalValue(value);

    // Muốn setTimeout chỉ gọi 1 lần duy nhất, nếu hàm handleChange bị gọi nhiều lần, ta cần clear setTimeout cũ và gọi setTimeout mới
    if (timeoutSearch.current) {
      clearTimeout(timeoutSearch.current);
    }

    // useRef khi thay đổi giá trị, component không bị render lại
    timeoutSearch.current = setTimeout(() => {
      // dispatch action gửi data lên store
      // dispatch({ type: "CHANGE_SEARCH", data: value });
      dispatch(changeSearch(value));
    }, 300);
  };

  return (
    <div className="form-group">
      <label>Search</label>
      <input
        type="text"
        value={internalValue}
        className="form-control"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchTodo;
