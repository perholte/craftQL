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

    const { data, fetchMore } = useGetBeersQuery({ variables: { skip: skip, sort: sortParams } });
    useEffect(() => {
        setBeerData([...beerData, ...(data?.beers || [])]);
    }, [data]);

    const fetchData = () => {
        fetchMore({ variables: { skip: skip, sort: sortParams } }).then((fetchMoreResult) => {
            setSkip(skip + 20);
            setBeerData([...beerData, ...(fetchMoreResult.data.beers || [])]);
        });
        console.log('lengde: ' + beerData.length);
    };

    return (
        <InfiniteScroll
            className="infiniteScroller"
            pageStart={0}
            loadMore={fetchData}
            useWindow={false}
            hasMore={true}
            style={{ height: '700px', overflow: 'visible' }}
            loader={
                <Center>
                    <Spinner />
                </Center>
            }
        >
            <div className="app">
                <Header />
                <BeerList Beers={beerData} />
            </div>
        </InfiniteScroll>
    );
};

export default App;
