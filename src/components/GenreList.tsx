import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
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
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
