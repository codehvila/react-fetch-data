import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (urlParam) => {
      const response = await fetch(urlParam);
      const json = await response.json();
      setData(json);
    };

    fetchData(url);
  }, [url]);

  return { data };
}

export default useFetch;
