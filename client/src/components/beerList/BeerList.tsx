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
        <Box id="beerListBox" py="5rem" mx="auto" w="80vw">
            <Filters />
            <Box id="beerListBox">
                <Grid id="beerListGrid" templateColumns="repeat( auto-fit, minmax(13rem, 1fr))" gap={10} mt="5rem">
                    {beers ? beers.map((beer: Beer) => <BeerModal key={beer.id} beer={beer} />) : <></>}
                </Grid>
            </Box>
        </Box>
    );
};

export default BeerList;
