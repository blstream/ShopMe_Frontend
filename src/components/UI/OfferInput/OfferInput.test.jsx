import React from 'react';
import ReactDOM from 'react-dom';
import { OfferInput } from './OfferInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OfferInput />, div);
});
