import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc;
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    console.log("response", response);
    return response;
  };

  return { data, error, loading, request };
};
export default useApi;
