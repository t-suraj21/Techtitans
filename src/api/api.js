import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001", // Backend URL
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Allow cookies for authentication
});

export default api;
