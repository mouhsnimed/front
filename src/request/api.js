import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 3000,
  // headers: { "X-Custom-Header": "foobar" },
});

// API.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export function SetToken(token) {
  API.defaults.headers.common["Authorization"] = token;
}

export default API;
