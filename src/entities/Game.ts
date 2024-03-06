import {Publisher} from "./Publisher";
import {Platform} from "./Platform";
import {Genre} from "./Genre";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    rating: number;
    description_raw: string;
    genres: Genre[];
    publishers: Publisher[];
}