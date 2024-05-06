import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";
import { useParams } from "react-router-dom";

const useTrailer = (gameId: number) => {
  const { slug } = useParams();
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>>({
    queryKey: ["games", slug, "movies"],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
