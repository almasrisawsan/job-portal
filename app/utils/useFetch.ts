import { useEffect, useRef, useState } from "react";

const useFetch = <T>(url: string) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T>(null);
  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchData = () => {

      abortController.current?.abort();
      abortController.current = new AbortController();

      setLoading(true);
      setError(false);
      fetch(url, { signal: abortController.current.signal })
        .then((res) => {
          if (res.status === 404) return
          return res.json()
        })
        .then((data) => setData(data))
        .catch((err) => {
          if (err.name === "AbortError") return
          setError(true)
        })
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);

  return { isLoading, error, data };
};

export default useFetch;
