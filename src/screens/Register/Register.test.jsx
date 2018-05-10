import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from './Register';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    location: {
      state: {
        name: 'name',
        surname: 'surname',
        email: 'email',
      },
    },
  };
  const element = (
    <MemoryRouter>
      <RegisterScreen {...props} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
