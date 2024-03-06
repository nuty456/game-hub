import React from 'react';
import useGenres from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' objectFit='cover' borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button onClick={() => setSelectedGenreId(genre.id)}
                                    fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} fontSize={'lg'}
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