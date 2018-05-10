import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    location: {
      state: {},
    },
  };
  const element = (
    <MemoryRouter>
      <LoginForm location={props.location} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
