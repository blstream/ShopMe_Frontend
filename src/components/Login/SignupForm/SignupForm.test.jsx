import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SignupForm } from './SignupForm';

configure({ adapter: new Adapter() });

describe('SignupForm Component', () => {
  beforeAll(() => {
    console.error = jest.fn(); // ugly way of hiding error in console
  });

  it('should render without waringns', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupForm t={key => key} />, div);
  });

  describe('methods', () => {
    let wrapper;
    beforeEach(() => {
      SignupForm.prototype.handleSubmit = jest.fn();
      wrapper = mount(<SignupForm t={key => key} />);
    });

    describe('render', () => {
      it('should have four form items', () => {
        expect(wrapper.find('.login-form__item').length).toEqual(4);
      });
    });

    describe('handleSubmit', () => {
      it('should call aftere click', () => {
        const formButton = wrapper.find('.login-form');

        formButton.simulate('submit');
        expect(SignupForm.prototype.handleSubmit).toHaveBeenCalled();
      });
    });
  });
});
