import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Search from './components/common/Search';
import Header from './components/header/Header';
import BeerList from './components/beerList/BeerList';
import { RootState } from './redux/store';

const App = () => {
    const searchValue = useSelector((state: RootState) => state.search.value);

    return (
        <div className="app">
            <Header />
            <Search />
            <BeerList />
        </div>
    );
};

export default App;
