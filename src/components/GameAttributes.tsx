import React, { ReactNode } from "react";
import { Game } from "../entities/Game";
import { Box, List, SimpleGrid, Text } from "@chakra-ui/react";
import Attribute from "./Attribute";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={5} mt={5}>
      <Attribute text="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Attribute>
      <Attribute text="Metascore">
        <CriticScore score={game.metacritic} />
      </Attribute>
      <Attribute text="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Attribute>
      <Attribute text="Publishers">
        {game.publishers.map((publisher, i) => (
          <Text key={i}>{publisher.name}</Text>
        ))}
      </Attribute>
    </SimpleGrid>
  );
};

export default GameAttributes;
