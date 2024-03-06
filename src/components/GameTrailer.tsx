import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({gameId}: GameTrailerProps) => {
    const {data: trailer, isLoading, error} = useTrailers(gameId);
    if (isLoading) return null
    if (error) throw error
    const first = trailer?.results[0]
    return first ? (
        <video
            poster={first.preview}
            src={first.data[480]}
            controls/>
    ) : null;
};

export default GameTrailer;
