import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './RegisterForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    location: {
      state: {},
    },
  };
  ReactDOM.render(<RegisterForm t={key => key} location={props.location} />, div);
});
