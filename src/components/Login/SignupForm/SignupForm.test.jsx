import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { SignupForm } from './SignupForm';

describe('SignupForm Component', () => {
  it('should render without warnigns', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupForm />, div);
  });

  describe('methods', () => {
    let wrapper;
    beforeEach(() => {
      SignupForm.prototype.handleSubmit = jest.fn();
      wrapper = mount(<SignupForm />);
    });

    describe('render', () => {
      it('should have four form items', () => {
        expect(wrapper.find('.signup-form__item').length).toEqual(4);
      });
    });

    describe('handleSubmit', () => {
      it('should call after click', () => {
        const formButton = wrapper.find('.signup-form');

        formButton.simulate('submit');
        expect(SignupForm.prototype.handleSubmit).toHaveBeenCalled();
      });
    });
  });
});
