import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlataforms from "../hooks/usePlataforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlataforms().data.results.find(
    (platform) => platform.id === gameQuery.platform
  );
  const genre = useGenres().data.results.find(
    (genre) => genre.id === gameQuery.genre
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
