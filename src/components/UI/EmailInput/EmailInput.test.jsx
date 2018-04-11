import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { EmailInput } from './EmailInput';

describe('EmailInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EmailInput />, div);
  });

  describe('component', () => {
    let emailInput;

    beforeEach(() => {
      emailInput = mount(<EmailInput name="test" />);
    });

    it('displays a label', () => {
      expect(emailInput.find('label').length).toEqual(1);
    });

    it('displays an email input', () => {
      expect(emailInput.find('input[type="email"]').length).toEqual(1);
    });

    it('does not display an error after render', () => {
      expect(emailInput.find('.add-form__error-message').text()).toEqual('');
    });

    it('does not display an error if incorrect value is entered to the input', () => {
      const input = emailInput.find('input');
      input.simulate('change', { target: { value: 'hello' } });
      expect(emailInput.find('.add-form__error-message').text()).toEqual('');
    });
  });

  describe('method', () => {
    let emailInput;

    beforeEach(() => {
      emailInput = mount(<EmailInput required name="test" />);
    });

    describe('checkValidity', () => {
      it('displays an error if value in the input is an incorrect email address', () => {
        const input = emailInput.find('input');
        input.simulate('change', { target: { value: 'hello' } });
        emailInput.instance().checkValidity();
        expect(emailInput.find('.add-form__error-message').text()).not.toEqual('');
      });

      it('displays an error if there is no value in the input', () => {
        const input = emailInput.find('input');
        input.simulate('change', { target: { value: '' } });
        emailInput.instance().checkValidity();
        expect(emailInput.find('.add-form__error-message').text()).not.toEqual('');
      });

      it('does not display an error if value value in the input is a correct email address', () => {
        const input = emailInput.find('input');
        input.simulate('change', { target: { value: 'test@test.com' } });
        emailInput.instance().checkValidity();
        expect(emailInput.find('.add-form__error-message').text()).toEqual('');
      });
    });
  });
});
