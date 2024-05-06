import { Box, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { data: game, error, isLoading } = useGame();
  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  console.log(game);
  return (
    <Box>
      <Heading color={"white"}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshot gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
