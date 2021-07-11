import axios from "axios";
import { getToken, removeToken } from "../context/authReducer";
const API = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 3000,
  headers: { Accept: "application/json" },
});

export function SetTokenToAxios(token) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const token = getToken();
if (token) {
  SetTokenToAxios(token);
}

API.interceptors.response.use(undefined, function (error) {
  // if token expired
  if (error?.response?.status === 401) {
    removeToken();
    window.location.href = "/login";
  } else return Promise.reject(error);
});

export default API;
