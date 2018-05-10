import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { LoginScreen } from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
