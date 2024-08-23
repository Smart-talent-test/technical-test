import axios, { AxiosResponse, isAxiosError } from "axios";
import { useCallback, useState } from "react";
import { config } from "../../utils/constants";
import { FetchMethod, FetchOptions, FetchState } from "../../types/fetch";
import { BaseError } from "../../utils/BaseError";

const API_ENDPOINT = config.VITE_APP_BACKEND_URL;

function useFetch<T, U = unknown>(
  url: string,
  method: FetchMethod
): [FetchState<T>, (options?: FetchOptions<U>) => Promise<T>] {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (options?: FetchOptions<U>) => {
      setLoading(true);
      setError(null);

      try {
        const { data: response }: AxiosResponse<T> = await axios({
          url: `${API_ENDPOINT}${url}${
            options?.query ? `?${options.query}` : ""
          }`,
          method,
          data: options?.body,
          headers: options?.headers,
        });
        setData(response);
        return response;
      } catch (errorResponse) {
        let currentError = null;

        if (isAxiosError(errorResponse) && errorResponse?.response) {
          const message =
            errorResponse?.response?.data?.message || "Failed to fetch";

          currentError = new BaseError(message, {
            context: typeof errorResponse?.response?.data,
          });
        } else {
          currentError = new BaseError("Failed to fetch");
        }
        setError(currentError);
        throw currentError;
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  return [{ data, error, loading }, fetchData];
}

export default useFetch;
