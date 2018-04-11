import React from 'react';
import ReactDOM from 'react-dom';
import { PhoneInput } from './PhoneInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhoneInput t={key => key} />, div);
});
