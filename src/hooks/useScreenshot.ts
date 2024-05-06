import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient, { FetchResponse } from "../services/api-client";

const useScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery<FetchResponse<Screenshot>>({
    queryKey: ["games", gameId, "screenshots"],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
