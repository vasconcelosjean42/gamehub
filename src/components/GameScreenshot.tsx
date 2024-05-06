import React from "react";
import useScreenshot from "../hooks/useScreenshot";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshot(gameId);

  if (isLoading) return <Spinner />;

  if (error || !screenshots) return null;

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={2}>
      {screenshots.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
