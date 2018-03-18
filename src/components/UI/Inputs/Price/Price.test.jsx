import React from 'react';
import ReactDOM from 'react-dom';
import { InputPrice } from './Price';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputPrice />, div);
});
