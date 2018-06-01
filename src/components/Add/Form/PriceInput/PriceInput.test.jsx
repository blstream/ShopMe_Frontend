import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { PriceInput } from './PriceInput';

describe('PriceInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PriceInput
      name="offerBasePrice"
      required
    />, div);
  });

  describe('component', () => {
    let priceInput;

    beforeEach(() => {
      priceInput = mount(<PriceInput name="test" />);
    });

    it('displays a label', () => {
      expect(priceInput.find('label').length).toEqual(1);
    });

    it('displays a text input', () => {
      expect(priceInput.find('input[type="text"]').length).toEqual(1);
    });

    it('displays a currency symbol', () => {
      expect(priceInput.find('.offer-price__input-currency').text()).toEqual('components.UI.priceInput.currency');
    });

    it('does not display an error after render', () => {
      expect(priceInput.find('.offer-price__error-message').text()).toEqual('');
    });

    it('does not display an error if incorrect value is entered to the input', () => {
      const input = priceInput.find('input');
      input.simulate('change', { target: { value: '9.900' } });
      expect(priceInput.find('.offer-price__error-message').text()).toEqual('');
    });
  });

  describe('method', () => {
    let priceInput;
    let input;

    beforeEach(() => {
      priceInput = mount(<PriceInput required name="test" />);
      input = priceInput.find('input');
    });

    describe('checkValidity', () => {
      it('displays an error if there is no value in the input', () => {
        input.simulate('change', { target: { value: '' } });
        priceInput.instance().checkValidity();
        expect(priceInput.find('.offer-price__error-message').text()).not.toEqual('');
      });

      it('does not display an error if there is a value in the input', () => {
        input.simulate('change', { target: { value: '9,99' } });
        priceInput.instance().checkValidity();
        expect(priceInput.find('.offer-price__error-message').text()).toEqual('');
      });
    });

    describe('handleChange', () => {
      beforeEach(() => {
        jest.spyOn(PriceInput.prototype, 'activateNextField');
        jest.spyOn(PriceInput.prototype, 'deactivateNextFields');
      });

      afterEach(() => {
        PriceInput.prototype.activateNextField.mockRestore();
        PriceInput.prototype.deactivateNextFields.mockRestore();
      });

      it('sets a value if a correct pattern was entered in the input', () => {
        input.simulate('change', { target: { value: '9,99' } });
        expect(priceInput.state().value).toEqual('9,99');
      });

      it('does not set a value if an incorrect pattern was entered in the input', () => {
        input.simulate('change', { target: { value: '9.900' } });
        expect(priceInput.state().value).toEqual('');
      });

      it('sets a value if up to 6 digits number was entered in the input', () => {
        input.simulate('change', { target: { value: '999999,99' } });
        expect(priceInput.state().value).toEqual('999999,99');
      });

      it('does not set a value if numbers with more than 6 digits was entered in the input', () => {
        input.simulate('change', { target: { value: '999999999,99' } });
        expect(priceInput.state().value).toEqual('');
      });

      it('calls activateNextField method if there was a value entered in the input', () => {
        input.simulate('change', { target: { value: '9,99' } });
        expect(PriceInput.prototype.activateNextField).toHaveBeenCalled();
      });

      it('calls deactivateNextFields method if a value was deleted from the input', () => {
        input.simulate('change', { target: { value: '' } });
        expect(PriceInput.prototype.deactivateNextFields).toHaveBeenCalled();
      });
    });

    describe('handleKeyUp', () => {
      it('adds zero before the first comma', () => {
        input.simulate('change', { target: { value: ',' } });
        input.simulate('keyUp');
        expect(priceInput.state().value).toEqual('0,');
      });
    });

    describe('handleBlur', () => {
      it('parses price to the floating-point number with two decimal places after comma', () => {
        input.simulate('change', { target: { value: '9,9' } });
        input.simulate('blur');
        expect(priceInput.state().value).toEqual('9,90');
      });
    });
  });
});
