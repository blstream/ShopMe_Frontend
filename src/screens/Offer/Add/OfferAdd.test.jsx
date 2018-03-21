import React from 'react';
import ScreenOfferAdd from './OfferAdd';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<ScreenOfferAdd />', () => {
  it('renders 1 <ScreenOfferAdd /> component', () => {
    const component = shallow(<ScreenOfferAdd />);
    expect(component).toHaveLength(1);
  });
});
