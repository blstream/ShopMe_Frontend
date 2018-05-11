import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { SignupForm } from './SignupForm';

const props = {
  location: {
    state: {},
  },
};
const element = (
  <MemoryRouter>
    <SignupForm location={props.location} />
  </MemoryRouter>
);

describe('SignupForm Component', () => {
  it('should render without warnigns', () => {
    const div = document.createElement('div');
    ReactDOM.render(element, div);
  });

  describe('methods', () => {
    let wrapper;
    beforeEach(() => {
      SignupForm.prototype.handleSubmit = jest.fn();
      wrapper = mount(element);
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
