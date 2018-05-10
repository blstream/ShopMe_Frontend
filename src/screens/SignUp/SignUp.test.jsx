import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { SignUpScreen } from './SignUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <SignUpScreen />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
