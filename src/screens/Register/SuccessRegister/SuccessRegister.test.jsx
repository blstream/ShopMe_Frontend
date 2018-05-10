import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { SuccessRegisterScreen } from './SuccessRegister';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = (
    <MemoryRouter>
      <SuccessRegisterScreen t={key => key} />
    </MemoryRouter>
  );
  ReactDOM.render(component, div);
});
