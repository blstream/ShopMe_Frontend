import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { AddOfferLink } from './OfferAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ScreenOfferAdd />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
