import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ErrorScreen } from './Error';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ErrorScreen />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
