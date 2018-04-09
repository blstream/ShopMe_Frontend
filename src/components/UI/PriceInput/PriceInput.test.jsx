import React from 'react';
import ReactDOM from 'react-dom';
import PriceInput from './PriceInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceInput
    name="offer__base-price"
    placeholder="mockPlaceHolder"
    required
  />, div);
});
