import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { OfferDetailsScreen } from './OfferDetails';

describe('OfferDetailsScreen', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const match = {
      params: {
        offerId: '1',
      },
    };
    const http = {
      get: fetch.mockResponse(JSON.stringify({ data: '123' })),
    };
    const element = (
      <MemoryRouter>
        <OfferDetailsScreen match={match} http={http} />
      </MemoryRouter>
    );

    ReactDOM.render(element, div);
  });
});
