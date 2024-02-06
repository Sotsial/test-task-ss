import { AxiosInstance, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export interface UseAxiosOptions {
  params?: Record<string, any>;
}

const useAxios = <T,>(instance: AxiosInstance, url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<T> = await instance.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, refetch };
};

export default useAxios;
