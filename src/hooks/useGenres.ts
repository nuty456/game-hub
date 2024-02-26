import genresList from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('genres')
const useGenres = () => ({data: genresList, isLoading: false, error: null});
export default useGenres;
