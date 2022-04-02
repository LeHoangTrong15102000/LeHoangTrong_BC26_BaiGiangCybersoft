import React, { useState, useRef } from "react";

// 1. handleChange setTimeout 1s
// 2. handleChange clearTimeout => setTimeout 1s

const SearchTodo = ({ value, onSearch }) => {
  const [internalValue, setInternalValue] = useState(value);
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
      onSearch(value);
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
