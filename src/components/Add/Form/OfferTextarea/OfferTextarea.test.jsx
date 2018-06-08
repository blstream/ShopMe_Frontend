import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { OfferTextarea } from './OfferTextarea';

describe('offerTextarea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OfferTextarea
      name="offer__base-description"
      placeholder="mockPlaceHolder"
      required
    />, div);
  });

  describe('component', () => {
    let offerTextarea;

    beforeEach(() => {
      offerTextarea = mount(<OfferTextarea name="test" placeholder="mockPlaceHolder" />);
    });

    it('displays a label', () => {
      expect(offerTextarea.find('label').length).toEqual(1);
    });

    it('displays a textarea', () => {
      expect(offerTextarea.find('textarea').length).toEqual(1);
    });

    it('recieves a placeholder', () => {
      expect(offerTextarea.props().placeholder).toBeDefined();
    });

    it('does not display an error after render', () => {
      expect(offerTextarea.find('.offer__textarea-error-message').text()).toEqual('');
    });
  });

  describe('method', () => {
    let offerTextarea;
    let textarea;

    beforeEach(() => {
      offerTextarea = mount(<OfferTextarea required name="test" />);
      textarea = offerTextarea.find('textarea');
    });

    describe('checkValidity', () => {
      it('displays an error if there is no value in the textarea', () => {
        textarea.simulate('change', { target: { value: '' } });
        offerTextarea.instance().checkValidity();
        expect(offerTextarea.find('.offer__textarea-error-message').text()).not.toEqual('');
      });

      it('does not display an error if there is a value in the textarea', () => {
        textarea.simulate('change', { target: { value: 'test' } });
        offerTextarea.instance().checkValidity();
        expect(offerTextarea.find('.offer__textarea-error-message').text()).toEqual('');
      });
    });

    describe('handleChange', () => {
      beforeEach(() => {
        jest.spyOn(OfferTextarea.prototype, 'activateNextField');
        jest.spyOn(OfferTextarea.prototype, 'deactivateNextFields');
      });

      afterEach(() => {
        OfferTextarea.prototype.activateNextField.mockRestore();
        OfferTextarea.prototype.deactivateNextFields.mockRestore();
      });

      it('calls activateNextField method if there was a value entered in the textarea', () => {
        textarea.simulate('change', { target: { value: 'test' } });
        expect(OfferTextarea.prototype.activateNextField).toHaveBeenCalled();
      });

      it('calls deactivateNextFields method if a value was deleted from the textarea', () => {
        textarea.simulate('change', { target: { value: '' } });
        expect(OfferTextarea.prototype.deactivateNextFields).toHaveBeenCalled();
      });
    });
  });
});
