import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>>({
    queryKey: ["games", gameId, "movies"],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
