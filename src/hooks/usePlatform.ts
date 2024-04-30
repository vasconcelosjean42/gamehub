import usePlataforms from "./usePlataforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlataforms();
  return platforms?.results.find((platform) => platform.id === id);
};

export default usePlatform;
