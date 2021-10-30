import { Box, Center, Grid, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FilterField, useGetBeersQuery } from '../../generated/graphql';
import { RootState } from '../../redux/store';
import Filters from '../filters/Filters';
import BeerModal from '../modal/BeerModal';

const BeerList: React.FC = () => {
    const sortParams = useSelector((state: RootState) => state.sort.graphqlParams);
    // const filterParams = useSelector((state: RootState) => state.search.value);
    // const filterFields = useSelector((state: RootState) => state.search.filter);

    const filter = useSelector((state: RootState) => state.search);

    const { data, loading, error } = useGetBeersQuery({
        variables: { skip: 0, sort: sortParams, filter },
    });

    // const { data, loading, error } = useGetBeersQuery({
    //     variables: { skip: 0, sort: sortParams, filter: { value: filterParams, filter: filterFields } },
    // });
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
                    data.beers.map((beer) => <BeerModal key={beer.id} Beer={beer} />)
                ) : (
                    <h1>No Results</h1>
                )}
            </Grid>
        </Box>
    );
};

export default BeerList;
