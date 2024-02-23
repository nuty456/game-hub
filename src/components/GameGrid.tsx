import React from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../hooks/useGenres";
import PlatformSelector from "./PlatformSelector";
interface GameGridProps {
    selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre}: GameGridProps) => {
    const {data, error, isLoading} = useGames(selectedGenre)
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <PlatformSelector/>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={2} padding="10px">
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))}
                {!isLoading && data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;