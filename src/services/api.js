import axios from "axios";

const backendUrl = "http://localhost:3001/jokes";

const api = axios.create({ baseURL: backendUrl });

export const getJokes = async () => {
  const response = await api.get("/");
  return response.data;
};

export const createJoke = async (newJoke) => {
  const response = await api.post("/", newJoke);
  return response.data;
};

export const updateJoke = async (updatedJoke) => {
  const response = await api.put(`/${updatedJoke.jokeId}`, updatedJoke);
  return response.data;
};
