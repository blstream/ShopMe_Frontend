import React from 'react';
import ReactDOM from 'react-dom';
import { OfferDetailsScreen } from './OfferDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OfferDetailsScreen />, div);
});
