import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ScreenSuccessRegister } from './SuccessRegister';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = (
    <MemoryRouter>
      <ScreenSuccessRegister t={key => key} />
    </MemoryRouter>
  );
  ReactDOM.render(component, div);
});
