import { act, renderHook } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useFetch from "./useFetch";

const mock = new MockAdapter(axios);

jest.mock("utils/constants", () => ({
  config: {
    VITE_APP_BACKEND_URL: "https://mocked-api-endpoint.com",
  },
}));

beforeEach(() => {
  mock.reset();
});

test("should return data on successful GET request", async () => {
  const mockData = { data: "John Doe" };
  mock.onGet("https://mocked-api-endpoint.com/api/users").reply(200, mockData);

  const { result } = renderHook(() =>
    useFetch<{ name: string }>("/api/users", "GET"),
  );

  expect(result.current[0].loading).toBe(false);

  await act(async () => {
    await result.current[1]();
  });

  expect(result.current[0].loading).toBe(false);
  expect(result.current[0].data).toEqual(mockData);
  expect(result.current[0].error).toBeNull();
});

test("should return error on failed GET request", async () => {
  mock
    .onGet(`https://mocked-api-endpoint.com/api/users`)
    .reply(500, { message: "Failed to fetch" });

  const { result } = renderHook(() =>
    useFetch<{ name: string }>("/api/users", "GET"),
  );

  expect(result.current[0].loading).toBe(false);

  await act(async () => {
    try {
      await result.current[1]();
    } catch (e) {
      // Caught error
    }
  });

  expect(result.current[0].loading).toBe(false);
  expect(result.current[0].data).toBeNull();
  expect(result.current[0].error?.message).toEqual("Failed to fetch");
});

test("should send data on POST request", async () => {
  const postData = { name: "Jane Doe" };
  const responseData = { success: true };
  mock
    .onPost(`https://mocked-api-endpoint.com/api/users`)
    .reply(200, responseData);

  const { result } = renderHook(() =>
    useFetch<{ success: boolean }, { name: string }>("/api/users", "POST"),
  );

  expect(result.current[0].loading).toBe(false);

  await act(async () => {
    result.current[1]({ body: postData });
  });

  expect(result.current[0].loading).toBe(false);
  expect(result.current[0].data).toEqual(responseData);
  expect(result.current[0].error).toBeNull();
});
