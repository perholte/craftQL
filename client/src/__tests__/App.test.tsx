import React from 'react';
import App from '../App';
import Header from '../components/header/Header';
import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
    const wrapper = shallow(<App />);

    it('renders app', () => {
        expect(wrapper).toHaveLength(1);
    });

    // Sette opp noe med store i redux, og evt props her:
});
