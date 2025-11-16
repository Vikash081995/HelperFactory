/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const resData = await resp.json();
        setData(resData);
      } catch (error: any) {
        setIsError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useFetch;
