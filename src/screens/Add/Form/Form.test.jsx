import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import SreensAddForm from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <SreensAddForm t={key => key} />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
