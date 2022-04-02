import axios from "axios";
import { useState, useEffect } from "react";

// custom hook bản chất là 1 function, không return về jsx mà return về data
// bên trong custom hook có thể gọi tới 1 số hook khác như useState hoặc useEffect
const useFetchData = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(url, params);
        setData(result.data);
      } catch (error) {
        setError(error.response.data);
      } finally {
        // Chạy cuối cùng sau khi try hoặc catch xử lý xong
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
