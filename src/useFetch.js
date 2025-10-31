import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}
