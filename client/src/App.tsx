import React from 'react';
import './App.css';
import './Header-svg.css';
import Header from './components/header/Header';
import BeerList from './components/beerList/BeerList';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <BeerList />
        </div>
    );
};

export default App;
