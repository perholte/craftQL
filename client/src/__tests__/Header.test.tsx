import { shallow } from 'enzyme';
import Header from '../components/header/Header';

describe(' <Header />', () => {
    const wrapper = shallow(<Header />);

    it('doesnt crash', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders the different elements', () => {
        expect(wrapper.find('craftql').exists());
        expect(wrapper.find('svg').exists());
    });
});
