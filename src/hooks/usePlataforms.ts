import { useQuery } from "@tanstack/react-query";
import plataforms from "../data/plataforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlataforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: plataforms,
  });

export default usePlataforms;
