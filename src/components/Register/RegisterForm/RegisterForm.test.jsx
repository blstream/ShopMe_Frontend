import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    location: {
      state: {},
    },
  };
  const element = (
    <MemoryRouter>
      <RegisterForm location={props.location} voivodeships={[1, 2, 3]} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
