import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import searchReducer from '../redux/slices/searchSlice';
import sortReducer from '../redux/slices/sortSlice';

export const store = createStore(
    combineReducers({
        search: searchReducer,
        sort: sortReducer,
    }),
);

describe('<App />', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <App />
        </Provider>,
    );

    it('renders app', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    // Sette opp noe med store i redux, og evt props her:
});
