import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async (urlParam) => {
      setIsPending(true);

      const response = await fetch(urlParam);
      const json = await response.json();

      setIsPending(false);
      setData(json);
    };

    fetchData(url);
  }, [url]);

  return { data, isPending };
}

export default useFetch;
