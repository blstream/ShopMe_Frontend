import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { ScreenOfferAdd } from './OfferAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ScreenOfferAdd t={key => key} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
