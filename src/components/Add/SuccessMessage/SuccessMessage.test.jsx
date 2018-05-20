import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SuccessMessage } from './SuccessMessage';

describe('SuccessMessage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SuccessMessage />, div);
  });

  it('displays a success message', () => {
    const successMessage = shallow(<SuccessMessage />);
    expect(successMessage.find('.success-message__text').text()).toEqual('components.add.successMessage.text');
  });
});
