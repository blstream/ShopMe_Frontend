import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ScreenSignUp } from './SignUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ScreenSignUp />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
