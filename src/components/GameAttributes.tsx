import {Game} from "../entities/Game";
import {SimpleGrid, Text} from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface GameAttributesProps {
    game: Game;
}

const GameAttributes = ({game}: GameAttributesProps) => {
    return (
        <SimpleGrid columns={2} as="dl">
            <DefinitionItem term='Platforms'>
                {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
            </DefinitionItem>
            <DefinitionItem term='Metascore'>
                <CriticScore score={game.metacritic}/>
            </DefinitionItem>
            <DefinitionItem term='Genres'>
                {game.genres?.map(({name, id}) => <Text key={id}>{name}</Text>)}
            </DefinitionItem>
            <DefinitionItem term='Publishers'>
                {game.publishers?.map((publisher) => <Text key={publisher.id}>{publisher.name}</Text>)}
            </DefinitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;
