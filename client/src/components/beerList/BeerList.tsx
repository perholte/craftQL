import { Grid, Box, Spinner, Center, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Beer, useGetBeersQuery } from '../../generated/graphql';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Filters from '../filters/Filters';
import BeerModal from '../modal/BeerModal';
import InfiniteScroll from 'react-infinite-scroll-component';

const BeerList: React.FC = () => {
    const [skip, setSkip] = useState(0);
    const [beerData, setBeerData] = useState<Array<Beer>>([]);
    const sortParams = useSelector((state: RootState) => state.sort.graphqlParams);
    const { data, error, fetchMore } = useGetBeersQuery({ variables: { skip: skip, sort: sortParams } });
    useEffect(() => {
        setBeerData([...beerData, ...(data?.beers || [])]);
    }, [data]);

    const fetchData = () => {
        fetchMore({ variables: { skip: skip } }).then((fetchMoreResult) => {
            setSkip(skip + 20);
            setBeerData([...beerData, ...(fetchMoreResult.data.beers || [])]);
        });
    };

    if (error) {
        <Text>An error occured :/ </Text>;
    }

    return (
        <>
            <Filters />
            <InfiniteScroll
                height="700px"
                className="infiniteScroller"
                dataLength={beerData ? beerData.length : 0}
                next={fetchData}
                hasMore={true}
                loader={
                    <Center>
                        <Spinner />
                    </Center>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Cheers! You have seen it all</b>
                    </p>
                }
            >
                <Box pb="5rem" mt="5rem" mx="auto" w="80vw">
                    <Grid templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={10} pt="5rem">
                        {beerData ? beerData.map((beer) => <BeerModal key={beer.id} Beer={beer} />) : <></>}
                    </Grid>
                </Box>
            </InfiniteScroll>
        </>
    );
};

export default BeerList;
