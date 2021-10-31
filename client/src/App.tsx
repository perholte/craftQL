import React, { useEffect, useState } from 'react';
import './App.css';
import './Header-svg.css';
import Header from './components/header/Header';
import BeerList from './components/beerList/BeerList';
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

    useEffect(() => {
        setBeerData(data?.beers || []);
    }, [data]);

    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchData = () => {
        fetchMore({ variables: { skip: skip, sort: sortParams } }).then((fetchMoreResult) => {
            if (fetchMoreResult.data.beers.length < 20) {
                setHasMore(false);
            }
            setSkip(skip + 20);
            setBeerData([...beerData, ...(fetchMoreResult.data.beers || [])]);
        });
    };

    useEffect(() => {
        setHasMore(true);
    }, [data]);

    return (
        <InfiniteScroll
            className="infiniteScroller"
            pageStart={0}
            loadMore={fetchData}
            useWindow={false}
            hasMore={hasMore}
            style={{ height: '700px', overflow: 'visible' }}
            loader={
                <Center>
                    <Spinner />
                </Center>
            }
        >
            <div className="app">
                <Header />
                <BeerList beers={beerData} />
            </div>
        </InfiniteScroll>
    );
};

export default App;
