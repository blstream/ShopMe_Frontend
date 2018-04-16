import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginButton from './LoginButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <LoginButton />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
