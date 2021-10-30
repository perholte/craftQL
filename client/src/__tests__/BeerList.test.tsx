import { mount, shallow } from 'enzyme';
import BeerList from '../components/beerList/BeerList';
import Filters from '../components/filters/Filters';
import BeerModal from '../components/modal/BeerModal';
import { MockedProvider } from '@apollo/client/testing';
import { Beer } from '../generated/graphql';

describe('<BeerList />', () => {
    const wrapper = shallow(
        <MockedProvider>
            <BeerList />
        </MockedProvider>,
    );

    it('renders all children', () => {
        expect('wrapper').toHaveLength(7);
    });

    it('shows the right elements', () => {
        expect(wrapper.containsMatchingElement(<BeerList />)).toEqual(true);
    });
});
