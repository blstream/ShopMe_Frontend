import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';


import { AddOfferLink } from './AddOfferLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <AddOfferLink />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
