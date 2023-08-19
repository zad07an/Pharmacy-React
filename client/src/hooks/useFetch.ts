import axios from "axios";
import { useState, useEffect } from "react";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

function useFetch<T>(endpoint: string): FetchState<T> {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}`);
        if (res.statusText !== "OK") {
          throw new Error("Network response was not OK");
        }
        const data = await res.data;

        if (isMounted) {
          setFetchState({ data, isLoading: false, error: null });
        }
      } catch (error: any) {
        if (isMounted) {
          setFetchState({ data: null, isLoading: false, error });
        }
        throw error;
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return fetchState;
}

export default useFetch;
