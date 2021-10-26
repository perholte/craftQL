import { Grid, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Filters from '../filters/Filters';
import BeerModal from '../modal/BeerModal';

interface Beer {
    name: string;
    rating: number;
}

// Dummy-data
const BEER: Array<Beer> = [
    { name: 'Corona', rating: 5 },
    { name: 'Frydenlund', rating: 3 },
    { name: 'Hansa', rating: 5 },
    { name: 'ØL', rating: 3 },
    { name: 'Mer ØL', rating: 5 },
    { name: 'Enda mer ØL', rating: 3 },
    { name: 'Pils', rating: 6 },
    { name: 'Sinnabrus', rating: 4 },
    { name: 'Gjæret drikke', rating: 1 },
    { name: 'Frydenlund Fatøl', rating: 1 },
    { name: 'Corona', rating: 5 },
    { name: 'Frydenlund', rating: 3 },
    { name: 'Hansa', rating: 5 },
    { name: 'ØL', rating: 3 },
    { name: 'Mer ØL', rating: 5 },
    { name: 'Enda mer ØL', rating: 3 },
    { name: 'Pils', rating: 6 },
    { name: 'Sinnabrus', rating: 4 },
    { name: 'Sinnabrus', rating: 4 },
    { name: 'Gjæret drikke', rating: 1 },
    { name: 'Frydenlund Fatøl', rating: 1 },
];

const BeerList: React.FC = () => {
    return (
        <Box pb="5rem" mt="5rem" mx="auto" w="70vw">
            <Filters />
            <Grid templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={10} pt="5rem">
                {BEER && BEER.length > 0 ? (
                    BEER.map((beer) => <BeerModal key={beer.name} Beer={beer} />)
                ) : (
                    <h1>No Results</h1>
                )}
            </Grid>
        </Box>
    );
};

export default BeerList;
