import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import plataforms from "../data/plataforms";
import APIClient, { FetchResponse } from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlataforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: plataforms,
  });

export default usePlataforms;
