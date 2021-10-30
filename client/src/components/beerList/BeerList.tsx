import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { Beer } from '../../generated/graphql';
import Filters from '../filters/Filters';
import BeerModal from '../modal/BeerModal';

interface beerDataProps {
    Beers: Beer[];
}

const BeerList: React.FC<beerDataProps> = ({ Beers }) => {
    return (
        <>
            <Filters />
            <Box pb="5rem" mt="5rem" mx="auto" w="80vw">
                <Grid templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={10} pt="5rem">
                    {Beers ? Beers.map((beer: Beer) => <BeerModal key={beer.id} Beer={beer} />) : <></>}
                </Grid>
            </Box>
        </>
    );
};

export default BeerList;
