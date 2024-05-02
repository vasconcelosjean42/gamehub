import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const skeletons = Array(20)
    .fill(0)
    .map((_, i) => i);

  if (error) return null;

  if (isLoading)
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} padding={"5px"}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      </List>
    );

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} padding={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                <Text
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                >
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
