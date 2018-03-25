import React from 'react';
import ReactDOM from 'react-dom';
import { OfferTextarea } from './OfferTextarea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OfferTextarea />, div);
});
