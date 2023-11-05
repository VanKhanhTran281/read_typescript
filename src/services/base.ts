import axios, { AxiosInstance } from "axios";

export const request = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env?.REACT_APP_BASE_API || "https://jsonplaceholder.typicode.com",
  });

  return instance;
};
