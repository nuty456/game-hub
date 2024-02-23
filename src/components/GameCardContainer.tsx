import {ReactNode} from 'react';
import {Box} from "@chakra-ui/react";

interface GameCardSkeletonProps {
    children: ReactNode;
}
const GameCardContainer = ({children}:GameCardSkeletonProps) => {
    return (
        <Box borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    );
};

export default GameCardContainer;