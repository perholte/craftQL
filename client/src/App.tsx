import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import SearchPage from './components/searchPage/SearchPage';
import { RootState } from './redux/store';

function App() {
    const searchValue = useSelector((state: RootState) => state.search.value);

    return (
        <div className="app">
            <Header />
            <SearchPage />
            <Filters />
        </div>
    );
}

export default App;
