import { useState, useEffect } from "react";

function useCallData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Represent error as a boolean

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Fetch data from the provided URL
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useCallData;
