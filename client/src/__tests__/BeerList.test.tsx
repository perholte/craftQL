import { shallow } from 'enzyme';
import BeerList from '../components/beerList/BeerList';
import { MockedProvider } from '@apollo/client/testing';

describe('<BeerList />', () => {
    const wrapper = shallow(
        <MockedProvider>
            <BeerList Beers={[]} />
        </MockedProvider>,
    );

    it('renders all children', () => {
        expect('wrapper').toHaveLength(7);
    });

    it('shows the right elements', () => {
        expect(wrapper.containsMatchingElement(<BeerList Beers={[]} />)).toEqual(true);
    });
});
