import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchPage from './components/searchPage/SearchPage';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <SearchPage />
        </div>
    );
};

export default App;
