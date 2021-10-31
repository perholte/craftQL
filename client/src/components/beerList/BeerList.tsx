import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { Beer } from '../../generated/graphql';
import Filters from '../filters/Filters';
import BeerModal from '../modal/BeerModal';

interface BeerDataProps {
    beers: Beer[];
}

const BeerList: React.FC<BeerDataProps> = ({ beers }) => {
    return (
        <>
            <Filters />
            <Box id="beerListBox" pb="5rem" mt="5rem" mx="auto" w="80vw">
                <Grid templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={10} pt="5rem">
                    {beers ? beers.map((beer: Beer) => <BeerModal key={beer.id} beer={beer} />) : <></>}
                </Grid>
            </Box>
        </>
    );
};

export default BeerList;
