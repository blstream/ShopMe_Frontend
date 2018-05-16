import React from 'react';
import ReactDOM from 'react-dom';
import { AppError } from './Error';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppError />, div);
});
