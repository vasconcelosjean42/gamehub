import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

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
      <Text color={"white"}>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
