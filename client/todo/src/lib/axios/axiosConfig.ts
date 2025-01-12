import axios, { AxiosInstance } from "axios";

const baseURL = (import.meta.env.VITE_BASE_API_URL as string) || "";

const apiRequest: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  timeout: 10000,
});

const token = localStorage.getItem("token");

if (token) {
  apiRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const setAxiosAuthHeader = (authToken: string): void => {
  if (authToken) {
    apiRequest.defaults.headers.common["Authorization"] = `${authToken}`;
  } else {
    delete apiRequest.defaults.headers.common["Authorization"];
  }
};

export default apiRequest;
