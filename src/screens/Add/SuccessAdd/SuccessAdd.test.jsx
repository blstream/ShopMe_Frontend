import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ScreenSuccessAdd } from './SuccessAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ScreenSuccessAdd t={key => key} />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
