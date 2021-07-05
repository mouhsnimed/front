import axios from "axios";
import { getToken } from "../context/authReducer";
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

export default API;
