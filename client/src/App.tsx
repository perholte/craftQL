import React, { useEffect, useState } from 'react';
import './App.css';
import './Header-svg.css';
import Header from './components/header/Header';
import BeerList from './components/beer/BeerList';
import { Beer, useGetBeersQuery } from '../src/generated/graphql';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import InfiniteScroll from 'react-infinite-scroller';
import { Center, Spinner } from '@chakra-ui/react';

const App: React.FC = () => {
    const [skip, setSkip] = useState(0);
    const [beerData, setBeerData] = useState<Array<Beer>>([]);
    const sortParams = useSelector((state: RootState) => state.sort.graphqlParams);
    const filter = useSelector((state: RootState) => state.search);

    const { data, fetchMore } = useGetBeersQuery({
        variables: { skip: 0, sort: sortParams, filter },
    });

    //reset values when changing data set
    useEffect(() => {
        setBeerData(data?.beers || []);
        setSkip(20);
        setHasMore(true);
    }, [data]);

    const [hasMore, setHasMore] = useState<boolean>(beerData.length === 20);
    const updateBeerRating = (beer: Beer, rating: number): void => {
        setBeerData([...beerData.filter((b) => b.id !== beer.id), { ...beer, rating }]);
    };

    const fetchData = () => {
        if (data && data?.beers.length <= 20) {
            fetchMore({ variables: { skip: skip, sort: sortParams } }).then((fetchMoreResult) => {
                if (fetchMoreResult.data.beers.length < 20) {
                    setHasMore(false);
                } else {
                    setSkip(skip + 20);
                }
                const newBeers: Array<Beer> = fetchMoreResult.data.beers || [];
                setBeerData([...beerData, ...newBeers]);
            });
        }
    };

    return (
        <InfiniteScroll
            className="infiniteScroller"
            pageStart={0}
            loadMore={fetchData}
            useWindow={false}
            hasMore={hasMore}
            style={{ height: '700px', overflow: 'visible' }}
            loader={
                // https://github.com/oVirt/ovirt-web-ui/issues/562
                <Center key={0} pb="10vh">
                    <Spinner />
                </Center>
            }
        >
            <div className="app">
                <Header />
                <BeerList beers={beerData} updateBeerRating={updateBeerRating} />
            </div>
        </InfiniteScroll>
    );
};

export default App;
