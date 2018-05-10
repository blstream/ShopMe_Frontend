import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { SuccessAddScreen } from './SuccessAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <SuccessAddScreen />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
