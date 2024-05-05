import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useState } from "react";
import GameCardSkeleton from "../components/GameCardSkeleton";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import { useLocation } from "react-router-dom";
import { Game } from "../entities/Game";

interface GameDetail {
  name: string;
  description_raw: string;
}

const GameDetailPage = () => {
  const { data: game, error, isLoading } = useGame();
  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <Box>
      <Heading color={"white"}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
