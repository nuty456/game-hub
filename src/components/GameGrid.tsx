import React from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../hooks/useGenres";

interface GameGridProps {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}
const GameGrid = ({selectedGenre, selectedPlatform}: GameGridProps) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform)
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
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