import {ReactNode} from 'react';
import {Box} from "@chakra-ui/react";

interface GameCardSkeletonProps {
    children: ReactNode;
}
const GameCardContainer = ({children}:GameCardSkeletonProps) => {
    return (
        <Box borderRadius={10} overflow='hidden' _hover={{transform: 'scale(1.03)', transition: 'transform .15s ease-in'}}>
            {children}
        </Box>
    );
};

export default GameCardContainer;