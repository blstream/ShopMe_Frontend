import React from 'react';
import ReactDOM from 'react-dom';
import { AllScreenError } from './AllScreenError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllScreenError />, div);
});
