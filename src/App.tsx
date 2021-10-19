import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import SearchPage from './components/searchPage/SearchPage';

function App() {
    return (
        <div className="app">
            <Header />
            <SearchPage />
        </div>
    );
}

export default App;
