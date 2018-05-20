import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import AboutMeTextArea from './AboutMeTextarea';

describe('aboutMeTextarea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutMeTextArea />, div);
  });
});

describe('component', () => {
  let aboutMeTextArea;

  beforeEach(() => {
    aboutMeTextArea = mount(<AboutMeTextArea name="test" />);
  });

  afterEach(() => {
    aboutMeTextArea.unmount();
  });

  it('displays a label', () => {
    expect(aboutMeTextArea.find('label').length).toEqual(1);
  });

  it('displays a textarea', () => {
    expect(aboutMeTextArea.find('textarea').length).toEqual(1);
  });

  it('does not display an error after render', () => {
    expect(aboutMeTextArea.find('.add-form__error-message').text()).toEqual('');
  });
});

describe('method', () => {
  let aboutMeTextArea;
  let textarea;

  beforeEach(() => {
    aboutMeTextArea = mount(<AboutMeTextArea name="test" />);
    textarea = aboutMeTextArea.find('textarea');
  });

  describe('checkValidity', () => {
    it('displays no error if there is no value in the textarea', () => {
      textarea.simulate('change', { target: { value: '' } });
      aboutMeTextArea.instance().checkValidity();
      expect(aboutMeTextArea.find('.add-form__error-message').text()).toEqual('');
    });

    it('displays no error if there is a value in the textarea', () => {
      textarea.simulate('change', { target: { value: 'test' } });
      aboutMeTextArea.instance().checkValidity();
      expect(aboutMeTextArea.find('.add-form__error-message').text()).toEqual('');
    });
  });
});
