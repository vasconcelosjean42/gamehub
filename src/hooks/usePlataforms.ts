import plataforms from "../data/plataforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlataforms = () => ({
  data: plataforms,
  isLoading: false,
  error: null,
});

export default usePlataforms;
