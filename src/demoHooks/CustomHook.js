import React, { useState } from "react";
import useFetchData from "./useFetchData";
import useStorageState from "./useStorageState";

const CustomHook = () => {
  const { data, isLoading, error } = useFetchData(
    "https://62260a012dfa524018fa3980.mockapi.io/api/todos"
  );

  // const [user, setUser] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem("user"));
  //   return data || {};
  // });
  const [user, setUser] = useStorageState("user")

  const changeUserInfo = () => {
    const exampleUser = {
      name: "Dan Nguyen",
      age: 25,
    };
    setUser(exampleUser);
    // localStorage.setItem("user", JSON.stringify(exampleUser));
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Todos</h1>
      {data?.map((item) => (
        <p key={item}>{item.title}</p>
      ))}

      <h1>User</h1>
      <p>
        Name: {user.name} - Age: {user.age}
      </p>
      <button onClick={changeUserInfo}>Change user info</button>
    </div>
  );
};

export default CustomHook;

/**
 * Phân tích: Trong ứng dụng sẽ có rất nhiều component gọi API để lấy data
 */
