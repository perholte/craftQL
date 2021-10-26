import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import './Header-svg.css';
import Header from './components/header/Header';
import BeerList from './components/beerList/BeerList';
import { RootState } from './redux/store';

const App = () => {
    const searchValue = useSelector((state: RootState) => state.search.value);

    return (
        <div className="app">
            <Header />
            <BeerList />
        </div>
    );
};

export default App;
