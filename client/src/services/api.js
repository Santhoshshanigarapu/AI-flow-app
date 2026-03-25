import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const askAI = (prompt) =>
  API.post("/api/ask-ai", { prompt });

export const saveData = (data) =>
  API.post("/api/save", data);