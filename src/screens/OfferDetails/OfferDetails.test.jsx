import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { OfferDetailsScreen } from './OfferDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
    params: {
      offerId: '1',
    },
  };
  const element = (
    <MemoryRouter>
      <OfferDetailsScreen match={match} />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
