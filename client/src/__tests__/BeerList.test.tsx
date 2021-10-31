import React from 'react';
import { shallow } from 'enzyme';
import BeerList from '../components/beer/BeerList';
import { MockedProvider } from '@apollo/client/testing';
import Filters from '../components/filters/Filters';
import BeerModal from '../components/beer/BeerModal';

describe('<BeerList />', () => {
    const mockBeerOne = { id: '1', brand: 'test', name: 'Corona', rating: 1, abv: 0.034, type: 'test' };
    const mockBeerTwo = { id: '2', brand: 'test2', name: 'Frydenlund', rating: 3, abv: 0.04, type: 'test2' };
    const beers = [mockBeerOne, mockBeerTwo];

    const wrapper = shallow(
        <MockedProvider>
            <BeerList beers={beers} updateBeerRating={() => console.log('')} />
        </MockedProvider>,
    );

    it('renders all children', () => {
        expect('wrapper').toHaveLength(7);
    });

    it('shows the right elements', () => {
        expect(wrapper.find(BeerList)).toBeDefined();
        expect(wrapper.find(BeerList).find(Filters)).toBeDefined();
        expect(wrapper.find(BeerList).find(BeerModal)).toBeDefined();
    });

    it('has the right props', () => {
        const beerList = wrapper.find(BeerList);
        expect(beerList.props().beers.length).toEqual(2);
        expect(beerList.props().beers[0]).toEqual(mockBeerOne);
        expect(beerList.props().beers[1]).toEqual(mockBeerTwo);
    });
});
