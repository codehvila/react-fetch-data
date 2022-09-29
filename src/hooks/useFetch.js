import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (urlParam) => {
      setIsPending(true);

      try {
        const response = await fetch(urlParam);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not fetch the data");
      }
    };

    fetchData(url);
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
