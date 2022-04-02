import React, { useState, useRef, useEffect } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  // Mục đích 1: Khi muốn lưu trữ dữ liệu mà không cần render lại component, ta có thể dùng useRef để lưu trữ dữ liệu đó
  const countRef = useRef(0);
  // Mục đích 2: truy cập vào DOM của một element
  const inputRef = useRef(null);
  const fileRef = useRef(null);

  const handleClickState = () => {
    setCount(count + 1);
  };

  const handleClickRef = () => {
    countRef.current = countRef.current + 1;
  };

  const handleSubmit = () => {
    // const value = document.getElementById('txtName').value;
    // console.log(value)

    console.log(inputRef.current.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <p>State Count: {count}</p>
      <button onClick={handleClickState}>Click State</button>

      <p>Ref Count: {countRef.current}</p>
      <button onClick={handleClickRef}>Click Ref</button>

      <br />
      <br />
      <br />

      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>Submit</button>

      <br />
      <br />
      <br />

      <div>
        <button
          className="btn btn-success"
          onClick={() => fileRef.current.click()}
        >
          Upload
        </button>
        <input ref={fileRef} type="file" hidden />
      </div>
    </div>
  );
};

export default Ref;
