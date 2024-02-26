import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: GenreListProps) => {
    const {data, isLoading, error} = useGenres();
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' objectFit='cover' borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button onClick={() => onSelectGenre(genre)}
                                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize={'lg'}
                                    variant='link'
                                    whiteSpace={'normal'}
                                    textAlign={'left'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    );
};

export default GenreList;