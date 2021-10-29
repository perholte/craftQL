import { Grid, Box, Spinner, Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useGetBeersQuery } from '../../generated/graphql';
import Filters from '../filters/Filters';
import BeerModal from '../modal/BeerModal';

const BeerList: React.FC = () => {
    const { data, loading, error } = useGetBeersQuery({ variables: { skip: 0 } });
    useEffect(() => {
        console.log(data);
        console.log(error);
    }, [data, error]);

    if (loading) {
        return (
            <Center mt="40%">
                <Spinner />
            </Center>
        );
    }

    return (
        <Box pb="5rem" mt="5rem" mx="auto" w="70vw">
            <Filters />
            <Grid templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={10} pt="5rem">
                {data?.beers && data.beers.length > 0 ? (
                    data.beers.map((beer) => <BeerModal key={beer.name} Beer={beer} />)
                ) : (
                    <h1>No Results</h1>
                )}
            </Grid>
        </Box>
    );
};

export default BeerList;
