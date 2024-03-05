import genresList from "../data/genres";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>('/genres')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: genresList.length, results: genresList}
})
export default useGenres;
