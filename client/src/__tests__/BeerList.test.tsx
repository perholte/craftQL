import { shallow } from 'enzyme';
import BeerList from '../components/beerList/BeerList';
import Filters from '../components/filters/Filters';
import Search from '../components/filters/Search';
import BeerModal from '../components/modal/BeerModal';

describe('<BeerList />', () => {
    const wrapper = shallow(<BeerList />);

    it('renders', () => {
        expect('wrapper').toHaveLength(7);
    });

    it('shows the right elements', () => {
        expect(wrapper.contains(<Filters />)).toEqual(true);
        expect(wrapper.contains(<BeerModal Beer={{ name: 'Corona', rating: 5 }} />)).toEqual(true); // need to change this to the mock data when it is implemented
    });
});
