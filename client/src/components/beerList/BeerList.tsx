import { Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
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
        <>
            <Grid my="5rem" mx="auto" w="70vw" templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={10}>
                {BEER && BEER.length > 0 ? (
                    BEER.map((beer) => <BeerModal key={beer.name} name={beer.name} rating={beer.rating} />)
                ) : (
                    <h1>No Results</h1>
                )}
            </Grid>
        </>
    );
};

export default BeerList;
