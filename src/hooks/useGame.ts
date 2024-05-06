import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>(`games/${slug}`);
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getDetails(),
  });
};

export default useGame;
