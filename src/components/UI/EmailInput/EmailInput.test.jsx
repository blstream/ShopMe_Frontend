import React from 'react';
import ReactDOM from 'react-dom';
import { EmailInput } from './EmailInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailInput />, div);
});
