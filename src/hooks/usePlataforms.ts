import useData from "./useData";

export interface Plataform {
  id: number;
  name: string;
  slug: string;
}

const usePlataforms = () => useData<Plataform>("/platforms/lists/parents");

export default usePlataforms;
