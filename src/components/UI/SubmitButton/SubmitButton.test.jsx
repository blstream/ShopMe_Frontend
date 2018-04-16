import React from 'react';
import ReactDOM from 'react-dom';
import { SubmitButton } from './SubmitButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitButton />, div);
});
