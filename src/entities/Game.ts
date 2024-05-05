import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  publishers: { name: string }[];
  metacritic: number;
  rating_top: number;
}
