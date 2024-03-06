import {Platform} from "./platform";

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
}