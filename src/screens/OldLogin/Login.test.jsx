import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ScreensLogin } from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ScreensLogin />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
