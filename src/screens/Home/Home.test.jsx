import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { HomeScreen } from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <HomeScreen />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
