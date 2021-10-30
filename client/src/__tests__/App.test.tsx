import React from 'react';
import App from '../App';
import searchReducer from '../redux/slices/searchSlice';
import sortReducer from '../redux/slices/sortSlice';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';

describe('<App />', () => {
    const store = createStore(
        combineReducers({
            search: searchReducer,
            sort: sortReducer,
        }),
    );

    const wrapper = shallow(
        <Provider store={store}>
            <App />
        </Provider>,
    );

    it('renders app', () => {
        expect(wrapper).toHaveLength(1);
    });

    // Sette opp noe med store i redux, og evt props her:
});
