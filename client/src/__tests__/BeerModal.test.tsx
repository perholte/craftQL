import { mount, ReactWrapper, shallow } from 'enzyme';
import BeerModal from '../components/modal/BeerModal';
import { Beer } from '../components/beerList/BeerList';

describe('<BeerModal />', () => {
    let wrapper: ReactWrapper<{ Beer: Beer }>;

    const beer = { name: 'Corona', rating: 1 };

    beforeEach(() => {
        wrapper = mount(<BeerModal Beer={beer} />);
    });

    it('doesnt crash', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('has the props that are set', () => {
        expect(wrapper.props().Beer).toBeDefined();
        expect(wrapper.props().Beer.name).toBe('Corona');
        expect(wrapper.props().Beer.rating).toBe(1);
    });

    it('presents the elements', () => {
        expect(wrapper.find('Corona')).toBeVisible;
    });

    it('lets us change the props', () => {
        expect(wrapper.props().Beer.name).toBe('Corona');
        expect(wrapper.props().Beer.rating).toBe(1);
        wrapper.setProps({ Beer: { name: 'New Beer', rating: 4 } });
        expect(wrapper.props().Beer.name).toBe('New Beer');
        expect(wrapper.props().Beer.rating).toBe(4);
    });
});
