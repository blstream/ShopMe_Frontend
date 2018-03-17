import React from 'react';
import ScreenOfferAdd from './OfferAdd';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<ScreenOfferAdd />', () => {
  it('renders 1 <ScreenOfferAdd /> component', () => {
    const component = shallow(<ScreenOfferAdd />);
    expect(component).toHaveLength(1);
  });
  test('it should call history.push', () => {
    const wrapper = mount(<ScreenOfferAdd />);
    const push = jest.fn();
    wrapper.setProps({ history: { push } });
  });
});
