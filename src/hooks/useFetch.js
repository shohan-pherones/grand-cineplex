import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch.");
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, error };
};
