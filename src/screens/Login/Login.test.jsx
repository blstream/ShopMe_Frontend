import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import SreensLogin from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <SreensLogin t={key => key} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
