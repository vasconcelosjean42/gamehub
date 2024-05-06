import React from "react";
import APIClient, { FetchResponse } from "../services/api-client";
import { AspectRatio, Spinner } from "@chakra-ui/react";
import { Trailer } from "../entities/Trailer";
import { useQuery } from "@tanstack/react-query";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return <Spinner />;

  if (error || data?.results.length === 0 || !data) return null;

  return (
    <AspectRatio>
      <video poster={data.results[0].preview} controls>
        <source src={data.results[0].data["480"]} type="video/mp4" />
      </video>
    </AspectRatio>
  );
};

export default GameTrailer;
