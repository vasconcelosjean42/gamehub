import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack alignItems={"center"}>
      <Skeleton width={"32px"} height={"32px"} />
      <SkeletonText noOfLines={1} skeletonHeight={5} width={"100px"} />
    </HStack>
  );
};

export default GenreListSkeleton;
