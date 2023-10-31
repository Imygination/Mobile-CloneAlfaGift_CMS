import { useState, useEffect } from "react";
import fetchData from "../helper/fetch";

export default function useFetch(path) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      setLoading(true);
      const result = await fetchData(path);
      console.log(result, "<<<<<<<<< ini result");
      setData(result);
    } catch (error) {
      console.log(error, "<<<<<<<<<< ini error");
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
