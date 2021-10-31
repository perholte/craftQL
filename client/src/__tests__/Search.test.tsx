import { Input } from '@chakra-ui/react';
import { mount, shallow } from 'enzyme';
import { values } from 'lodash';
import { Provider } from 'react-redux';
import Search from '../components/filters/Search';
import { store } from './App.test';

describe('<Search />', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Search />
        </Provider>,
    );

    it('renders successfully', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('can write searches', () => {
        wrapper
            .find(Search)
            .find('input')
            .simulate('change', { target: { value: 'Hello' } });
        expect(wrapper.find(Search).find('input').get(0).props.value).toEqual('Hello');
    });
});
