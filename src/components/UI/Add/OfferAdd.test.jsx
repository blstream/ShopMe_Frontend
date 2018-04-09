import React from 'react';
import ReactDOM from 'react-dom';


import { AddOfferLink } from './OfferAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddOfferLink t={key => key} />, div);
});
