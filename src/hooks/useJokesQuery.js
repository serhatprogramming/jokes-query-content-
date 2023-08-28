import { useQuery } from "@tanstack/react-query";
import { getJokes } from "../services/api";

export const useJokesQuery = () => {
  return useQuery({ queryKey: ["jokes"], queryFn: getJokes });
};
