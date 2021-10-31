import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Sort from '../components/filters/Sort';
import { store } from './App.test';
import { Select } from '@chakra-ui/react';
import { SortOptions } from '../redux/slices/sortSlice';

describe('<Sort />', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Sort />
        </Provider>,
    );

    it('renders successfully', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('can change sortable value', () => {
        wrapper.find('select').simulate('change', { target: { value: 'Name: Z - A' } });
        expect(wrapper.find(Select).props().value).toEqual('Name: Z - A');
        wrapper.find('select').simulate('change', { target: { value: 'Most alcohol' } });
        expect(wrapper.find(Select).props().value).toEqual('Most alcohol');
    });
});
/*     AlphabeticASC = 'Name: A - Z',
    AlphabeticDESC = 'Name: Z - A',
    BrandASC = 'Brand: A - Z',
    BrandDESC = 'Brand: Z - A',
    TypeASC = 'Type A - Z',
    TypeDESC = 'Type Z - A',
    AlcoholASC = 'Most alcohol',
    AlcoholDESC = 'Least alcohol',

    });
 */
