import platformsList from "../data/platforms";
import {Platform} from "./useGames";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";

// const usePlatforms = () => useData<Platform>()
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platformsList
})
export default usePlatforms;
