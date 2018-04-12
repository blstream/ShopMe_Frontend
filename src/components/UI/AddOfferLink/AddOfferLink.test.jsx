import React from 'react';
import ReactDOM from 'react-dom';
import { AddOfferLink } from './AddOfferLink';
import { MemoryRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <AddOfferLink />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
