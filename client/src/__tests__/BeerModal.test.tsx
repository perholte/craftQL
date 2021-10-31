import { shallow } from 'enzyme';
import BeerModal from '../components/modal/BeerModal';
import { Provider } from 'react-redux';
import { store } from './App.test';

describe('<BeerModal />', () => {
    const beer = { id: '1', brand: 'test', name: 'Corona', rating: 1, abv: 0.034, type: 'test' };

    const wrapper = shallow(
        <Provider store={store}>
            <BeerModal beer={beer} />,
        </Provider>,
    );

    const beerModal = wrapper.find(BeerModal);

    it('doesnt crash', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('has the props that are set', () => {
        expect(beerModal.props()).toBeDefined();
        expect(beerModal.props().beer.name).toBe('Corona');
        expect(beerModal.props().beer.rating).toBe(1);
    });

    it('presents the elements', () => {
        expect(beerModal.find('Corona')).toBeVisible;
    });

    /*     it('lets us change the props', () => {
        expect(beerModal.props().beer.name).toBe('Corona');
        expect(beerModal.props().beer.rating).toBe(1);
        wrapper.setProps({ children: <BeerModal beer={newBeers} /> });
        wrapper.update();
        expect(beerModal.props().beer.name).toBe('New Beer');
        expect(beerModal.props().beer.rating).toBe(4);
    });
 */
});
