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
        <Box w="80%" py="5rem" mx="auto">
            <Filters />
            <Box id="beerListBox">
                <Grid templateColumns="repeat( auto-fit, minmax(13rem, 1fr))" gap={10} mt="5rem">
                    {beers ? beers.map((beer: Beer) => <BeerModal key={beer.id} beer={beer} />) : <></>}
                </Grid>
            </Box>
        </Box>
    );
};

export default BeerList;
