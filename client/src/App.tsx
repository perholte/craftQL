import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchPage from './components/searchPage/SearchPage';
import BeerModal from './components/modal/BeerModal';

function App() {
    return (
        <div className="app">
            <Header />
            <SearchPage />
        </div>
    );
}

export default App;
