import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlataforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlataforms;
