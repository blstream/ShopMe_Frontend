import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { AddFormScreen } from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <AddFormScreen />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
