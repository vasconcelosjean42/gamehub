import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { useParams } from "react-router-dom";
import { Game } from "./useGames";

const useGame = () => {
  const { slug } = useParams();
  const apiClient = new APIClient<Game>(`games/${slug}`);
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getDetails(),
  });
};

export default useGame;
