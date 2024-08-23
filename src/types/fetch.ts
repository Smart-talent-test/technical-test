export type FetchState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export type FetchOptions<U> = {
  body?: U;
  query?: URLSearchParams;
  headers?: Record<string, string>;
};

export interface ApiResponse<T> {
  data: T;
  error: null;
  message: string;
  status: number;
}

export type FetchMethod = "GET" | "POST" | "PUT" | "DELETE";
