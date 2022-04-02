import { useState } from "react";

const useStorageState = (key) => {
  const [state, setState] = useState(() => {
    const data = JSON.parse(localStorage.getItem(key));
    return data || {};
  });

  const onSetState = (data) => {
    setState(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [state, onSetState];
};

export default useStorageState;
