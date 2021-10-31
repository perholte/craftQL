import { shallow } from 'enzyme';
import Filters from '../components/filters/Filters';
import Search from '../components/filters/Search';
import Sort from '../components/filters/Sort';

describe('<Filters />', () => {
    const wrapper = shallow(<Filters />);

    it('renders successfully', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('has the correct elements', () => {
        expect(wrapper.find(Search)).toBeDefined();
        expect(wrapper.find(Sort)).toBeDefined();
    });
});
